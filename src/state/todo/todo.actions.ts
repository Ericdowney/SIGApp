import { TodoItem } from '../app.state';
import { Action } from '@ngrx/store';

export const SET_SELECTED_TODO_ITEM = 'SET_SELECTED_TODO_ITEM';

export class SetSelectedTodoItem implements Action {
    readonly type = SET_SELECTED_TODO_ITEM;

    constructor(
        public item: TodoItem,
    ) { }
}

export type All = SetSelectedTodoItem;