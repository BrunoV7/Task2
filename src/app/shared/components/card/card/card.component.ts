import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" [ngClass]="cardClass">
      <div class="card-header">
        <h3>{{ title }}</h3>
        <span *ngIf="subtitle" class="card-subtitle">{{ subtitle }}</span>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
      <div *ngIf="actionButton" class="card-actions">
        <button (click)="onAction()">{{ actionLabel }}</button>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() cardClass: string = '';
  @Input() actionButton: boolean = false;
  @Input() actionLabel: string = 'Ação';

  @Output() action = new EventEmitter<void>();

  onAction() {
    this.action.emit();
  }
}
