import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TodoProvider } from '../../providers/todoItems/todo.provider';

@Component({
    templateUrl: './todoItem.page.html'
})
export class TodoItemPage {

    newItem = {
        icon: '',
        description: '',
        completed: false
    };

    constructor(
        public navCtrl: NavController,
        public todoProvider: TodoProvider,
    ) { }

    createItem() {
        this.todoProvider.createTodoItem(this.newItem);
    }
}