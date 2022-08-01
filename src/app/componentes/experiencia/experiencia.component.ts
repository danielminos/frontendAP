import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLista:any;
  form:FormGroup;
  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({
      Empresa:['',Validators.required],
      division:['',Validators.required],
      ocupacion:['',Validators.required],
      detalle:['',Validators.required],
      desde:['',[Validators.required]],
      hasta:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerExperiencia().subscribe(data=>{
      console.log(data);
      this.experienciaLista=data["experiencia"];
    })
    
  }

  guardarDatosExperiencia(){
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
