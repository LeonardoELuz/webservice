import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './listar/Produto';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseUrl = "https://banco-dados-teste.glitch.me/api";

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "/produtos")
    
  }

  getProduto(id: String) :Observable<Produto> {
    return this.http.get<Produto>(this.baseUrl + "/produtos/" + id)

  }
  cadastrarProduto(produto: { title: any; price: any; description: any; }) : Observable<any> {
    let body = new HttpParams();
    body = body.set("title", produto.title);
    body = body.set("price", String(produto.price));
    body = body.set("description", produto.description);
    return this.http.post(this.baseUrl + "/produtos", body, {observe: "response"});
  }

  deleteProduto(id: String) : Observable<any> {
    return this.http.delete(this.baseUrl + "/produtos/" + id)
  }

  atualizarProduto(id: String, produto : { title: any; price: any; description: any; }) : Observable<any> {
    let body = new HttpParams();
    body = body.set("title", produto.title);
    body = body.set("price", String(produto.price));
    body = body.set("description", produto.description);
    return this.http.put(this.baseUrl + "/produtos/" + id, body, {observe: "response"});
  }

  constructor(private http : HttpClient) { }
}
