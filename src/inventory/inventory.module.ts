import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryListItemComponent } from './inventory-list-item/inventory-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { InventoryImagePipe } from './inventory-image.pipe';
import { MatButtonModule } from '@angular/material/button';
import { InventoryService } from './inventory.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryListItemComponent,
    InventoryImagePipe
  ],
  exports:[
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    InventoryService
  ]
})
export class InventoryModule { }
