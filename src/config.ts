import { ConfigProvider } from 'tabby-core';
import { HOT_KEYS } from './interfaces/interfaces';

export class WorkspaceManagerProvider extends ConfigProvider {
    defaults = {
        workspaceManager: {
            defaultWorkspaceProfile: 0,
            runOnStartup: false,
        },
        hotkeys: {
            [HOT_KEYS.WORKSPACE_PROFILE_1]: [],
            [HOT_KEYS.WORKSPACE_PROFILE_2]: [],
            [HOT_KEYS.WORKSPACE_PROFILE_3]: [],
            [HOT_KEYS.WORKSPACE_PROFILE_4]: [],
            [HOT_KEYS.WORKSPACE_PROFILE_5]: [],
        },
    };
}
