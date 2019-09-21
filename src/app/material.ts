import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';



import { NgModule } from '@angular/core';

@NgModule({
  imports: 
    [ 
      MatButtonModule, 
      MatCheckboxModule, 
      MatFormFieldModule, 
      MatInputModule,
      MatGridListModule,
      MatCardModule,
    ],
  exports: 
    [
      MatButtonModule, 
      MatCheckboxModule, 
      MatFormFieldModule, 
      MatInputModule,
      MatGridListModule,
      MatCardModule,
    ],
})
export class MaterialModule { }