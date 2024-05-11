import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item-chuva.component.html',
  styleUrls: ['./sidebar-item-chuva.component.scss']
})
export class SidebarItemChuvaComponent {
  @Input() nome: string='';
}