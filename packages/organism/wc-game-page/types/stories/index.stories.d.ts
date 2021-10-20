import { TemplateResult } from 'lit-html';
import '@bbva/wc-game-page';
import { User } from '../src/domain/User';
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        text: {
            control: string;
        };
    };
};
export default _default;
interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
interface ArgTypes {
    user?: User;
}
export declare const Empty: Story<ArgTypes>;
//# sourceMappingURL=index.stories.d.ts.map