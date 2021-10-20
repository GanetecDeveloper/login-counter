export declare class FilterListItem<T, K> implements IFilterListItem<T, K> {
    displayName: string;
    filterListType: number;
    data: T;
    constructor(item: IFilterListItem<T, K>);
}
export interface IFilterListItem<T, K> {
    displayName: string;
    filterListType: number;
    data: T;
}
//# sourceMappingURL=FilterListItem.d.ts.map