import AbrController from './controller/abr-controller';
import AudioStreamController from './controller/audio-stream-controller';
import AudioTrackController from './controller/audio-track-controller';
import { SubtitleStreamController } from './controller/subtitle-stream-controller';
import SubtitleTrackController from './controller/subtitle-track-controller';
import BufferController from './controller/buffer-controller';
import { TimelineController } from './controller/timeline-controller';
import CapLevelController from './controller/cap-level-controller';
import FPSController from './controller/fps-controller';
import EMEController, { MediaKeySessionContext } from './controller/eme-controller';
import CMCDController from './controller/cmcd-controller';
import { ILogger } from './utils/logger';
import type Hls from './hls';
import type { CuesInterface } from './utils/cues';
import type { MediaKeyFunc, KeySystems } from './utils/mediakeys-helper';
import type { FragmentLoaderContext, Loader, LoaderContext, PlaylistLoaderContext } from './types/loader';
export type ABRControllerConfig = {
    abrEwmaFastLive: number;
    abrEwmaSlowLive: number;
    abrEwmaFastVoD: number;
    abrEwmaSlowVoD: number;
    abrEwmaDefaultEstimate: number;
    abrBandWidthFactor: number;
    abrBandWidthUpFactor: number;
    abrMaxWithRealBitrate: boolean;
    maxStarvationDelay: number;
    maxLoadingDelay: number;
};
export type BufferControllerConfig = {
    appendErrorMaxRetry: number;
    backBufferLength: number;
    liveDurationInfinity: boolean;
    liveBackBufferLength: number | null;
};
export type CapLevelControllerConfig = {
    capLevelToPlayerSize: boolean;
};
export type CMCDControllerConfig = {
    sessionId?: string;
    contentId?: string;
    useHeaders?: boolean;
};
export type DRMSystemOptions = {
    audioRobustness?: string;
    videoRobustness?: string;
    audioEncryptionScheme?: string | null;
    videoEncryptionScheme?: string | null;
    persistentState?: MediaKeysRequirement;
    distinctiveIdentifier?: MediaKeysRequirement;
    sessionTypes?: string[];
    sessionType?: string;
};
export type DRMSystemConfiguration = {
    licenseUrl: string;
    serverCertificateUrl?: string;
    generateRequest?: (this: Hls, initDataType: string, initData: ArrayBuffer | null, keyContext: MediaKeySessionContext) => {
        initDataType: string;
        initData: ArrayBuffer | null;
    } | undefined | never;
};
export type DRMSystemsConfiguration = Partial<Record<KeySystems, DRMSystemConfiguration>>;
export type EMEControllerConfig = {
    licenseXhrSetup?: (this: Hls, xhr: XMLHttpRequest, url: string, keyContext: MediaKeySessionContext, licenseChallenge: Uint8Array) => void | Uint8Array | Promise<Uint8Array | void>;
    licenseResponseCallback?: (this: Hls, xhr: XMLHttpRequest, url: string, keyContext: MediaKeySessionContext) => ArrayBuffer;
    emeEnabled: boolean;
    widevineLicenseUrl?: string;
    drmSystems: DRMSystemsConfiguration;
    drmSystemOptions: DRMSystemOptions;
    requestMediaKeySystemAccessFunc: MediaKeyFunc | null;
};
export interface FragmentLoaderConstructor {
    new (confg: HlsConfig): Loader<FragmentLoaderContext>;
}
export type FragmentLoaderConfig = {
    fLoader?: FragmentLoaderConstructor;
    fragLoadingTimeOut: number;
    fragLoadingMaxRetry: number;
    fragLoadingRetryDelay: number;
    fragLoadingMaxRetryTimeout: number;
};
export type FPSControllerConfig = {
    capLevelOnFPSDrop: boolean;
    fpsDroppedMonitoringPeriod: number;
    fpsDroppedMonitoringThreshold: number;
};
export type LevelControllerConfig = {
    startLevel?: number;
};
export type MP4RemuxerConfig = {
    stretchShortVideoTrack: boolean;
    maxAudioFramesDrift: number;
};
export interface PlaylistLoaderConstructor {
    new (confg: HlsConfig): Loader<PlaylistLoaderContext>;
}
export type PlaylistLoaderConfig = {
    pLoader?: PlaylistLoaderConstructor;
    manifestLoadingTimeOut: number;
    manifestLoadingMaxRetry: number;
    manifestLoadingRetryDelay: number;
    manifestLoadingMaxRetryTimeout: number;
    levelLoadingTimeOut: number;
    levelLoadingMaxRetry: number;
    levelLoadingRetryDelay: number;
    levelLoadingMaxRetryTimeout: number;
};
export type StreamControllerConfig = {
    autoStartLoad: boolean;
    startPosition: number;
    defaultAudioCodec?: string;
    initialLiveManifestSize: number;
    maxBufferLength: number;
    maxBufferSize: number;
    maxBufferHole: number;
    highBufferWatchdogPeriod: number;
    nudgeOffset: number;
    nudgeMaxRetry: number;
    maxFragLookUpTolerance: number;
    maxMaxBufferLength: number;
    startFragPrefetch: boolean;
    testBandwidth: boolean;
};
export type LatencyControllerConfig = {
    liveSyncDurationCount: number;
    liveMaxLatencyDurationCount: number;
    liveSyncDuration?: number;
    liveMaxLatencyDuration?: number;
    maxLiveSyncPlaybackRate: number;
};
export type MetadataControllerConfig = {
    enableDateRangeMetadataCues: boolean;
    enableEmsgMetadataCues: boolean;
    enableID3MetadataCues: boolean;
};
export type TimelineControllerConfig = {
    cueHandler: CuesInterface;
    enableWebVTT: boolean;
    enableIMSC1: boolean;
    enableCEA708Captions: boolean;
    captionsTextTrack1Label: string;
    captionsTextTrack1LanguageCode: string;
    captionsTextTrack2Label: string;
    captionsTextTrack2LanguageCode: string;
    captionsTextTrack3Label: string;
    captionsTextTrack3LanguageCode: string;
    captionsTextTrack4Label: string;
    captionsTextTrack4LanguageCode: string;
    renderTextTracksNatively: boolean;
};
export type TSDemuxerConfig = {
    forceKeyFrameOnDiscontinuity: boolean;
};
export type HlsConfig = {
    debug: boolean | ILogger;
    enableWorker: boolean;
    enableSoftwareAES: boolean;
    minAutoBitrate: number;
    ignoreDevicePixelRatio: boolean;
    loader: {
        new (confg: HlsConfig): Loader<LoaderContext>;
    };
    fetchSetup?: (context: LoaderContext, initParams: any) => Request;
    xhrSetup?: (xhr: XMLHttpRequest, url: string) => void;
    audioStreamController?: typeof AudioStreamController;
    audioTrackController?: typeof AudioTrackController;
    subtitleStreamController?: typeof SubtitleStreamController;
    subtitleTrackController?: typeof SubtitleTrackController;
    timelineController?: typeof TimelineController;
    emeController?: typeof EMEController;
    cmcd?: CMCDControllerConfig;
    cmcdController?: typeof CMCDController;
    abrController: typeof AbrController;
    bufferController: typeof BufferController;
    capLevelController: typeof CapLevelController;
    fpsController: typeof FPSController;
    progressive: boolean;
    lowLatencyMode: boolean;
} & ABRControllerConfig & BufferControllerConfig & CapLevelControllerConfig & EMEControllerConfig & FPSControllerConfig & FragmentLoaderConfig & LevelControllerConfig & MP4RemuxerConfig & PlaylistLoaderConfig & StreamControllerConfig & LatencyControllerConfig & MetadataControllerConfig & TimelineControllerConfig & TSDemuxerConfig;
export declare const hlsDefaultConfig: HlsConfig;
export declare function mergeConfig(defaultConfig: HlsConfig, userConfig: Partial<HlsConfig>): HlsConfig;
export declare function enableStreamingMode(config: any): void;
//# sourceMappingURL=config.d.ts.map