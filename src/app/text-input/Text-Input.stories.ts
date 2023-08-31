import { moduleMetadata, type Meta, AngularRenderer } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

const meta: Meta<TextInputComponent> = {
  title: 'APP / TextInput',
  component: TextInputComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [TextInputComponent],
    }),
  ],
};

export default meta;

export const ExampleStory = () => ({
  component: TextInputComponent,
});

export const Large = {
  args: {
    size: 'large',
    value: 'large text input',
  },
};

export const Placeholder = () => ({
  component: TextInputComponent,
  props: {
    placeholder: 'email@host.com',
    type: 'email',
  },
});

export const Border = () => ({
  component: TextInputComponent,
  template: `
    <app-text-input [style]="borderStyle"></app-text-input>
  `,
  props: {
    borderStyle: 'border-radius: 15px;',
  },
});
