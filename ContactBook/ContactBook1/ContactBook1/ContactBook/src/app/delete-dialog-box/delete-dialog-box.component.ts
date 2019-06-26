import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/data.service';
import { Operations } from '../enums/enum.model';

@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './delete-dialog-box.component.html',
  styleUrls: ['./delete-dialog-box.component.css']
})
export class DeleteDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogBoxComponent>,private route : ActivatedRoute,private dataService:DataService,
    @Inject(MAT_DIALOG_DATA) public data : any,public router:Router) {
     }

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  delete() {
    this.dataService.deleteContact(this.data.id).subscribe(p => console.log(p));
    this.dataService.emitData(Operations.DELETED, this.data.id);
    this.dialogRef.close();
    this.router.navigateByUrl('/');
  }
}
