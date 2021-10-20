export declare class User implements IUser {
    name: string;
    points: number;
    autoClickers: number;
    autoClickerCost: number;
    constructor(user: IUser);
}
export interface IUser {
    name: string;
    points?: number;
    autoClickers?: number;
    autoClickerCost?: number;
}
//# sourceMappingURL=User.d.ts.map