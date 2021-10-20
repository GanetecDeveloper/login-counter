import { TemplateResult } from 'lit-html';
import '@bbva/wc-login-form';
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
    date?: Date;
}
export declare const Empty: Story<ArgTypes>;
export declare const Montly: Story<ArgTypes>;
export declare const Maintenance: Story<ArgTypes>;
//# sourceMappingURL=index.stories.d.ts.map