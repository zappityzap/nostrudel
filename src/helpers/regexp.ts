export const getMentionNpubOrNote = () =>
  /(?:\s|^)(@|nostr:)?((npub1|note1)[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{58})(?:\s|$)/gi;
export const getMatchNostrLink = () =>
  /(nostr:|@)?((npub|note|nprofile|nevent)1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{58,})/gi;
export const getMatchHashtag = () => /(^|[^\p{L}])#([\p{L}\p{N}]+)/gu;
export const getMatchLink = () =>
  /https?:\/\/([a-zA-Z0-9\.\-]+\.[a-zA-Z]+)([\p{Letter}\p{Number}&\.-\/\?=#\-@%\+_,:]*)/gu;
