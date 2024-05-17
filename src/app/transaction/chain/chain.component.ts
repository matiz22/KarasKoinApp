import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-chain',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './chain.component.html',
  styleUrl: './chain.component.css'
})
export class ChainComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public jsonData: any) {
  }
}
