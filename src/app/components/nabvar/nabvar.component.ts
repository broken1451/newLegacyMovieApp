import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.scss'
})
export class NabvarComponent  implements OnInit {

  public form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      buscar: ['']
    });
  }

  buscarPelicula(event: any){
    let valor = event.target.value.trim();
    if (valor.length == 0) {
      return;
    }
    console.log (event?.target.value);
    this.router.navigate(['/buscar', valor]);
  }

  buscar() {
    let valor = this.form.value.buscar.trim();
    if (valor.length == 0) {
      return;
    }
    this.router.navigate(['/buscar', valor]);
    console.log (this.form.value.buscar);
  }

}
