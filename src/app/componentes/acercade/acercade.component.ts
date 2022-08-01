import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  miPorfolio:any;
  //usuarioAutenticado:boolean=true;
  form:FormGroup;
  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({
      acerca:['',[Validators.required]],
      acerca2:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data["persona"];      
    });
  }

  get nombre(){
    return this.form.get("nombre");
   }
   
  guardarAcercaDe(){
    if (this.form.valid)
    {
      alert("Enviar los datos al  servidor (servicio)");
      this.form.reset();
      document.getElementById("cerrarModalAcercaDe")?.click();
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }

}
