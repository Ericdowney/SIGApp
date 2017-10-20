import { TodoItem } from '../app.state';
import * as TodoActions from './todo.actions';

export type Action = TodoActions.All;

export function selectedTodoItem(state: TodoItem, action: Action) {
    switch (action.type) {
        case TodoActions.SET_SELECTED_TODO_ITEM: {
            return action.item;
        }
    }
    return state;
}