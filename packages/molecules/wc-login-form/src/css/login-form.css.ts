import { css, CSSResult } from 'lit-element';

export const styles: CSSResult = css`
  :host {
    display: grid;
    grid-template-rows: repeat(auto-fit, min-content);
    gap: 8px 8px;
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    max-width: 280px;
  }

  mwc-button {
    --mdc-theme-primary: #214a80;
    --mdc-theme-on-primary: #FFFFFF;
    --mdc-button-outline-color: #214a80;
  }

  mwc-textfield {
    --mdc-theme-primary: #214a80;
  }

`;
