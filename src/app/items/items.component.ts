import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService,
              private location: Location) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  add(name: string, price: number, category: string, artisanId: number): void {
    name = name.trim();
    if (category){
      category = category.trim();
    }
    if (!name) { return; }
    this.itemService.addItem({ name: name, price: price, category: category, artisanId: artisanId } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
