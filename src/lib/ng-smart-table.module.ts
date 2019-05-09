import { NgModule } from '@angular/core';
import { NgSmartTableComponent } from './components/ng-smart-table.component';
import { TableComponentComponent } from './components/table-component/table-component.component';

@NgModule({
  imports: [
  ],
  declarations: [NgSmartTableComponent, TableComponentComponent],
  exports: [NgSmartTableComponent, TableComponentComponent]
})
export class NgSmartTableModule { }
