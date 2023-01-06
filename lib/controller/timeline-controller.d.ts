import { Events } from '../events';
import { CaptionScreen } from '../utils/cea-608-parser';
import { BufferFlushingData } from '../types/events';
import type Hls from '../hls';
import type { ComponentAPI } from '../types/component-api';
export declare class TimelineController implements ComponentAPI {
    private hls;
    private media;
    private config;
    private enabled;
    private Cues;
    private textTracks;
    private tracks;
    private initPTS;
    private timescale;
    private unparsedVttFrags;
    private captionsTracks;
    private nonNativeCaptionsTracks;
    private cea608Parser1;
    private cea608Parser2;
    private lastSn;
    private lastPartIndex;
    private prevCC;
    private vttCCs;
    private captionsProperties;
    constructor(hls: Hls);
    destroy(): void;
    addCues(trackName: string, startTime: number, endTime: number, screen: CaptionScreen, cueRanges: Array<[number, number]>): void;
    private onInitPtsFound;
    private getExistingTrack;
    createCaptionsTrack(trackName: string): void;
    private createNativeTrack;
    private createNonNativeTrack;
    private createTextTrack;
    private onMediaAttaching;
    private onMediaDetaching;
    private onManifestLoading;
    private _cleanTracks;
    private onSubtitleTracksUpdated;
    private _captionsOrSubtitlesFromCharacteristics;
    private onManifestLoaded;
    private closedCaptionsForLevel;
    private onFragLoading;
    private onFragLoaded;
    private _parseIMSC1;
    private _parseVTTs;
    private _fallbackToIMSC1;
    private _appendCues;
    private onFragDecrypted;
    private onSubtitleTracksCleared;
    private onFragParsingUserdata;
    onBufferFlushing(event: Events.BUFFER_FLUSHING, { startOffset, endOffset, endOffsetSubtitles, type }: BufferFlushingData): void;
    private extractCea608Data;
}
//# sourceMappingURL=timeline-controller.d.ts.map