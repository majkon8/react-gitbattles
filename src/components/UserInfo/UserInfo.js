import React from "react";
import styled from "styled-components";
import {
  UserIcon,
  CompassIcon,
  ReposIcon,
  FollowingIcon,
  FollowersIcon
} from "../Card/Card";
import { FaStickyNote, FaCalendarAlt } from "react-icons/fa";
import Card from "../Card/Card";

const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  justify-content: center;
  margin-top: 50px;

  a {
    color: rgb(190, 50, 30) !important;
    font-weight: bold;
  }

  svg {
    font-size: 22px;
    margin-right: 10px;
    position: relative;
    top: 5px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainInfoContainer = styled.div`
  width: 240px;
  margin-right: 60px;

  div {
    margin: 15px 0;
  }

  @media (max-width: 900px) {
    margin-right: 0;
    margin-top: 10px;
    position: relative;
    left: 40px;
  }
`;

const BoldInfo = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const SecondaryInfoContainer = styled.div`
  width: 240px;
  margin-right: 50px;
  position: relative;
  bottom: 5px;

  div,
  a {
    margin: 15px 0;
  }

  @media (max-width: 900px) {
    margin-right: 0;
    margin-top: 30px;
    bottom: 0;
    left: 40px;
  }
`;

const GistIcon = styled(FaStickyNote)`
  color: orange;
`;

const CalendarIcon = styled(FaCalendarAlt)`
  color: #999;
`;

const NoUserDiv = styled.div`
  font-size: 18px;
  margin-top: 50px;
`;

const Link = styled.a`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const UserInfo = ({ profile }) => {
  const date = new Date(profile.created_at);
  const readableDate = date.toLocaleString("en-us", { month: "long" });
  if (typeof profile.avatar_url === "undefined")
    return <NoUserDiv>No user with such username</NoUserDiv>;
  return (
    <Container>
      <Card
        profile={{
          owner: {
            avatar_url: profile.avatar_url
          },
          html_url: profile.html_url,
          name: profile.login
        }}
      />
      {(profile.name ||
        profile.location ||
        profile.company ||
        profile.blog ||
        profile.bio) && (
        <MainInfoContainer>
          {profile.name && (
            <BoldInfo>
              <UserIcon />
              {profile.name}
            </BoldInfo>
          )}
          {profile.location && (
            <BoldInfo>
              <CompassIcon />
              {profile.location}
            </BoldInfo>
          )}
          {profile.company && <BoldInfo>Company: {profile.company}</BoldInfo>}
          <Link href={profile.blog}>{profile.blog}</Link>
          <div>{profile.bio}</div>
        </MainInfoContainer>
      )}
      <SecondaryInfoContainer>
        <div>
          <ReposIcon />
          Repos: {profile.public_repos.toLocaleString()}
        </div>
        <div>
          <GistIcon />
          Gists: {profile.public_gists.toLocaleString()}
        </div>
        <div>
          <FollowersIcon />
          Followers: {profile.followers.toLocaleString()}
        </div>
        <div>
          <FollowingIcon />
          Following: {profile.following.toLocaleString()}
        </div>
        <div>
          <CalendarIcon />
          Joined: {readableDate}, {date.getFullYear()}
        </div>
      </SecondaryInfoContainer>
    </Container>
  );
};

export default UserInfo;
