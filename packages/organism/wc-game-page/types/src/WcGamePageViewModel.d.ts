import { LitElement } from 'lit-element';
import { User } from './domain/User';
export declare class WcGamePageViewModel extends LitElement {
    set user(newUser: User);
    get user(): User;
    protected _user: User;
    private autoClickerBaseCost;
    private autoClickerTime;
    private timer;
    protected _addPoint: () => void;
    protected _addAutoclicker: () => void;
    protected _addAutoClickerPoints: () => void;
    protected isButtonVisible: () => boolean;
    protected isButtonEnable: () => boolean;
}
//# sourceMappingURL=WcGamePageViewModel.d.ts.map