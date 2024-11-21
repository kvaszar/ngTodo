import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';


class TodoItem {
    constructor(
        public task: string,
        public checked: boolean) {
    }

    change_state() {
        this.checked = !this.checked;
    }
}

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FormsModule, NgClass],
    templateUrl: './app.component.html',
    standalone: true,
    styleUrl: './app.component.css'
})
export class AppComponent {
    list: TodoItem[] = [];
    taskToAdd: string = "";

    add_item(task: string) {
        this.list.push(new TodoItem(task, false));
    }

    remove_item(item: TodoItem) {
        this.list = this.list.filter(x => x !== item);
    }

    remove_completed() {
        this.list = this.list.filter(x => !x.checked);
    }
}
