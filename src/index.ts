import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfigProvider, HotkeyProvider } from 'tabby-core';
import ToggleComponent from 'tabby-core';
import { ToastrModule } from 'ngx-toastr';
import { SettingsTabProvider } from 'tabby-settings';

import { NgModule } from '@angular/core';
import { WorkspaceManagerProvider } from './config';
import { WorkspaceManagerSettingsProvider } from './settings';
import { WorkspaceManagerSettingsComponent } from './components/workspace-manager-settings/workspace-manager-settings.component';
import { NewWorkspaceProfileModalComponent } from './components/new-workspace-profile-modal/new-workspace-profile-modal.component';
import { WorkspaceManagerHotkeyProvider } from './hotkeys';
import { WorkspaceManagerService } from './services/workspace-manager.service';

@NgModule({
    imports: [CommonModule, FormsModule, ToastrModule, ToggleComponent],
    providers: [
        { provide: ConfigProvider, useClass: WorkspaceManagerProvider, multi: true },
        { provide: SettingsTabProvider, useClass: WorkspaceManagerSettingsProvider, multi: true },
        { provide: HotkeyProvider, useClass: WorkspaceManagerHotkeyProvider, multi: true },
    ],
    entryComponents: [WorkspaceManagerSettingsComponent, NewWorkspaceProfileModalComponent],
    declarations: [WorkspaceManagerSettingsComponent, NewWorkspaceProfileModalComponent],
})
export default class TabsConfigurationModule {
    constructor(private readonly workspaceManagerService: WorkspaceManagerService) {
        this.workspaceManagerService.init();
    }
}
