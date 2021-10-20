import { html, TemplateResult } from 'lit-html';
import '@bbva/wc-login-form';
export default {
  title: 'Design System/molecules/LoginForm',
  component: 'wc-login-form',
  argTypes: {
    text: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  date?: Date;
}

const Template: Story<ArgTypes> = () => html`
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,600"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
    rel="stylesheet"
  />
  <wc-login-form></wc-login-form>
`;

export const Empty = Template.bind({});
