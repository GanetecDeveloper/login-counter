import { LitElement, property } from 'lit-element';

export type TimesheetType = 'monthly' | 'maintenance' | 'yearly';

export class WcHomePageViewModel extends LitElement {
  @property({ type: String }) type: TimesheetType = 'monthly';

  @property({ type: Boolean }) expandedData: boolean = false;

}
