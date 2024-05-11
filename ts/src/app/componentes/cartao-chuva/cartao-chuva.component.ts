import { Component, Input } from '@angular/core';

@Component({
  selector: 'cartao-chuva',
  templateUrl: './cartao-chuva.component.html',
  styleUrls: ['./cartao-chuva.component.scss']
})
export class CartaoChuvaComponent {
    @Input() titulo: string='';

}
