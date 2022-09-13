import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reagente } from 'src/app/model/reagentes.entities';
import { ReagenteService } from '../reagente.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listReagentesEdit: any = []
  reagenteId: any = 0;

  reagente!: Reagente;




  constructor(private reagenteService: ReagenteService,
    private route: ActivatedRoute,
    private router:Router) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => this.reagenteId  = params['id'])
      this.getBy(this.reagenteId);
      
    }
  
    getBy(reagenteId: number){
      this.reagenteService.getById(reagenteId).subscribe((response)=>{
       this.listReagentesEdit = response;
       
     });
   }

   edit(){
    this.router.navigate(['/reagente/cadastro']);
    this.reagenteService.update(this.reagenteId,this.listReagentesEdit).subscribe((response)=>{
     
   },(error=>{
  
   }));
  }

   
}
