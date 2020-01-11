import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  width: 220px;
  justify-content: space-between;
  padding: 0;
  font-weight: bold;
`;

const ThemeIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: relative;
  top: 5px;
`;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
  margin-right: 27px;
`;

const Nav = ({ changeTheme, theme }) => (
  <Container>
    <StyledUl theme={theme}>
      <li>
        <NavLink to="/" exact activeStyle={{ color: "rgb(190, 50, 30)" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/battle" activeStyle={{ color: "rgb(190, 50, 30)" }}>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink to="/popular" activeStyle={{ color: "rgb(190, 50, 30)" }}>
          Popular
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" activeStyle={{ color: "rgb(190, 50, 30)" }}>
          Search
        </NavLink>
      </li>
    </StyledUl>
    <ThemeIcon onClick={changeTheme}>
      {theme === "light" ? "💡" : "🌘"}
    </ThemeIcon>
  </Container>
);

export default Nav;
