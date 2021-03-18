import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser() {    
    this.apiService.list(1).subscribe((user) => {
      console.log(user);
      
    })
  }

}
