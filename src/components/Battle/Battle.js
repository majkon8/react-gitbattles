import React, { useState } from "react";
import Form from "../Form/Form";
import BattleSelected from "../BattleSelected/BattleSelected";
import styled from "styled-components";
import { getProfile } from "../../api/api";
import { StyledButton } from "../Form/Form";
import { getUserData } from "../../api/api";
import { LoaderDiv } from "../Popular/Popular";
import Card from "../Card/Card";
import Loader from "react-loader-spinner";

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const ProfilesContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WinnerLoser = styled.div`
  font-size: 20px;
`;

const Score = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -10px;
`;

const Battle = ({ theme }) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [profileOne, setProfileOne] = useState(null);
  const [profileTwo, setProfileTwo] = useState(null);
  const [profileOneData, setProfileOneData] = useState(null);
  const [profileTwoData, setProfileTwoData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const updatePlayerOne = e => setPlayerOne(e.target.value);
  const updatePlayerTwo = e => setPlayerTwo(e.target.value);

  const selectProfileOne = e => {
    e.preventDefault();
    getProfile(playerOne).then(profile => {
      if (profile.message === "Not Found") return;
      setProfileOne({
        ...profile,
        owner: { avatar_url: profile.avatar_url, login: profile.login }
      });
    });
  };

  const selectProfileTwo = e => {
    e.preventDefault();
    getProfile(playerTwo).then(profile => {
      if (profile.message === "Not Found") return;
      setProfileTwo({
        ...profile,
        owner: { avatar_url: profile.avatar_url, login: profile.login }
      });
    });
  };

  const cancelProfileOne = () => {
    setPlayerOne("");
    setProfileOne(null);
  };

  const cancelProfileTwo = () => {
    setPlayerTwo("");
    setProfileTwo(null);
  };

  const getPlayerOneData = () =>
    getUserData(playerOne).then(data => setProfileOneData(data));

  const getPlayerTwoData = () =>
    getUserData(playerTwo).then(data => setProfileTwoData(data));

  const battle = () => {
    setIsFetching(true);
    getPlayerOneData()
      .then(() => getPlayerTwoData())
      .then(() => setIsFetching(false));
  };

  const reset = () => {
    setPlayerOne("");
    setPlayerTwo("");
    setProfileOne(null);
    setProfileTwo(null);
    setProfileOneData(null);
    setProfileTwoData(null);
  };

  return (
    <>
      <FormContainer>
        {profileOne === null && (
          <Form
            theme={theme}
            label="Player One"
            buttonText="Submit"
            username={playerOne}
            changeHandler={updatePlayerOne}
            clickHandler={selectProfileOne}
          />
        )}
        {profileOne !== null &&
          profileOneData === null &&
          profileTwoData === null && (
            <BattleSelected
              theme={theme}
              name={profileOne.login}
              avatar={profileOne.avatar_url}
              cancel={cancelProfileOne}
            />
          )}
        {profileTwo === null && (
          <Form
            theme={theme}
            label="Player Two"
            buttonText="Submit"
            username={playerTwo}
            changeHandler={updatePlayerTwo}
            clickHandler={selectProfileTwo}
          />
        )}
        {profileTwo !== null &&
          profileOneData === null &&
          profileTwoData === null && (
            <BattleSelected
              theme={theme}
              name={profileTwo.login}
              avatar={profileTwo.avatar_url}
              cancel={cancelProfileTwo}
            />
          )}
      </FormContainer>
      {profileOne !== null &&
        profileTwo !== null &&
        profileOneData === null &&
        profileTwoData === null && (
          <StyledButton onClick={battle}>Battle</StyledButton>
        )}
      {profileOneData !== null && profileTwoData !== null && (
        <>
          <ProfilesContainer>
            <div>
              <WinnerLoser>
                {profileOneData.score > profileTwoData.score
                  ? "Winner"
                  : "Loser"}
              </WinnerLoser>
              <Score>Score: {profileOneData.score.toLocaleString()}</Score>
              <Card theme={theme} profile={profileOne} />
            </div>
            <div>
              <WinnerLoser>
                {profileTwoData.score > profileOneData.score
                  ? "Winner"
                  : "Loser"}
              </WinnerLoser>
              <Score>Score: {profileTwoData.score.toLocaleString()}</Score>
              <Card theme={theme} profile={profileTwo} />
            </div>
          </ProfilesContainer>
          <StyledButton onClick={reset}>Battle again</StyledButton>
        </>
      )}
      {isFetching && (
        <LoaderDiv>
          <span>Loading</span>
          <Loader type="ThreeDots" color={theme === "dark" && "white"} />
        </LoaderDiv>
      )}
    </>
  );
};

export default Battle;
