import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import{ServicioService}from 'src/app/servicio/servicio.service';
import {response} from 'src/app/modelo/response';
import { Router } from '@angular/router'
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  public _form = new FormGroup({
    nombre: new FormControl('',Validators.required),
    tipo_id: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required)
  })
  tipo:any = [];
  animals:any = [];
  button:boolean=true;


  constructor(private api:ServicioService, private router:Router) {
    this.tipo= this.api.showT().subscribe(res=>this.tipo=res);
    this.animals= this.api.show().subscribe(res=>this.animals=res);
  }

  ngOnInit(): void {
  }

  registro(_form:any){
    this.api.regisAnimal(_form).subscribe(data=>(console.log(data)));
  }

  edit(_id:any){
    localStorage.setItem("id",_id);
    this.button=false
   this.api.editAnimal(_id).subscribe(data=>{ 
      let t:any=data;
      this._form.setValue({
      'nombre':t.nombre,
      'tipo_id':t.tipo_id,
      'imagen':t.imagen
      });
      (console.log(data))
    });
  }

  update(_form:any){
    let _id=localStorage.getItem("id")
    this.api.updateAnimal(_form,_id).subscribe(data=>(console.log(data)));
  }

  destroy(_id:any){
    this.api.destroyAnimal(_id).subscribe(data=>(console.log(data)));
  }

  reporte(){
    this.api.reporte().subscribe(data=>(console.log(data)));
  }

}
