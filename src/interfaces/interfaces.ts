export interface WorkspaceProfile {
    tabs?: TabConfig[];
    name: string;
}

export interface TabConfig {
    title?: string;
    color?: string;
    profile?: number;
    commands?: string[];
}

export interface TabCommand {
    command: string;
}

export enum HOT_KEYS {
    WORKSPACE_PROFILE_1 = `workspace-profile-1`,
    WORKSPACE_PROFILE_2 = `workspace-profile-2`,
    WORKSPACE_PROFILE_3 = `workspace-profile-3`,
    WORKSPACE_PROFILE_4 = `workspace-profile-4`,
    WORKSPACE_PROFILE_5 = `workspace-profile-5`,
}
