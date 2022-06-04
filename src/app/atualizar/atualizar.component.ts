import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  produto = {title : "", price : 0.0, description: ""}

  constructor(private web : WebService, private rota: ActivatedRoute, private rota_ts : Router) { }


  atualizar() {
    let id = this.rota.snapshot.paramMap.get("id")!
    this.web.atualizarProduto(id, this.produto).subscribe({
      next: data => {
        alert("Produto atualizado com sucesso!"); 
        this.rota_ts.navigate(["/"])
      },
      error: error => {
        alert("Erro ao atualizar o produto: " + error.message)
      }
    })
  }

  preencheCampos(){
    let id = this.rota.snapshot.paramMap.get("id")!
    this.web.getProduto(id).subscribe(res =>{
      this.produto.title = res.title
      this.produto.price = res.price
      this.produto.description = res.description
    }) 
  }

  ngOnInit(): void {
    this.preencheCampos()
  }

}
