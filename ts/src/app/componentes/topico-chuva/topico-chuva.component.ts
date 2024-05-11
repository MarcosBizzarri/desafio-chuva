import { Component, Input } from '@angular/core';

@Component({
  selector: 'topico-chuva',
  templateUrl: './topico-chuva.component.html',
  styleUrls: ['./topico-chuva.component.scss']
})
export class TopicoChuvaComponent {
  @Input() titulo: string='';
  @Input() subTitulo: string='';
  @Input() conteudo: string='';

}