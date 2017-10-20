import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { TodoProvider } from '../../providers/todoItems/todo.provider';
import { AppState, TodoItem } from '../../state/app.state';
import * as TodoActions from '../../state/todo/todo.actions';
import { TodoItemPage } from '../todoItem/todoItem.page';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    openItems: Observable<TodoItem[]>;

    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public store: Store<AppState>,
        public todoProvider: TodoProvider
    ) { }

    ionViewWillEnter() {
        this.openItems = this.todoProvider.loadTodoItems();
    }

    goToItem(item) {
        this.store.dispatch(new TodoActions.SetSelectedTodoItem(item));
    }

    goToAddNewItem() {
        this.modalCtrl.create(TodoItemPage).present();
    }
}
