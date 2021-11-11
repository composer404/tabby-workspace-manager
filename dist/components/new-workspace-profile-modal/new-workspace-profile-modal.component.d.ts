import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export declare class NewWorkspaceProfileModalComponent {
    private modalInstance;
    name: string;
    constructor(modalInstance: NgbActiveModal);
    save(): void;
    close(): void;
}
