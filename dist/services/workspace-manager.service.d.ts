import { HotkeysService } from 'tabby-core';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'tabby-core';
import { TabConfig, WorkspaceProfile } from '../interfaces/interfaces';
import { ProfilesService, PlatformService } from 'tabby-core';
import { ElectronService } from 'tabby-electron';
export declare class WorkspaceManagerService {
    private readonly hotkeys;
    private readonly toastr;
    private readonly config;
    private readonly electronService;
    private readonly platform;
    private readonly profileService;
    constructor(hotkeys: HotkeysService, toastr: ToastrService, config: ConfigService, electronService: ElectronService, platform: PlatformService, profileService: ProfilesService);
    /**
     * Description. Subscribes for hotkey responsible for opening new workspace profiles.
     * Displays error when selected profile does not exist. Opens default workspace configruation at startup.
     */
    init(): void;
    /**
     * Description. Calls function responsible for loading workspace config file and returns its content as an array of workspace profiles.
     * @returns The workspace config as an array.
     */
    loadWorkspaceProfiles(): WorkspaceProfile[];
    /**
     * Description. Calls function responsible for saving workspace config file.
     * @param workspaceProfiles The workspace config
     */
    saveWorkspaceProfiles(workspaceProfiles: WorkspaceProfile[]): void;
    /**
     * Description. Opens directory with workspace config file
     */
    showWorkspaceConfigFile(): void;
    /**
     * Description. Builds workspace based on a given configuration. Opens tabs and customises them using the given values
     * @param config The workspace config.
     */
    buildWorkspace(config: TabConfig[]): Promise<void>;
}
