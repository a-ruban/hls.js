export declare enum ErrorTypes {
    NETWORK_ERROR = "networkError",
    MEDIA_ERROR = "mediaError",
    KEY_SYSTEM_ERROR = "keySystemError",
    MUX_ERROR = "muxError",
    OTHER_ERROR = "otherError"
}
/**
 * @enum {ErrorDetails}
 * @typedef {string} ErrorDetail
 */
export declare enum ErrorDetails {
    KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
    KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
    KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
    KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense",
    KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
    KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed",
    KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed",
    KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed",
    KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted",
    KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError",
    MANIFEST_LOAD_ERROR = "manifestLoadError",
    MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
    MANIFEST_PARSING_ERROR = "manifestParsingError",
    MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
    LEVEL_EMPTY_ERROR = "levelEmptyError",
    LEVEL_LOAD_ERROR = "levelLoadError",
    LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
    LEVEL_SWITCH_ERROR = "levelSwitchError",
    AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
    AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
    SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError",
    SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut",
    FRAG_LOAD_ERROR = "fragLoadError",
    FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
    FRAG_DECRYPT_ERROR = "fragDecryptError",
    FRAG_PARSING_ERROR = "fragParsingError",
    REMUX_ALLOC_ERROR = "remuxAllocError",
    KEY_LOAD_ERROR = "keyLoadError",
    KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
    BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
    BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError",
    BUFFER_APPEND_ERROR = "bufferAppendError",
    BUFFER_APPENDING_ERROR = "bufferAppendingError",
    BUFFER_STALLED_ERROR = "bufferStalledError",
    BUFFER_FULL_ERROR = "bufferFullError",
    BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
    BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
    INTERNAL_EXCEPTION = "internalException",
    INTERNAL_ABORTED = "aborted",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=errors.d.ts.map