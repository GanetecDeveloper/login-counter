import { html, TemplateResult } from 'lit-html';
import '@bbva/wc-home-page';

export default {
  title: 'Design System/Organisms/HomePage',
  component: 'wc-home-page',
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
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,600"
    rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;500;700&display=swap"
    rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
    rel="stylesheet"/>
  <style>
    html, body {
      height: 100%;
      margin: 0;
    }
  </style>
  <wc-home-page></wc-home-page>
`;

export const Empty = Template.bind({});
