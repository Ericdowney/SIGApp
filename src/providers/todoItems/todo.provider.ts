import { Observable } from 'rxjs/Rx';

import { TodoItem } from '../../state/app.state';

export class TodoProvider {

    private items: TodoItem[];

    constructor() {
        this.items = [
            (new TodoItem(1, 'alarm', 'Set alarm to wake up', false)),
            (new TodoItem(2, 'android', 'Finally build an Android app', false)),
            (new TodoItem(3, 'analytics', 'Look into Crashlytics', false)),
        ];
    }
    
    loadTodoItems(): Observable<TodoItem[]> {
        return Observable.of(this.items)
    }

    createTodoItem(item: any) {
        let newItem = new TodoItem(this.items.length, item.icon, item.description, item.completed);
        this.items.push(newItem);
    }

}