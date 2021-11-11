import { Injectable } from '@angular/core';
import { HotkeyDescription, HotkeyProvider } from 'tabby-core';
import { HOT_KEYS } from './interfaces/interfaces';

@Injectable()
export class WorkspaceManagerHotkeyProvider extends HotkeyProvider {
    async provide(): Promise<HotkeyDescription[]> {
        return [
            {
                id: HOT_KEYS.WORKSPACE_PROFILE_1,
                name: 'Workspace profile 1',
            },
            {
                id: HOT_KEYS.WORKSPACE_PROFILE_2,
                name: 'Workspace profile 2',
            },
            {
                id: HOT_KEYS.WORKSPACE_PROFILE_3,
                name: 'Workspace profile 3',
            },
            {
                id: HOT_KEYS.WORKSPACE_PROFILE_4,
                name: 'Workspace profile 4',
            },
            {
                id: HOT_KEYS.WORKSPACE_PROFILE_5,
                name: 'Workspace profile 5',
            },
        ];
    }
}
