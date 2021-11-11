import { ConfigProvider } from 'tabby-core';
export declare class WorkspaceManagerProvider extends ConfigProvider {
    defaults: {
        workspaceManager: {
            defaultWorkspaceProfile: number;
            runOnStartup: boolean;
        };
    };
}
