import React from "react";
import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";

const Container = styled.div`
  background: ${props =>
    props.theme === "light" ? "#ddd" : "rgb(40, 40, 40)"};
  height: 55px;
  padding: 10px;
  width: 40%;
  min-width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 30px 0;
  position: relative;
  overflow: hidden;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-right: 10px;
`;

const Name = styled.div`
  color: rgb(190, 50, 30);
  font-weight: bold;
  font-size: 18px;
`;

const CancelIcon = styled(FaTimesCircle)`
  font-size: 30px;
  color: rgb(190, 50, 30);
  cursor: pointer;
  position: absolute;
  right: 10px;
`;

const BattleSelected = ({ theme, avatar, name, cancel }) => (
  <Container theme={theme}>
    <AvatarContainer>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </AvatarContainer>
    <CancelIcon onClick={cancel} />
  </Container>
);

export default BattleSelected;
