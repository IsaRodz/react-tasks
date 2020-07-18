import React from "react";
import logo from "../assets/logo.svg";
import Form from "./Form";
import styled from "styled-components";
import { themes } from "./theme";

const Header = () => (
  <AppHeader>
    <div>
      <img src={logo} className="app-logo" alt="logo" />
      <span>React</span>
    </div>
    <Form />
  </AppHeader>
);

const theme = themes.light;

const AppHeader = styled.header`
  background: ${theme.nav};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  div {
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: calc(10px + 2vmin);
    display: flex;
    align-items: center;
    flex: 1;
    color: #212121;
    .app-logo {
      height: 8vmin;
      pointer-events: none;

      @media (prefers-reduced-motion: no-preference) {
        animation: app-logo-spin infinite 30s linear;
      }
      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export default Header;
