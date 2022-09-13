import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vidraria } from 'src/app/model/vidrarias.entities';
import { VidrariaService } from '../vidraria.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listVidrariaEdit: any = []
  vidrariaId: any = 0;

  vidraria!: Vidraria;

  constructor(private vidrariaService: VidrariaService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.vidrariaId  = params['id'])
    this.getBy(this.vidrariaId);
    
  }

  getBy(vidrariaId: number){
    this.vidrariaService.getById(vidrariaId).subscribe((response)=>{
     this.listVidrariaEdit = response;
     
   });
 }

 edit(){
  this.router.navigate(['/vidraria/cadastro']);
  this.vidrariaService.update(this.vidrariaId,this.listVidrariaEdit).subscribe((response)=>{
   
 },(error=>{

 }));
}

}
