import { Component, OnInit } from '@angular/core';
import { EditalService } from 'src/app/Edital/service/edital.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { ActivatedRoute } from '@angular/router';
import { Edital } from 'src/app/Edital/model/edital.model';



@Component({
  selector: 'app-listar-edital',
  templateUrl: './listar-edital.component.html',
  styleUrls: ['./listar-edital.component.css']
})
export class ListarEditalComponent implements OnInit {
  
  edital!: Edital; // Use a interface Edital
  editais: Edital[] = []; // Use um array da interface Edital

 // editais: any[] = [];

  constructor(private editalService: EditalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarEdital();
     this.route.params.subscribe(params => {
      const id_edital = +params['id']; // O símbolo + converte a string para número
      if (id_edital) {
        this.getEditalById(id_edital);
      }
      else {
        this.listarEdital();
      }
    });
  }

  listarEdital(): void {
    this.editalService.listarEdital().subscribe(data => {
      this.editais = data;
    });
  }

  editarEdital(edital: any): void {
    this.router.navigate(['/home/edital', edital.id_edital]);
  }

  deletarEdital(id_edital: number): void {
    this.editalService.deletarEdital(id_edital).subscribe(() => {
      this.listarEdital();
    });
  }

  getEditalById(id: number): void {
      this.router.navigate([`/home/carregaredital/${id}`]); 
  }
}










// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-listar-edital',
//   templateUrl: './listar-edital.component.html',
//   styleUrls: ['./listar-edital.component.css']
// })
// export class ListarEditalComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
