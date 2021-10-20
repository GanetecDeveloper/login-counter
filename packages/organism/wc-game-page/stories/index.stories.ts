import { html, TemplateResult } from 'lit-html';
import '@bbva/wc-game-page';
import { User } from '../src/domain/User';

export default {
  title: 'Design System/Organisms/GamePage',
  component: 'wc-game-page',
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
  user?: User;
}

const Template: Story<ArgTypes> = ({
  user = new User({ name: "Fran" }),
}: ArgTypes) => html`
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
  <wc-game-page .user=${user}></wc-game-page>
`;

export const Empty = Template.bind({});
