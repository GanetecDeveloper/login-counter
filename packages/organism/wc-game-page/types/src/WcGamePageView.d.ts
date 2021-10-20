import { TemplateResult } from 'lit-html';
import { CSSResult } from 'lit-element';
import { WcGamePageViewModel } from './WcGamePageViewModel';
export declare class WcGamePageView extends WcGamePageViewModel {
    static get styles(): Array<CSSResult>;
    protected render: () => TemplateResult;
    protected renderHeader: () => TemplateResult;
    protected renderPoints: () => TemplateResult;
    protected renderMergeButton: () => TemplateResult;
    protected renderBuyButton: () => TemplateResult;
}
//# sourceMappingURL=WcGamePageView.d.ts.map