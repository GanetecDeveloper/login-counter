import { html, TemplateResult } from 'lit-html';
import { styles } from './css/home-page.css';
import { CSSResult } from 'lit-element';
import { WcHomePageViewModel } from './WcHomePageViewModel';

export class WcHomePageView extends WcHomePageViewModel {
  static get styles(): Array<CSSResult> {
    return [styles];
  }

  protected render = (): TemplateResult => html`
    <div class="wrapper">
      ${this.renderIcon()}
      ${this.renderHeader()}
      ${this.renderCounter()}
      ${this.renderButton()}
    </div>`;

  protected renderIcon = (): TemplateResult => html`
    <mwc-icon class="lock">lock</mwc-icon>`;

  protected renderHeader = (): TemplateResult => html`
    <h1>Create new player</h1>`;

  protected renderCounter = (): TemplateResult => html`
    <mwc-textfield label='Name*'></mwc-textfield>`;

  protected renderButton = (): TemplateResult => html`
    <mwc-button raised label="Join"></mwc-button>`;

}

window.customElements.define('wc-home-page', WcHomePageView);
