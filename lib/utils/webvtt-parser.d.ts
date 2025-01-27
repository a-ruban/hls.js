import type { VTTCCs } from '../types/vtt';
export declare function generateCueId(startTime: number, endTime: number, text: string): string;
export declare function parseWebVTT(vttByteArray: ArrayBuffer, initPTS: number, timescale: number, vttCCs: VTTCCs, cc: number, timeOffset: number, callBack: (cues: VTTCue[]) => void, errorCallBack: (error: Error) => void): void;
//# sourceMappingURL=webvtt-parser.d.ts.map