import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';
import { Produto } from './Produto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaProdutos!: Produto[];

  constructor(private web: WebService, private rota_ts: Router) { }

  carregarProdutos() : void {
    this.web.getProdutos().subscribe(res =>{
      this.listaProdutos = res;
    });
  }

  removerProduto(id: String) : void {
    this.web.deleteProduto(id).subscribe({
      next: data => {
        alert("Produto removido com sucesso!"); 
        window.location.reload()
      },
      error: error => {
        alert("Erro ao remmover o produto: " + error.message)
      }
    })
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

}
