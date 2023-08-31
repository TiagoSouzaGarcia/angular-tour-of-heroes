import { moduleMetadata, Meta } from '@storybook/angular';
import { TodoComponent, Todo } from './todo.component';

const todo: Todo = { title: 'Sprint concluída', done: false };

const meta: Meta<TodoComponent> = {
  title: 'APP / TodoComponent',
  component: TodoComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [TodoComponent],
    }),
  ],
};
export default meta;

export const TodoNotDone = () => ({
  component: TodoComponent,
  template: '<app-todo [todo]="todo"></app-todo>',
  props: {
    todo,
  },
});

export const TodoDone = () => ({
  component: TodoComponent,
  template: '<app-todo [todo]="todo"></app-todo>',
  props: {
    todo: { ...todo, done: true },
  },
});
