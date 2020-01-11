import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  max-width: 500px;
  margin: 20px auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;

  li {
    margin: 0 5px;
    cursor: pointer;

    &:hover {
      color: rgb(190, 50, 30) !important;
    }
  }
`;

const LangsList = ({ selectLang, selectedLang }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const list = useRef(null);
  const list1 = useRef(null);
  const list2 = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler, false);
    };
  }, []);

  useEffect(() => colorSelected(), [selectedLang, windowWidth]);

  const colorSelected = () => {
    if (list.current !== null) {
      changeSelectedStyle(list);
    } else {
      const lists = [list1, list2];
      for (let list of lists) {
        changeSelectedStyle(list);
      }
    }
  };

  const changeSelectedStyle = list => {
    list.current.childNodes.forEach(children => {
      if (children.textContent === selectedLang) {
        children.style.color = "rgb(190, 50, 30)";
        children.style.fontWeight = "bold";
      } else {
        children.style.color = "inherit";
        children.style.fontWeight = "normal";
      }
    });
  };

  const resizeHandler = () => setWindowWidth(window.innerWidth);
  return (
    <>
      {windowWidth > 440 && (
        <List ref={list}>
          <li onClick={selectLang}>All</li>
          <li onClick={selectLang}>Javascript</li>
          <li onClick={selectLang}>Ruby</li>
          <li onClick={selectLang}>Python</li>
          <li onClick={selectLang}>Java</li>
          <li onClick={selectLang}>PHP</li>
          <li onClick={selectLang}>CSS</li>
          <li onClick={selectLang}>Shell</li>
        </List>
      )}
      {windowWidth <= 440 && (
        <>
          <List ref={list1}>
            <li onClick={selectLang}>All</li>
            <li onClick={selectLang}>Javascript</li>
            <li onClick={selectLang}>Ruby</li>
            <li onClick={selectLang}>Python</li>
          </List>
          <List ref={list2}>
            <li onClick={selectLang}>Java</li>
            <li onClick={selectLang}>PHP</li>
            <li onClick={selectLang}>CSS</li>
            <li onClick={selectLang}>Shell</li>
          </List>
        </>
      )}
    </>
  );
};

export default LangsList;
