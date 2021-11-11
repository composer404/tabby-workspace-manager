import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'new-workspace-profile-modal',
    template: require('./new-workspace-profile-modal.component.pug'),
})
export class NewWorkspaceProfileModalComponent {
    name: string;

    constructor(private modalInstance: NgbActiveModal) {}

    save(): void {
        this.modalInstance.close(this.name);
    }

    close(): void {
        this.modalInstance.dismiss();
    }
}
