import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ChainComponent} from "../chain/chain.component";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatHint} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    MatButton,
    FormsModule,
    MatFormField,
    MatHint,
    MatInput
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent {
  nodeData: string = '';
  constructor(private http: HttpClient, private snackBar: MatSnackBar, public dialog: MatDialog) {
  }

  mine(): void {
    this.http.get('http://127.0.0.1:8000/mine').subscribe(
      async (response: any) => {
        this.openDialog(response)
      },
      (error: any) => {
        console.error('Error:', error);
        this.snackBar.open('An error occurred while processing your request.', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  chain(): void {
    this.http.get('http://127.0.0.1:8000/chain').subscribe(
      async (response: any) => {
        this.openChain(response)
      },
      (error: any) => {
        console.error('Error:', error);
        this.snackBar.open('An error occurred while processing your request.', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: data
    });
  }

  openChain(data: any): void {
    const dialogRef = this.dialog.open(ChainComponent, {
      width: '500px',
      data: data
    });
  }

  sendNodeToServer(): void {
    const body = {
      nodes: [this.nodeData]
    };

    this.http.post<any>('http://127.0.0.1:8000/nodes/register', body).subscribe(
      (response) => {
        this.snackBar.open(response.message, 'Close', {
          duration: 3000,
        });
      },
      (error) => {
         this.snackBar.open('An error occurred while processing your request.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
  node(): void {
    this.http.get('http://127.0.0.1:8000/nodes/resolve').subscribe(
      async (response: any) => {
        this.openChain(response)
      },
      (error: any) => {
        console.error('Error:', error);
        this.snackBar.open('An error occurred while processing your request.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
