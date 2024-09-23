import { Component, ViewChild } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChildComponent1} from './child1.component';
import {ChildComponent2} from './child2.component';
import {ChildComponent3} from './child3.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'my-app', // Определяется селектор-css для HTML-элемента, который будет представлять компонент.
    standalone: true, // указывает, что компонент будет независимым, то есть для него не нужно создавать дополнительных модулей
    imports: [FormsModule, 
        ChildComponent1, ChildComponent2, ChildComponent3,
        MatButtonModule, MatDividerModule, MatInputModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
    newCiteMy : string;
    name = "";

    @ViewChild(ChildComponent1)
    private child1Comp: ChildComponent1;

    addCiteInMain() : void{
        this.child1Comp.addNew();
    }

    newLink:string = "";
    newLinkAbout:string = "";
    newL:string[] = [this.newLink, this.newLinkAbout];

    @ViewChild(ChildComponent3)
    private child3Comp: ChildComponent3;

    addLinkInMain() : void{
        this.child3Comp.addLink();
    }
}