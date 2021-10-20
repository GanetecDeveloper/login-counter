export class User implements IUser {

    name: string = "";
    points: number = 0;
    autoClickers: number = 0;
    autoClickerCost: number = 0;

    constructor (user: IUser) {
        Object.assign(this, user);
    }

}

export interface IUser {
    name: string;
    points?: number;
    autoClickers?: number;
    autoClickerCost?: number;
}
