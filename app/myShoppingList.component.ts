import {Component} from '@angular/core';

@Component({
    selector:'App-MyShoppingList',
    template:`
    <ul>
     <li *ngFor="#shoppingListItem of shoppingListItems"
     (click)="onItemClicked(shoppingListItem)" 
     >{{shoppingListItem.name}} </li>
    </ul>
     <input type="text" [(ngModel)]="selectedItem.name">
     <button (click)="OnDeleteItem()">Delete Item</button><br>
     <input type="text" #shoppingListItem1>
     <button (click)="OnAddItem(shoppingListItem1)">Add Item</button>
     `
})
export class MyShoppingListComponent{
    public shoppingListItems=[
        {name:"Milk"},
        {name:"Tea"},
        {name:"Water"}
        ];
    public selectedItem={name:""};
    onItemClicked(shoppingListItem)
    {
        this.selectedItem=shoppingListItem;
    }
    OnAddItem(shoppingListItem)
    {
        this.shoppingListItems.push({name:shoppingListItem.value});
    }
    OnDeleteItem()
    {
      this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem),1);
    }

}
