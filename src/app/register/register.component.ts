import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
    form.reset();
    this.router.navigate(['/healthdetails']);
  }
}
 