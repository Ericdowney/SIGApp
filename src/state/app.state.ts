
export class TodoItem {
    constructor(
        public id: number,
        public icon: string,
        public description: string,
        public completed: boolean,
    ) { }
}

export class AppState {
    selectedTodoItem?: TodoItem;
}