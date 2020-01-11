import React, { useState } from "react";
import Form from "../Form/Form";
import UserInfo from "../UserInfo/UserInfo";
import { getProfile, getRepos } from "../../api/api";
import Repo from "../Repo/Repo";
import styled from "styled-components";

const ReposContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Search = ({ theme }) => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);

  const updateUser = e => setUsername(e.currentTarget.value);

  const searchUser = e => {
    e.preventDefault();
    if (username.trim().length === 0) return;
    getProfile(username).then(profile => setProfile(profile));
    getRepos(username).then(repos => setRepos(repos));
  };

  return (
    <>
      <Form
        username={username}
        changeHandler={updateUser}
        theme={theme}
        label="Search a Github user"
        buttonText="Search"
        clickHandler={searchUser}
      />
      {profile !== null && <UserInfo profile={profile} />}
      <ReposContainer>
        {repos !== null &&
          repos.message !== "Not Found" &&
          repos.map(repo => <Repo key={repo.id} theme={theme} repo={repo} />)}
      </ReposContainer>
    </>
  );
};

export default Search;
