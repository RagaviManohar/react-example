import styled from "styled-components";

const sideMenuTypes = {
  top: { top: 0, right: "unset", left: "unset" },
  right: { right: 0 },
  bottom: { bottom: 0, right: "unset", left: "unset" },
  left: { left: 0 },
};

export const SideMenuStyles = styled.div`
  height: ${(props) => (props.height ? props.height : " 100%")};
  width: ${(props) => (props.width ? props.width : "130px")};
  position: fixed;
  z-index: 1;
  ${(props) => sideMenuTypes[props.type]};
  background: #eee;
  overflow-x: hidden;
`;

export const TopDownMenuStyles = styled.div`
  height: ${(props) => (props.height ? props.height : "130px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  position: fixed;
  z-index: 1;
  ${(props) => sideMenuTypes[props.type]};
  background: #eee;
  overflow-x: hidden;
`;

export const CommonStyles = styled.div`
  height: 100%;
  width: 100%;
  background: 'white;
`;
