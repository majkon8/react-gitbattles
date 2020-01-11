import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-size: 40px;
  margin-top: 50px;
  padding: 0 10px;
`;

const StyledButton = styled(Button)`
  && {
    background: rgb(190, 50, 30);
    color: white;
    width: 200px;
    display: block;
    margin: 30px auto;
    font-size: 18px;
    padding: 5px;

    &:hover {
      background: #9a2918;
    }
  }
`;

const Home = () => (
  <>
    <Title>GitBattles, all you need!</Title>
    <Link to="/battle" style={{ textDecoration: "none" }}>
      <StyledButton variant="contained">Battle</StyledButton>
    </Link>
    <Link to="/popular" style={{ textDecoration: "none" }}>
      <StyledButton variant="contained">Popular</StyledButton>
    </Link>
    <Link to="/search" style={{ textDecoration: "none" }}>
      <StyledButton variant="contained">Search</StyledButton>
    </Link>
  </>
);

export default Home;
