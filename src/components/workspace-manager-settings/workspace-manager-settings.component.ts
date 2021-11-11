import * as yaml from 'js-yaml';

import { Component } from '@angular/core';
import { ConfigService } from 'tabby-core';
import { WorkspaceManagerService } from '../../services/workspace-manager.service';
import { WorkspaceProfile } from '../../interfaces/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewWorkspaceProfileModalComponent } from '../new-workspace-profile-modal/new-workspace-profile-modal.component';

@Component({
    template: require('./workspace-manager-settings.component.pug'),
    styles: [require('./workspace-manager-settings.component.scss')],
})
export class WorkspaceManagerSettingsComponent {
    workspaceProfileFilter = ``;
    profiles: WorkspaceProfile[];
    selectedProfile: any = {};
    isRunOnStartup: boolean;

    constructor(
        public config: ConfigService,
        private workspaceService: WorkspaceManagerService,
        private ngbModal: NgbModal,
    ) {
        this.profiles = this.workspaceService.loadWorkspaceProfiles();
    }

    selectProfile(profile: WorkspaceProfile, index: number): void {
        this.selectedProfile = {
            profile: yaml.dump(profile.tabs),
            name: profile.name,
            index,
        };
    }

    runProfile(profile: WorkspaceProfile): void {
        this.workspaceService.buildWorkspace(profile.tabs);
    }

    async newProfile(): Promise<void> {
        const modal = this.ngbModal.open(NewWorkspaceProfileModalComponent);
        const result = await modal.result;
        if (result) {
            this.profiles.push({ name: result });
        }
        this.workspaceService.saveWorkspaceProfiles(this.profiles);
    }

    saveSelectedProfile(): void {
        this.profiles[this.selectedProfile.index].name = this.selectedProfile.name;
        this.profiles[this.selectedProfile.index].tabs = yaml.load(this.selectedProfile.profile) as any;
        this.workspaceService.saveWorkspaceProfiles(this.profiles);
    }

    loadExampleConfig(): void {
        const exampleProfile: WorkspaceProfile = {
            name: `example`,
            tabs: [
                {
                    title: `Example Title 1`,
                    color: `#03fccf`,
                    profile: 0,
                    commands: [`ls`, `cd ..`],
                },
                {
                    title: `Example Title 2`,
                    color: `#fc036b`,
                },
                {
                    title: `Example Title 3`,
                    color: `#302a57`,
                },
            ],
        };

        this.selectedProfile.profile = yaml.dump(exampleProfile.tabs);
    }

    deleteProfile(index: number): void {
        this.profiles.splice(index, 1);
        this.workspaceService.saveWorkspaceProfiles(this.profiles);
        if (this.selectedProfile.index === index) {
            this.selectedProfile = {};
        }
    }

    workspaceProfileFilterFn(profile: WorkspaceProfile): boolean {
        return profile.name.toLowerCase().includes(this.workspaceProfileFilter.toLowerCase());
    }

    openWorkspaceConfigFile(): void {
        this.workspaceService.showWorkspaceConfigFile();
    }
}
