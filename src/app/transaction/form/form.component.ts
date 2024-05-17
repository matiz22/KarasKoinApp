import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatHint} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatHint,
    MatError,
    MatFormField,
    MatInput,
    NgOptimizedImage
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FormComponent {
  formData = {
    angler: '',
    fishery: '',
    fish: '',
    weight: 0
  };

  constructor(private http: HttpClient) {
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      this.http.post('http://127.0.0.1:8000/transactions/new', this.formData)
        .subscribe(
          (response) => {
            console.log('Transaction created successfully:', response);
            form.resetForm();
          },
          (error) => {
            console.error('Error creating transaction:', error);
          }
        );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
