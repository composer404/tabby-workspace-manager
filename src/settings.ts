import { Injectable } from '@angular/core';
import { SettingsTabProvider } from 'tabby-settings';
import { WorkspaceManagerSettingsComponent } from './components/workspace-manager-settings/workspace-manager-settings.component';

@Injectable()
export class WorkspaceManagerSettingsProvider extends SettingsTabProvider {
    id = `workspace-manager`;
    icon = `list-alt`;
    title = `Workspace manager`;

    getComponentType(): any {
        return WorkspaceManagerSettingsComponent;
    }
}
