import { ConfigService } from 'tabby-core';
import { WorkspaceManagerService } from '../../services/workspace-manager.service';
import { WorkspaceProfile } from '../../interfaces/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export declare class WorkspaceManagerSettingsComponent {
    config: ConfigService;
    private workspaceService;
    private ngbModal;
    workspaceProfileFilter: string;
    profiles: WorkspaceProfile[];
    selectedProfile: any;
    isRunOnStartup: boolean;
    constructor(config: ConfigService, workspaceService: WorkspaceManagerService, ngbModal: NgbModal);
    selectProfile(profile: WorkspaceProfile, index: number): void;
    runProfile(profile: WorkspaceProfile): void;
    newProfile(): Promise<void>;
    saveSelectedProfile(): void;
    loadExampleConfig(): void;
    deleteProfile(index: number): void;
    workspaceProfileFilterFn(profile: WorkspaceProfile): boolean;
    openWorkspaceConfigFile(): void;
}
