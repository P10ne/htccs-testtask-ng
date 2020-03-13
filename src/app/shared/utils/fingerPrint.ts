import * as Fingerprint2 from 'fingerprintjs2'

export const getFingerprint = () => {
  async function getHash() {
    const options = {
      excludes: {
        plugins: true,
        localStorage: true,
        adBlock: true,
        screenResolution: true,
        availableScreenResolution: true,
        enumerateDevices: true,
        pixelRatio: true,
        doNotTrack: true
      }
    };

    try {
      const components = await Fingerprint2.getPromise(options);
      const values = components.map(component => component.value);
      console.log('fingerprint hash components', components);

      return String(Fingerprint2.x64hash128(values.join(''), 31));
    } catch (e) {
      throw e;
    }
  }
  return getHash();
};
