import bs58check from "bs58check";

export function validateAddress(addr: string): boolean {
    try {
        const decoded = bs58check.decode(addr);
        const version = decoded[0];

        // BSV uses legacy Base58:
        // 0x00 = P2PKH (1...)
        // 0x05 = P2SH  (3...)
        return version === 0x00 || version === 0x05;
    } catch (e) {
        return false;
    }
}
