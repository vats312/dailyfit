import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-healthdetails',
  templateUrl: './healthdetails.component.html',
  styleUrls: ['./healthdetails.component.css']
})
export class HealthdetailsComponent implements OnInit {

  constructor(private router:Router) { }

  onSubmit(form: NgForm){
    form.reset();
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
  }

}
