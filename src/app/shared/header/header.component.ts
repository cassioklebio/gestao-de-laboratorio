import * as $ from 'jquery';
import * as M from 'materialize-css';
import { Dropdown } from "materialize-css";


import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
   @ViewChild('mobile') sideNav?: ElementRef;
  
  logo = "assets/img/Logo.png";
  logoMobile = "assets/img/LogoMobile.png";
  altImg = "WebLab - Sistema de gestão de Laborario";
  
  //menus = ['Equipamentos','Experimento','Reagentes','Vidraria'];
  menus = [
    { name: 'Equipamentos', route: '/equipamento/cadastro' },
    { name: 'Experimento',route: 'experimento/cadastro'  },
    { name: 'Reagentes', route: 'reagente/cadastro'  },
    { name: 'Vidraria',route: 'vidraria/cadastro'  },
    
    
  ];
  

   constructor() { 
    
   }
  ngAfterViewInit(): void {
    let $sideNav = $('#mobile-demo');
    M.Sidenav.init($sideNav);

    
}

  

    
    
 


  

  
  
}


