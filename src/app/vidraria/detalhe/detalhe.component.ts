import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VidrariaService } from '../vidraria.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  listVidrariaDetalhe: any = []
  vidrariaId: any = 0;

  constructor(private vidrariaService: VidrariaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.vidrariaId  = params['id'])
    this.getBy(this.vidrariaId);
  }

  getBy(vidrariaId: number){
    this.vidrariaService.getById(vidrariaId).subscribe((response)=>{
     this.listVidrariaDetalhe = response;
     console.log(this.listVidrariaDetalhe);
   });
 }

}
