import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  _filtroLista!: string;
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: any = {};
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEventos(filtraPor: string): any {
    filtraPor = filtraPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { eventoId: number; tema: string; local: string; dataEvento: string; lote: string; qtdPessoas: number; }) =>
        (evento.eventoId != null ? evento.eventoId.toString().toLocaleLowerCase().indexOf(filtraPor) !== -1 : null) ||
        (evento.tema != null ? evento.tema.toLocaleLowerCase().indexOf(filtraPor) !== -1 : null) ||
        (evento.local != null ? evento.local.toLocaleLowerCase().indexOf(filtraPor) !== -1 : null) ||
        (evento.dataEvento != null ? evento.dataEvento.toLocaleLowerCase().indexOf(filtraPor) !== -1 : null) ||
        (evento.qtdPessoas != null ? evento.qtdPessoas.toString().toLocaleLowerCase().indexOf(filtraPor) !== -1 : null) ||
        (evento.lote != null ? evento.lote.toString().toLocaleLowerCase().indexOf(filtraPor) !== -1 : null)
      );
  }

  alternarImagem(){
    this.mostrarImagem = !this.mostrarImagem;    
  }

  getEventos(){
    this.http.get('https://localhost:44348/weatherforecast/').subscribe(response =>{
      this.eventos = response;
    }, error => {
      console.log(error);
    }
    );
  }

}
