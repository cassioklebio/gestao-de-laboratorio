import { Component, OnInit } from '@angular/core';
import { VidrariaService } from '../vidraria/vidraria.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  listaVidrarias: any = [];
  contVidraria = 0;
  
 

  constructor(private vidrariaService: VidrariaService) { }
  ngOnInit(): void {
    this.listVidrarias();
  }

  listVidrarias(){
  
    this.vidrariaService.list().subscribe((response)=>{
      this.listaVidrarias = response;
    });
    this.contItemLista(this.listVidrarias);
  }
  
  contItemLista(lista: any){
    let cont = 0;
    for (let e of lista){
      cont ++;
    }
    this.contVidraria = cont;
    return this.contVidraria;
  
  }
}
