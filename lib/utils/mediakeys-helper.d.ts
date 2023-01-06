import type { DRMSystemOptions, EMEControllerConfig } from '../config';
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/requestMediaKeySystemAccess
 */
export declare enum KeySystems {
    CLEARKEY = "org.w3.clearkey",
    FAIRPLAY = "com.apple.fps",
    PLAYREADY = "com.microsoft.playready",
    WIDEVINE = "com.widevine.alpha"
}
export declare enum KeySystemFormats {
    CLEARKEY = "org.w3.clearkey",
    FAIRPLAY = "com.apple.streamingkeydelivery",
    PLAYREADY = "com.microsoft.playready",
    WIDEVINE = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
}
export declare function keySystemFormatToKeySystemDomain(format: KeySystemFormats): KeySystems | undefined;
export declare enum KeySystemIds {
    WIDEVINE = "edef8ba979d64acea3c827dcd51d21ed"
}
export declare function keySystemIdToKeySystemDomain(systemId: KeySystemIds): KeySystems | undefined;
export declare function keySystemDomainToKeySystemFormat(keySystem: KeySystems): KeySystemFormats | undefined;
export declare function getKeySystemsForConfig(config: EMEControllerConfig): KeySystems[];
export type MediaKeyFunc = (keySystem: KeySystems, supportedConfigurations: MediaKeySystemConfiguration[]) => Promise<MediaKeySystemAccess>;
export declare const requestMediaKeySystemAccess: MediaKeyFunc | null;
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration
 */
export declare function getSupportedMediaKeySystemConfigurations(keySystem: KeySystems, audioCodecs: string[], videoCodecs: string[], drmSystemOptions: DRMSystemOptions): MediaKeySystemConfiguration[];
//# sourceMappingURL=mediakeys-helper.d.ts.map