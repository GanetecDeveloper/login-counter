import { html, TemplateResult } from 'lit-html';
import { styles } from './css/login-form.css';
import { CSSResult } from 'lit-element';
import { WcLoginFormViewModel } from './WcLoginFormViewModel';

export class WcLoginFormView extends WcLoginFormViewModel {
  static get styles(): Array<CSSResult> {
    return [styles];
  }

  protected render = (): TemplateResult => html`
      ${this.renderForm()}
      ${this.renderLoginButton()}
  `;

  protected renderForm = (): TemplateResult => html`
    <mwc-textfield label='Email'></mwc-textfield>
    <mwc-textfield label='Password' type='password'></mwc-textfield>
  `;

  protected renderLoginButton = (): TemplateResult => html`
    <mwc-button raised label="Log in"></mwc-button>
  `;

}

window.customElements.define('wc-login-form', WcLoginFormView);
