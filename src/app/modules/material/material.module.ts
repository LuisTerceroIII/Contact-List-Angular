import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button'; 
import { CdkTableModule } from '@angular/cdk/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';




const materialComponent = [

  MatTableModule,
  MatButtonModule,
  CdkTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule
  

]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }
