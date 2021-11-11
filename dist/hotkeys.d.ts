import { HotkeyDescription, HotkeyProvider } from 'tabby-core';
export declare class WorkspaceManagerHotkeyProvider extends HotkeyProvider {
    provide(): Promise<HotkeyDescription[]>;
}
