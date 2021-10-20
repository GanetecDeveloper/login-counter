import { html, nothing, TemplateResult } from 'lit-html';
import { styles } from './css/game-page.css';
import { CSSResult } from 'lit-element';
import { WcGamePageViewModel } from './WcGamePageViewModel';

export class WcGamePageView extends WcGamePageViewModel {
  static get styles(): Array<CSSResult> {
    return [styles];
  }

  protected render = (): TemplateResult => html`
    <div class="wrapper">
      ${this.renderHeader()}
      ${this.renderPoints()}
      ${this.renderMergeButton()}
      ${this.isButtonVisible() ? this.renderBuyButton() : nothing}
    </div>`;

  protected renderHeader = (): TemplateResult => html`
    <mwc-top-app-bar-fixed dense centerTitle>
      <div slot = "title">Hi, ${this.user.name}</div>
      <mwc-icon-button icon="arrow_forward_ios" slot="actionItems"> </mwc-icon-button>
       <!-- <div>content</div> -->
    </mwc-top-app-bar-fixed>`;

  protected renderPoints = (): TemplateResult => html`
    <h3>Merged pull request: ${this.user.points}</h3>
    <h3>Auto Mergers: ${this.user.autoClickers}</h3>`;

  protected renderMergeButton = (): TemplateResult => html`
    <mwc-button raised
      label="Merge"
      @click=${() => this._addPoint()}>
    </mwc-button>`;

  protected renderBuyButton = (): TemplateResult => html`
    <mwc-button raised label="Buy auto merger (${this.user.autoClickerCost})"
      @click=${() => this._addAutoclicker()}>
    </mwc-button>`;

}

window.customElements.define('wc-game-page', WcGamePageView);
