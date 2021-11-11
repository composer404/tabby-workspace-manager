import { ConfigProvider } from 'tabby-core';

export class WorkspaceManagerProvider extends ConfigProvider {
    defaults = {
        workspaceManager: {
            defaultWorkspaceProfile: 0,
            runOnStartup: false,
        },
    };
}
