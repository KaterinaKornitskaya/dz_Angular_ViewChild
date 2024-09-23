import { Input, Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { NgFor } from '@angular/common';

@Component({
    selector: 'child1_comp',
    standalone: true,
    imports: [FormsModule, NgFor],
    templateUrl: './child1.component.html',
    styleUrls: ['./app.component.css']
})

export class ChildComponent1  {
    name = 'component1';
    cite2 = 'У моих детей, конечно, будет компьютер. Но первым делом они получат книги.';
    cite3 = 'Наслаждайтесь тем, что вы делаете и вы никогда в своей жизни не будете работать.';
    cite4 = 'Жизнь несправедлива – привыкните к этому!';
    cite5 = `Выберите ленивого человека для выполнения трудной работы. 
        Потому что ленивый человек найдет легкий способ eё выполнить.`;
    cites:string[] = [this.cite2, this.cite3, this.cite4, this.cite5];

    @Input() newCite: string;

   
    newC: string;

    addNew():void{
        this.cites.push(this.newCite);
    }

  }