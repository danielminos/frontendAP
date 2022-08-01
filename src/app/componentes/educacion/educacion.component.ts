import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacionLista:any;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({
      institucion:['',[Validators.required]],
      titulo:['',[Validators.required]],
      carrera:['',[Validators.required]],
      desde:['',[Validators.required]],
      hasta:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerEducacion().subscribe(data=>{
      console.log(data);
      this.educacionLista=data["educacion"];
    })
  }

  guardarDatosEducacion(){
    if (this.form.valid)
    {
      alert("Enviar los datos al  servidor (servicio)");
      this.form.reset();
      document.getElementById("cerrarModalEncabezado")?.click();
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
}
