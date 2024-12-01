import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div *ngIf="isOpen" class="modal-overlay" (click)="closeModal($event)">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <button class="modal-close" (click)="closeModal()">×</button>
        </div>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        <div *ngIf="showActions" class="modal-actions">
          <button (click)="onCancel()" class="btn-cancel">Cancelar</button>
          <button (click)="onConfirm()" class="btn-confirm">{{ confirmLabel }}</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = 'Modal';
  @Input() isOpen: boolean = false;
  @Input() showActions: boolean = true;
  @Input() confirmLabel: string = 'Confirmar';

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  closeModal(event?: Event) {
    if (event) event.stopPropagation();
    this.isOpen = false;
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
    this.closeModal();
  }

  onCancel() {
    this.cancel.emit();
    this.closeModal();
  }
}
