import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatDivider} from "@angular/material/divider";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDivider,
    CommonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
