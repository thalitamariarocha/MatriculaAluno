import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MatriculaAluno';
 
  message!: string; //TODO foi usado de teste, no final se não for usado pode ser apagado

  constructor(private apiService: ApiService) { }


  

  // ngOnInit(): void {
  //   this.apiService.getHelloMessage().subscribe(response => {
  //     this.message = response.message;
  //   });
  // }
  ngOnInit(): void {
  }

}













