import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listEquipamentosEdit: any = []
  equipamento: any;
  equipamentoId: any = 0;

  constructor(private equipamentoService: EquipamentoService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.equipamentoId  = params['id'])
    this.getBy(this.equipamentoId);
  }

  getBy(equipamentoId: number){
    this.equipamentoService.getById(equipamentoId).subscribe((response)=>{
     this.listEquipamentosEdit = response;
  });
 }

 edit(){
  this.router.navigate(['/equipamento/cadastro']);
  this.equipamentoService.update(this.equipamentoId,this.listEquipamentosEdit).subscribe((response)=>{
   
 },(error=>{

 }));
}



}
