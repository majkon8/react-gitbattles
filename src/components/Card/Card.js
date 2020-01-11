import React from "react";
import styled from "styled-components";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
  FaCompass,
  FaUsers,
  FaUserFriends,
  FaCode
} from "react-icons/fa";

const Container = styled.div`
  text-align: center;
  width: 240px;
  margin: 20px 30px;
  font-size: 16px;
  text-overflow: hidden;

  div,
  img,
  a {
    margin: 5px 0;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    display: block;
  }

  svg {
    font-size: 22px;
    margin-right: 10px;
    position: relative;
    top: 3px;
  }
`;

const Number = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  text-align: left;
  border-radius: 20px;
  padding: 10px;
  background: ${props =>
    props.theme === "light" ? "#ddd" : "rgb(40, 40, 40)"};
`;

const Repo = styled.a`
  color: rgb(190, 50, 30) !important;
  font-size: 18px;
  width: 316px;
  position: relative;
  right: 38px;

  @media (min-width: 400px) {
    width: 400px;
    right: 80px;
  }

  @media (min-width: 577px) {
    width: 500px;
    right: 130px;
  }
`;

export const UserIcon = styled(FaUser)`
  color: rgb(255, 190, 120);
`;

export const StarIcon = styled(FaStar)`
  color: rgb(255, 215, 0);
`;

export const ForkIcon = styled(FaCodeBranch)`
  color: rgb(130, 200, 250);
`;

const IssueIcon = styled(FaExclamationTriangle)`
  color: rgb(240, 140, 150);
`;

export const CompassIcon = styled(FaCompass)`
  color: rgb(140, 120, 255);
`;

export const FollowersIcon = styled(FaUsers)`
  color: rgb(130, 200, 250);
`;

export const FollowingIcon = styled(FaUserFriends)`
  color: rgb(60, 180, 100);
`;

export const ReposIcon = styled(FaCode)`
  color: rgb(60, 80, 90);
`;

const Card = ({ theme, profile, number }) => (
  <Container theme={theme}>
    {number && <Number>#{number}</Number>}
    <Img src={profile.owner.avatar_url} />
    <Repo href={profile.html_url}>{profile.name}</Repo>
    {profile.owner.login && (
      <InfoContainer theme={theme}>
        {profile.owner.login && (
          <a href={profile.owner.html_url}>
            <UserIcon />
            {profile.owner.login}
          </a>
        )}
        {profile.location && (
          <div>
            <CompassIcon />
            {profile.location}
          </div>
        )}
        {typeof profile.followers !== "undefined" && (
          <div>
            <FollowersIcon />
            Followers: {profile.followers}
          </div>
        )}
        {typeof profile.following !== "undefined" && (
          <div>
            <FollowingIcon />
            Following: {profile.following}
          </div>
        )}
        {profile.public_repos && (
          <div>
            <ReposIcon />
            Public repos: {profile.public_repos.toLocaleString()}
          </div>
        )}
        {profile.watchers && (
          <div>
            <StarIcon />
            {profile.watchers.toLocaleString()} stars
          </div>
        )}
        {profile.forks && (
          <div>
            <ForkIcon />
            {profile.forks.toLocaleString()} forks
          </div>
        )}
        {profile.open_issues && (
          <div>
            <IssueIcon />
            {profile.open_issues.toLocaleString()} open issues
          </div>
        )}
      </InfoContainer>
    )}
  </Container>
);

export default Card;
