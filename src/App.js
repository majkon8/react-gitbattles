import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import styled from "styled-components";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import Search from "./components/Search/Search";
import Battle from "./components/Battle/Battle";

const Container = styled.div`
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;
  color: ${props => props.theme === "dark" && "white"};
  overflow: hidden;

  a {
    text-decoration: none;
    color: ${props => (props.theme === "light" ? "black" : "white")};
  }

  input::placeholder {
    color: ${props => props.theme === "dark" && "white"};
  }
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.background =
      theme === "light" ? "rgb(240, 240, 240)" : "rgb(30, 30, 30)";
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Container theme={theme}>
      <Router>
        <Nav changeTheme={changeTheme} theme={theme} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" render={() => <Popular theme={theme} />} />
          <Route path="/search" render={() => <Search theme={theme} />} />
          <Route path="/battle" render={() => <Battle theme={theme} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
