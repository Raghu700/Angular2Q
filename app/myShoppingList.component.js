"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyShoppingListComponent = (function () {
    function MyShoppingListComponent() {
        this.shoppingListItems = [
            { name: "Milk" },
            { name: "Tea" },
            { name: "Water" }
        ];
        this.selectedItem = { name: "" };
    }
    MyShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
        this.selectedItem = shoppingListItem;
    };
    MyShoppingListComponent.prototype.OnAddItem = function (shoppingListItem) {
        this.shoppingListItems.push({ name: shoppingListItem.value });
    };
    MyShoppingListComponent.prototype.OnDeleteItem = function () {
        this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
    };
    MyShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'App-MyShoppingList',
            template: "\n    <ul>\n     <li *ngFor=\"#shoppingListItem of shoppingListItems\"\n     (click)=\"onItemClicked(shoppingListItem)\" \n     >{{shoppingListItem.name}} </li>\n    </ul>\n     <input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n     <button (click)=\"OnDeleteItem()\">Delete Item</button><br>\n     <input type=\"text\" #shoppingListItem1>\n     <button (click)=\"OnAddItem(shoppingListItem1)\">Add Item</button>\n     "
        }), 
        __metadata('design:paramtypes', [])
    ], MyShoppingListComponent);
    return MyShoppingListComponent;
}());
exports.MyShoppingListComponent = MyShoppingListComponent;
//# sourceMappingURL=myShoppingList.component.js.map