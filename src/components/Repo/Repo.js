import React from "react";
import styled from "styled-components";
import { StarIcon, ForkIcon } from "../Card/Card";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  position: relative;
  margin: 40px;
  text-align: left;
  width: 280px;
  height: 280px;
  padding: 20px;
  background: ${props =>
    props.theme === "light" ? "#ddd" : "rgb(40, 40, 40)"};
  border-radius: 20px;

  div {
    margin: 10px 0;
  }

  svg {
    font-size: 20px;
    position: relative;
    top: 3px;
  }

  @media (max-width: 360px) {
    width: 250px;
    height: 290px;
    padding: 20px;
  }
`;

const RepoName = styled.a`
  color: rgb(190, 50, 30) !important;
  font-weight: bold;
  display: block;
  font-size: 20px;
`;

const Description = styled.div`
  margin: 20px 0;
`;

const FormatDescription = desc => {
  if (desc === null) return;
  return desc.length > 120 ? desc.slice(0, 117) + "..." : desc;
};

const StyledButton = styled(Button)`
  && {
    background: rgb(190, 50, 30);
    color: white;
    text-transform: none;
    width: 100px;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      background: #9a2918;
    }

    @media (max-width: 360px) {
      bottom: 15px;
    }
  }
`;

const Repo = ({ theme, repo }) => {
  return (
    <Container theme={theme}>
      <RepoName href={repo.html_url}>{repo.name}</RepoName>
      <Description>{FormatDescription(repo.description)}</Description>
      <div>
        <StarIcon /> Stars: {repo.stargazers_count.toLocaleString()}
      </div>
      <div>
        <ForkIcon /> Forks: {repo.forks_count.toLocaleString()}
      </div>
      {repo.language && <div>Main language: {repo.language}</div>}
      <a href={repo.html_url}>
        <StyledButton variant="contained">Repo</StyledButton>
      </a>
    </Container>
  );
};

export default Repo;
