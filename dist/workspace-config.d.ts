import { WorkspaceProfile } from './interfaces/interfaces';
export declare function loadWorkspaceConfig(app: any): WorkspaceProfile[];
export declare function saveWorkspaceConfig(app: any, workspaceProfiles: WorkspaceProfile[]): void;
export declare function getWorkspaceConfigPath(app: any): string;
