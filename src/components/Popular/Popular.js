import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import LangsList from "../LangsList/LangsList";
import { fetchPopularRepos } from "../../api/api";
import Loader from "react-loader-spinner";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const LoaderDiv = styled.div`
  font-size: 36px;

  span {
    position: relative;
    top: 15px;
  }
`;

const Popular = ({ theme }) => {
  const [repos, setRepos] = useState(null);
  const [selectedLang, setSelectedLang] = useState("All");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    fetchPopularRepos(selectedLang)
      .then(result => {
        setRepos(result);
      })
      .then(() => setIsFetching(false));
  }, [selectedLang]);

  const selectLang = e => setSelectedLang(e.currentTarget.textContent);

  return (
    <>
      <LangsList selectedLang={selectedLang} selectLang={selectLang} />
      {(isFetching || repos.language !== selectedLang) && (
        <LoaderDiv>
          <span>Loading</span>
          <Loader type="ThreeDots" color={theme === "dark" && "white"} />
        </LoaderDiv>
      )}
      {!isFetching &&
        repos !== null &&
        typeof repos.items !== "undefined" &&
        repos.language === selectedLang && (
          <CardsContainer>
            {repos.items.map((repo, index) => (
              <Card
                profile={repo}
                key={repo.id}
                theme={theme}
                number={index + 1}
              />
            ))}
          </CardsContainer>
        )}
    </>
  );
};

export default Popular;
