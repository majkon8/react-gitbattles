import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const FormLabel = styled.div`
  font-size: 30px;
  margin-top: 50px;

  @media (max-width: 450px) {
    margin-top: 30px;
    font-size: 26px;
  }
`;

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgb(190, 50, 30)"
      }
    }
  }
})(TextField);

const StyledInput = styled(CssTextField)`
  && {
    width: 400px;
    margin: 20px 0;

    input {
      color: ${props => props.theme === "dark" && "white"};
    }

    div {
      height: 40px;
      border-color: blue;
    }

    fieldset {
      border-color: ${props =>
        props.theme === "dark" && "rgba(255, 255, 255, 0.5)"};
    }

    &:hover {
      fieldset {
        border-color: ${props => props.theme === "dark" && "white"};
      }
    }

    @media (max-width: 450px) {
      width: 280px;
      margin: 15px 0;

      div {
        height: 35px;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 8px;
    width: 200px;
    text-transform: none;
    font-size: 18px;
    padding: 5px;
    background: rgb(190, 50, 30);
    color: white;

    &:hover {
      background: #9a2918;
    }

    @media (max-width: 450px) {
      padding: 2px;
      width: 150px;
    }
  }
`;

const Form = ({
  label,
  buttonText,
  theme,
  username,
  changeHandler,
  clickHandler
}) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <form>
        <StyledInput
          theme={theme}
          placeholder="Github Username"
          variant="outlined"
          value={username}
          onChange={changeHandler}
        />
        <StyledButton onClick={clickHandler} variant="contained" type="submit">
          {buttonText}
        </StyledButton>
      </form>
    </div>
  );
};

export default Form;
