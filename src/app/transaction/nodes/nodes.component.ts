import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-nodes',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './nodes.component.html',
  styleUrl: './nodes.component.css'
})
export class NodesComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public stringList: any) {
  }
}
