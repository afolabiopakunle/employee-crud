import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  constructor(private router: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = +this.router.snapshot.paramMap.get('id')
   this.header = this.id === 0 ? 'Add Developer': 'Update Developer'
    console.log(this.id)
  }

}
