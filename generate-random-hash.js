const generateRandomHash = n => {
  n = n || 32;

  const rng = window.crypto || window.msCrypto;

  return Array
    .from(rng.getRandomValues(new Uint8Array(n)))
    .map(c => (c < 16 ? '0' : '') + c.toString(16)).join([]);
}

export default generateRandomHash