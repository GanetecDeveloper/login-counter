import { css, CSSResult } from 'lit-element';

export const styles: CSSResult = css`
  :host {
    display: grid;
    grid-template-rows: repeat(auto-fit, min-content);
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
    font-family: "Noto Sans HK", sans-serif;
    color: #FFFFFF;
    background-color: #004481;
    width: 100vw;
    height: 100vh;
  }

  :host .wrapper > * {
    display: grid;
    align-items: center;
    justify-items: center;
    align-self: start;
  }

  mwc-button {
    --mdc-theme-primary: #028484;
    --mdc-theme-on-primary: #FFFFFF;
    --mdc-button-outline-color: #028484;
    margin: 10px;
  }

  mwc-top-app-bar-fixed{
    --mdc-theme-primary: #072146;
  }

`;
