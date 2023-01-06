export default class AESCrypto {
    private subtle;
    private aesIV;
    constructor(subtle: SubtleCrypto, iv: Uint8Array);
    decrypt(data: ArrayBuffer, key: CryptoKey): Promise<ArrayBuffer>;
}
//# sourceMappingURL=aes-crypto.d.ts.map