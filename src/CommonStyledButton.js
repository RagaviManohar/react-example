import styled from "styled-components";

export const CommonStyledButton = styled.button`
  background: ${(props) => (props.primary ? "#2FC3C5" : "white")};
  color: ${(props) => (props.primary ? "white" : "#595959")};
  border: 1px solid ${(props) => (props.primary ? "white" : "#e1e1e1")};
  hover {
    background: ${(props) => (props.primary ? "#2FC3C5" : "#e1e1e1")};
    opacity: 80%;
  }

  font-family: "GothamRoundedMedium";
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 150px;
  border-radius: 4px;
  line-height: normal;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export default CommonStyledButton;
