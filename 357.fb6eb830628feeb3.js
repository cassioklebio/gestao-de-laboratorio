"use strict";(self.webpackChunkgestao_de_laboratorio=self.webpackChunkgestao_de_laboratorio||[]).push([[357],{5357:(J,m,d)=>{d.r(m),d.d(m,{EquipamentoModule:()=>O});var l=d(9808),u=d(5358);class v{constructor(n,t,i,r,a){this.nomeEquipamento=n,this.modelo=t,this.serie=i,this.fabricante=r,this.voltagem=a}}var e=d(1223),p=d(3775),s=d(2382);const _=function(o){return["../detalhe/",o]},f=function(o){return["../edit/",o]};function T(o,n){if(1&o&&(e.TgZ(0,"tbody"),e.TgZ(1,"tr"),e.TgZ(2,"td"),e._uU(3),e.ALo(4,"uppercase"),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e.TgZ(14,"a",11),e.TgZ(15,"span",12),e._uU(16,"image_search"),e.qZA(),e.qZA(),e.TgZ(17,"a",11),e.TgZ(18,"span",13),e._uU(19,"edit"),e.qZA(),e.qZA(),e.TgZ(20,"span",13),e._uU(21,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=n.$implicit;e.xp6(3),e.Oqu(e.lcZ(4,7,t.nomeEquipamento)),e.xp6(3),e.Oqu(t.modelo),e.xp6(2),e.Oqu(t.serie),e.xp6(2),e.Oqu(t.fabricante),e.xp6(2),e.Oqu(t.voltagem),e.xp6(2),e.Q6J("routerLink",e.VKq(9,_,t.id)),e.xp6(3),e.Q6J("routerLink",e.VKq(11,f,t.id))}}let g=(()=>{class o{constructor(){this.listaEquipamento=[]}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-listagem"]],inputs:{listaEquipamento:"listaEquipamento"},decls:28,vars:1,consts:[[1,"container"],[1,"section"],[1,"row"],[1,"col","s12","m3"],[1,"card","horizontal","z-depth-5"],[1,"card-stacked"],[1,"card-content"],[1,"card-action"],[1,"bordered","striped","centered","highlight","responsive-table"],[1,"striped"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"material-icons-outlined"],[1,"material-icons"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"p"),e._uU(8,"Equipamentos cadastrados"),e.qZA(),e.qZA(),e.TgZ(9,"div",7),e.TgZ(10,"table",8),e.TgZ(11,"thead",9),e.TgZ(12,"tr"),e.TgZ(13,"th"),e._uU(14,"Nome"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Modelo"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"N. de s\xe9rie"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Fabricante"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Voltagem"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"A\xe7\xf5es"),e.qZA(),e.qZA(),e.qZA(),e.YNc(25,T,22,13,"tbody",10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(26,"br"),e._UZ(27,"br"),e.qZA()),2&t&&(e.xp6(25),e.Q6J("ngForOf",i.listaEquipamento))},directives:[l.sg,u.yS],pipes:[l.gd],styles:["p[_ngcontent-%COMP%]{color:red}th[_ngcontent-%COMP%]{color:red;font-size:14px}span[_ngcontent-%COMP%]{color:red}"]}),o})();function A(o,n){if(1&o&&(e.TgZ(0,"div",32),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.ekj("red",!t.isSuccess)("blue",t.isSuccess),e.xp6(1),e.hij(" ",t.message," ")}}function b(o,n){if(1&o&&(e.TgZ(0,"div",33),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.ekj("red",!t.isShowListagem),e.xp6(1),e.hij(" ",t.messageList,"\n")}}function C(o,n){if(1&o&&(e.TgZ(0,"div"),e._UZ(1,"app-listagem",34),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("listaEquipamento",t.listaEquipamento)}}let E=(()=>{class o{constructor(t){this.equipamentoService=t,this.isShowMessage=!1,this.isShowCadastro=!0,this.isShowListagem=!0,this.isShowDetalhe=!1,this.listaEquipamento=[],this.listEquipamentosDetalhe=[]}ngOnInit(){this.equipamento=new v("","","","",""),this.listEquipamentos()}limpar(){this.equipamento.nomeEquipamento=" ",this.equipamento.modelo=" ",this.equipamento.serie=" ",this.equipamento.fabricante=" ",this.equipamento.voltagem=" "}listEquipamentos(){this.equipamentoService.list().subscribe(t=>{this.listaEquipamento=t,0==this.listaEquipamento.length&&(this.messageList="Nenhum equipamento cadastrado",this.isShowListagem=!1)})}onSubmit(){this.equipamentoService.create(this.equipamento).subscribe(t=>{this.listEquipamentos(),this.limpar(),this.isShowMessage=!0,this.isSuccess=!0,this.message="Cadastro do Equipamento realizado com sucesso!"},t=>{})}edit(t){this.equipamentoService.update(t.id,t).subscribe(i=>{this.listEquipamentos()},i=>{})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-cadastro"]],decls:55,vars:13,consts:[[1,"container"],[1,"section"],[1,"row"],[1,"col","s12","m3"],[1,"card","horizontal","z-depth-5"],[1,"card-stacked"],[1,"card-action"],["id","msg-login","class","card-panel white-text",3,"red","blue",4,"ngIf"],["novalidate","",1,"row","col","s12","l12",3,"submit"],["form","ngForm"],[1,"formGroup","input-field","col","s12","l6"],["id","nomeEquipamento","name","nomeEquipamento","type","text","pattern","(\\s?[A-Z\xc0-\xda][a-z\xe0-\xfa])+(\\s?([A-Z\xc0-\xda]|[a-z\xe0-\xfa]|-|\\d))+","required","",1,"validate",3,"ngModel","ngModelChange"],["nomeEqui","ngModel"],["for","nomeEquipamento"],[3,"hidden"],[1,"input-field","col","s12","l6"],["id","modelo","name","modelo","type","text","required","",1,"validate",3,"ngModel","ngModelChange"],["model","ngModel"],["for","modelo"],["id","serie","name","serie","type","text","required","","required","",1,"validate",3,"ngModel","ngModelChange"],["series","ngModel"],["for","serie"],["id","fabricante","name","fabricante","type","text","required","",1,"validate",3,"ngModel","ngModelChange"],["fabri","ngModel"],["for","fabricante"],["id","voltagem","name","voltagem","type","text","required","",1,"validate",3,"ngModel","ngModelChange"],["voltage","ngModel"],["for","voltagem"],["type","submit",1,"waves-effect","waves-light","btn","red",3,"disabled"],["type","button",1,"waves-effect","waves-light","btn","red",3,"click"],["id","msg-login","class","  col card-panel white-text",3,"red",4,"ngIf"],[4,"ngIf"],["id","msg-login",1,"card-panel","white-text"],["id","msg-login",1,"col","card-panel","white-text"],[3,"listaEquipamento"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h6"),e._uU(2,"Painel > Equipamento > Cadastro"),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"div",2),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.YNc(9,A,2,5,"div",7),e.TgZ(10,"form",8,9),e.NdJ("submit",function(){return i.onSubmit()}),e.TgZ(12,"div"),e.TgZ(13,"div",10),e.TgZ(14,"input",11,12),e.NdJ("ngModelChange",function(a){return i.equipamento.nomeEquipamento=a}),e.qZA(),e.TgZ(16,"label",13),e._uU(17,"Nome do Equipamento*"),e.qZA(),e.TgZ(18,"span",14),e._uU(19," Por favor, informe o modelo do equipamento. "),e.qZA(),e.qZA(),e.TgZ(20,"div",15),e.TgZ(21,"input",16,17),e.NdJ("ngModelChange",function(a){return i.equipamento.modelo=a}),e.qZA(),e.TgZ(23,"label",18),e._uU(24,"Modelo*"),e.qZA(),e.TgZ(25,"span",14),e._uU(26," Por favor, informe o modelo do equipamento. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div"),e.TgZ(28,"div",15),e.TgZ(29,"input",19,20),e.NdJ("ngModelChange",function(a){return i.equipamento.serie=a}),e.qZA(),e.TgZ(31,"label",21),e._uU(32,"N\xfamero de s\xe9rie*"),e.qZA(),e.TgZ(33,"span",14),e._uU(34," Por favor, informe o n\xfamero de s\xe9rie do equipamento. "),e.qZA(),e.qZA(),e.TgZ(35,"div",15),e.TgZ(36,"input",22,23),e.NdJ("ngModelChange",function(a){return i.equipamento.fabricante=a}),e.qZA(),e.TgZ(38,"label",24),e._uU(39,"Fabricante*"),e.qZA(),e.TgZ(40,"span",14),e._uU(41," Por favor, informe o fabricante do equipamento. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"div"),e.TgZ(43,"div",15),e.TgZ(44,"input",25,26),e.NdJ("ngModelChange",function(a){return i.equipamento.voltagem=a}),e.qZA(),e.TgZ(46,"label",27),e._uU(47,"Voltagem*"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"button",28),e._uU(49,"Salvar"),e.qZA(),e.TgZ(50,"button",29),e.NdJ("click",function(){return i.limpar()}),e._uU(51,"Limpar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"div",0),e.YNc(53,b,2,3,"div",30),e.qZA(),e.YNc(54,C,2,1,"div",31)),2&t){const r=e.MAs(11),a=e.MAs(15),Z=e.MAs(22),q=e.MAs(30),h=e.MAs(37);e.xp6(9),e.Q6J("ngIf",i.isShowMessage),e.xp6(5),e.Q6J("ngModel",i.equipamento.nomeEquipamento),e.xp6(4),e.Q6J("hidden",a.valid||a.untouched),e.xp6(3),e.Q6J("ngModel",i.equipamento.modelo),e.xp6(4),e.Q6J("hidden",Z.valid||Z.untouched),e.xp6(4),e.Q6J("ngModel",i.equipamento.serie),e.xp6(4),e.Q6J("hidden",q.valid||q.untouched),e.xp6(3),e.Q6J("ngModel",i.equipamento.fabricante),e.xp6(4),e.Q6J("hidden",h.valid||h.untouched),e.xp6(4),e.Q6J("ngModel",i.equipamento.voltagem),e.xp6(4),e.Q6J("disabled",!r.valid),e.xp6(5),e.Q6J("ngIf",!i.isShowListagem),e.xp6(1),e.Q6J("ngIf",i.isShowListagem)}},directives:[l.O5,s._Y,s.JL,s.F,s.Fj,s.c5,s.Q7,s.JJ,s.On,g],styles:[".input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{color:red!important}.row[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:1px solid red!important;box-shadow:0 1px red!important}p[_ngcontent-%COMP%]{color:red}h6[_ngcontent-%COMP%]{margin-left:10px!important;padding-top:20px;color:red;font-size:20px}button[_ngcontent-%COMP%]{width:100px!important;margin-left:20px}span[_ngcontent-%COMP%]{font-size:11px;color:red}"]}),o})();const M=function(){return["../../cadastro/"]};let U=(()=>{class o{constructor(t,i){this.equipamentoService=t,this.route=i,this.listEquipamentosDetalhe=[],this.equipamentoId=0}ngOnInit(){this.route.params.subscribe(t=>this.equipamentoId=t.id),this.getBy(this.equipamentoId)}getBy(t){this.equipamentoService.getById(t).subscribe(i=>{this.listEquipamentosDetalhe=i})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.T),e.Y36(u.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-detalhe"]],decls:38,vars:7,consts:[[1,"container"],[1,"section"],[1,"row"],[1,"col","s12","m3"],[1,"card","horizontal","z-depth-5"],[1,"card-stacked"],[1,"card-body"],[1,"input-field","col","s12","l6","m3"],["for","nomeEquipamento"],["for","modelo"],["for","serie"],["for","fabricante"],[1,"input-field","col","s12","l6"],["for","voltagem"],["type","button",1,"waves-effect","waves-light","btn","red","m4",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h6"),e._uU(2,"Painel > Equipamento > Detalhe"),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"div",2),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"div"),e.TgZ(10,"div",7),e.TgZ(11,"label",8),e._uU(12,"Nome do Equipamento:"),e._UZ(13,"br"),e._uU(14),e.qZA(),e._UZ(15,"br"),e.qZA(),e.TgZ(16,"div",7),e.TgZ(17,"label",9),e._uU(18),e._UZ(19,"br"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div"),e.TgZ(21,"div",7),e.TgZ(22,"label",10),e._uU(23),e._UZ(24,"br"),e.qZA(),e.qZA(),e.TgZ(25,"div",7),e.TgZ(26,"label",11),e._uU(27),e._UZ(28,"br"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div"),e.TgZ(30,"div",12),e.TgZ(31,"label",13),e._uU(32),e._UZ(33,"br"),e.qZA(),e.qZA(),e.qZA(),e._UZ(34,"br"),e._UZ(35,"br"),e.TgZ(36,"a",14),e._uU(37,"Fechar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(14),e.hij(" ",i.listEquipamentosDetalhe.nomeEquipamento,""),e.xp6(4),e.hij("Modelo: ",i.listEquipamentosDetalhe.modelo,""),e.xp6(5),e.hij("N\xfamero de s\xe9rie: ",i.listEquipamentosDetalhe.serie,""),e.xp6(4),e.hij("Fabricante: ",i.listEquipamentosDetalhe.fabricante,""),e.xp6(5),e.hij("Voltagem: ",i.listEquipamentosDetalhe.voltagem,""),e.xp6(4),e.Q6J("routerLink",e.DdM(6,M)))},directives:[u.yS],styles:["h6[_ngcontent-%COMP%]{margin-left:40px;padding-top:30px;color:red;font-size:20px}a[_ngcontent-%COMP%]{width:100px!important;margin-left:20px;margin-top:30px}"]}),o})();const x=function(){return["../../cadastro"]},y=[{path:"listagem",component:g},{path:"cadastro",component:E},{path:"edit/:id",component:(()=>{class o{constructor(t,i,r){this.equipamentoService=t,this.route=i,this.router=r,this.listEquipamentosEdit=[],this.equipamentoId=0}ngOnInit(){this.route.params.subscribe(t=>this.equipamentoId=t.id),this.getBy(this.equipamentoId)}getBy(t){this.equipamentoService.getById(t).subscribe(i=>{this.listEquipamentosEdit=i})}edit(){this.router.navigate(["/equipamento/cadastro"]),this.equipamentoService.update(this.equipamentoId,this.listEquipamentosEdit).subscribe(t=>{},t=>{})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.T),e.Y36(u.gz),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit"]],decls:37,vars:7,consts:[[1,"container"],[1,"section"],[1,"row"],[1,"col","s12","m3"],[1,"card","horizontal","z-depth-5"],[1,"card-stacked"],[1,"card-action"],["novalidate","",1,"row","col","s12","l12"],[1,"input-field","col","s12","l6"],["id","nomeEquipamento","type","text","required","",1,"validate",3,"value"],["for","nomeEquipamento"],["id","modelo","type","text",1,"validate",3,"value"],["for","modelo"],["id","serie","type","text","required","",1,"validate",3,"value"],["for","serie"],["id","fabricante","type","text","required","",1,"validate",3,"value"],["for","fabricante"],["id","voltagem","type","text","required","",1,"validate",3,"value"],["for","voltagem"],["type","button",1,"waves-effect","waves-light","btn","red",3,"click"],["type","button",1,"waves-effect","waves-light","btn","red",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h6"),e._uU(2,"Painel > Equipamento > Editar"),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"div",2),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"form",7),e.TgZ(10,"div"),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.TgZ(13,"label",10),e._uU(14,"Nome do Equipamento"),e.qZA(),e.qZA(),e.TgZ(15,"div",8),e._UZ(16,"input",11),e.TgZ(17,"label",12),e._uU(18,"Modelo"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div"),e.TgZ(20,"div",8),e._UZ(21,"input",13),e.TgZ(22,"label",14),e._uU(23,"N\xfamero de s\xe9rie"),e.qZA(),e.qZA(),e.TgZ(24,"div",8),e._UZ(25,"input",15),e.TgZ(26,"label",16),e._uU(27,"Fabricante"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div"),e.TgZ(29,"div",8),e._UZ(30,"input",17),e.TgZ(31,"label",18),e._uU(32,"Voltagem"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"button",19),e.NdJ("click",function(){return i.edit()}),e._uU(34,"Salvar"),e.qZA(),e.TgZ(35,"button",20),e._uU(36,"Cancelar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(12),e.s9C("value",i.listEquipamentosEdit.nomeEquipamento),e.xp6(4),e.s9C("value",i.listEquipamentosEdit.modelo),e.xp6(5),e.s9C("value",i.listEquipamentosEdit.serie),e.xp6(4),e.s9C("value",i.listEquipamentosEdit.fabricante),e.xp6(5),e.s9C("value",i.listEquipamentosEdit.voltagem),e.xp6(5),e.Q6J("routerLink",e.DdM(6,x)))},directives:[s._Y,s.JL,s.F,u.rH],styles:[".input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{color:red!important}.row[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:1px solid red!important;box-shadow:0 1px red!important}p[_ngcontent-%COMP%]{color:red}h6[_ngcontent-%COMP%]{margin-left:10px!important;padding-top:20px;color:red;font-size:20px}button[_ngcontent-%COMP%]{width:100px!important;margin-left:20px}"]}),o})()},{path:"detalhe/:id",component:U}];let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(y)],u.Bz]}),o})();var c=d(520);let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[s.qu,c.JF,p.T],imports:[[l.ez,w,s.u5,c.JF]]}),o})()}}]);