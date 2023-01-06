import { Events } from '../events';
import { Bufferable } from '../utils/buffer-helper';
import BaseStreamController from './base-stream-controller';
import { Level } from '../types/level';
import type { NetworkComponentAPI } from '../types/component-api';
import type Hls from '../hls';
import type { FragmentTracker } from './fragment-tracker';
import type KeyLoader from '../loader/key-loader';
import type { LevelDetails } from '../loader/level-details';
import type { Fragment } from '../loader/fragment';
import type { ErrorData, FragLoadedData, SubtitleFragProcessed, SubtitleTracksUpdatedData, TrackLoadedData, TrackSwitchedData, BufferFlushingData, LevelLoadedData, FragBufferedData } from '../types/events';
export declare class SubtitleStreamController extends BaseStreamController implements NetworkComponentAPI {
    protected levels: Array<Level>;
    private currentTrackId;
    private tracksBuffered;
    private mainDetails;
    constructor(hls: Hls, fragmentTracker: FragmentTracker, keyLoader: KeyLoader);
    protected onHandlerDestroying(): void;
    private _registerListeners;
    private _unregisterListeners;
    startLoad(startPosition: number): void;
    onManifestLoading(): void;
    onLevelLoaded(event: Events.LEVEL_LOADED, data: LevelLoadedData): void;
    onSubtitleFragProcessed(event: Events.SUBTITLE_FRAG_PROCESSED, data: SubtitleFragProcessed): void;
    onBufferFlushing(event: Events.BUFFER_FLUSHING, data: BufferFlushingData): void;
    onFragBuffered(event: Events.FRAG_BUFFERED, data: FragBufferedData): void;
    onError(event: Events.ERROR, data: ErrorData): void;
    onSubtitleTracksUpdated(event: Events.SUBTITLE_TRACKS_UPDATED, { subtitleTracks }: SubtitleTracksUpdatedData): void;
    onSubtitleTrackSwitch(event: Events.SUBTITLE_TRACK_SWITCH, data: TrackSwitchedData): void;
    onSubtitleTrackLoaded(event: Events.SUBTITLE_TRACK_LOADED, data: TrackLoadedData): void;
    _handleFragmentLoadComplete(fragLoadedData: FragLoadedData): void;
    doTick(): void;
    protected getMaxBufferLength(mainBufferLength?: number): number;
    protected loadFragment(frag: Fragment, levelDetails: LevelDetails, targetBufferTime: number): void;
    get mediaBufferTimeRanges(): Bufferable;
}
//# sourceMappingURL=subtitle-stream-controller.d.ts.map