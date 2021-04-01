import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public authEmail: boolean;


  constructor(private fb: FormBuilder, private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.apiService.checkLogin(this.form.value).subscribe((user) => {
      this.authEmail = user.email == 'alberto@email.com' ? true : false;
      if(this.authEmail == true) {
        this.route.navigate(['/home'])
      }
    });
    }
    
  }

  


