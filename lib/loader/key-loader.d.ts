import { ErrorDetails } from '../errors';
import { Loader, KeyLoaderContext } from '../types/loader';
import { LoadError } from './fragment-loader';
import type { HlsConfig } from '../hls';
import type { Fragment } from '../loader/fragment';
import type { ComponentAPI } from '../types/component-api';
import type { KeyLoadedData } from '../types/events';
import type { LevelKey } from './level-key';
import type EMEController from '../controller/eme-controller';
import type { MediaKeySessionContext } from '../controller/eme-controller';
import type { KeySystemFormats } from '../utils/mediakeys-helper';
export interface KeyLoaderInfo {
    decryptdata: LevelKey;
    keyLoadPromise: Promise<KeyLoadedData> | null;
    loader: Loader<KeyLoaderContext> | null;
    mediaKeySessionContext: MediaKeySessionContext | null;
}
export default class KeyLoader implements ComponentAPI {
    private readonly config;
    keyUriToKeyInfo: {
        [keyuri: string]: KeyLoaderInfo;
    };
    emeController: EMEController | null;
    constructor(config: HlsConfig);
    abort(): void;
    detach(): void;
    destroy(): void;
    createKeyLoadError(frag: Fragment, details?: ErrorDetails, networkDetails?: any, message?: string): LoadError;
    loadClear(loadingFrag: Fragment, encryptedFragments: Fragment[]): void | Promise<void>;
    load(frag: Fragment): Promise<KeyLoadedData>;
    loadInternal(frag: Fragment, keySystemFormat?: KeySystemFormats): Promise<KeyLoadedData>;
    loadKeyEME(keyInfo: KeyLoaderInfo, frag: Fragment): Promise<KeyLoadedData>;
    loadKeyHTTP(keyInfo: KeyLoaderInfo, frag: Fragment): Promise<KeyLoadedData>;
    private resetLoader;
}
//# sourceMappingURL=key-loader.d.ts.map