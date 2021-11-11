import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';
import { WorkspaceProfile } from './interfaces/interfaces';

export function loadWorkspaceConfig(app: any): WorkspaceProfile[] {
    const configPath = getWorkspaceConfigPath(app);
    if (fs.existsSync(configPath)) {
        return yaml.load(fs.readFileSync(configPath, `utf8`)) as any;
    }
    fs.writeFileSync(configPath, ``);
    return [];
}

export function saveWorkspaceConfig(app: any, workspaceProfiles: WorkspaceProfile[]): void {
    fs.writeFileSync(getWorkspaceConfigPath(app), yaml.dump(workspaceProfiles));
}

export function getWorkspaceConfigPath(app: any): string {
    return path.join(app.getPath(`userData`), `workspace-config.yaml`);
}
