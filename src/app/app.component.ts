import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from "./transaction/form/form.component";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ActionComponent} from "./transaction/action/action.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, NgOptimizedImage, HttpClientModule, ActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KarasKoinApp';
}
