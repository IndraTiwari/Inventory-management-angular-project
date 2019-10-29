import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTableModule,
MatIconModule,
MatFormFieldModule,
MatDatepickerModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [MatDatepickerModule]
})
export class AppMaterialModule { }
