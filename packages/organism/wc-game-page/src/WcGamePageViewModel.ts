import { LitElement, property } from 'lit-element';
import { User } from './domain/User';

export class WcGamePageViewModel extends LitElement {

  // @property({ type: Object }) user!: User;

  @property({ type: Object, reflect: true }) set user(newUser: User) {
    const oldValue = this._user;
    this._user = newUser;
    console.log("USER SET", newUser);
    this.requestUpdate("user", newUser);
    this.requestUpdate();
  }
  get user(): User {
    console.log("USER GET", this._user);
    return this._user;
  }
  protected _user!: User;

  // @state() points: number = 0;

  // @state() autoClickers: number = 0;

  private autoClickerBaseCost: number = 10;
  private autoClickerTime: number = 100;

  // autoClickerCost: number = this.autoClickerBaseCost;

  private timer: ReturnType<typeof setTimeout> | undefined;

  protected _addPoint = (): void => { this.user.points++; console.log(this.user, this._user) }

  protected _addAutoclicker = (): void => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setInterval(this._addAutoClickerPoints, this.autoClickerTime);
    this.user.points -= this.user.autoClickerCost;
    this.user.autoClickers++;
    this.user.autoClickerCost = this.autoClickerBaseCost + this.autoClickerBaseCost * this.user.autoClickers;
    console.log(this.user)
  }

  protected _addAutoClickerPoints = (): void => { this.user.points += this.user.autoClickers }

  protected isButtonVisible = (): boolean => this.user.points >= this.user.autoClickerCost;

  protected isButtonEnable = (): boolean => this.user.autoClickers >=1 && this.isButtonVisible();

}
