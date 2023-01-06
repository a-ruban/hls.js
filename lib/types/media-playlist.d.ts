import type { LevelParsed } from './level';
export interface AudioGroup {
    id?: string;
    codec?: string;
}
export type AudioPlaylistType = 'AUDIO';
export type MainPlaylistType = AudioPlaylistType | 'VIDEO';
export type SubtitlePlaylistType = 'SUBTITLES' | 'CLOSED-CAPTIONS';
export type MediaPlaylistType = MainPlaylistType | SubtitlePlaylistType;
export interface MediaPlaylist extends LevelParsed {
    autoselect: boolean;
    default: boolean;
    forced: boolean;
    groupId?: string;
    id: number;
    instreamId?: string;
    lang?: string;
    name: string;
    type: MediaPlaylistType | 'main';
}
//# sourceMappingURL=media-playlist.d.ts.map