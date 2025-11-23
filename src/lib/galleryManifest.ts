const safeRequire = (p: string) => {
  try {
    const m = require(p);
    return (m && m.default) ? m.default : m;
  } catch (err) {
    // missing asset — log and skip so app doesn't crash with white screen
    // console.warn(`Missing gallery asset: ${p}`, err);
    return null;
  }
};

const galleryManifest = {
  "Birthdays": [
    safeRequire("../assets/Gallery/Birthdays/WhatsApp Image 2025-10-07 at 16.03.23_93ec983c.jpg"),
    safeRequire("../assets/Gallery/Birthdays/WhatsApp Image 2025-10-16 at 09.41.19_d29a2d68.jpg"),
    safeRequire("../assets/Gallery/Birthdays/WhatsApp Image 2025-11-20 at 20.11.17_0dbaed95.jpg"),
    safeRequire("../assets/Gallery/Birthdays/WhatsApp Image 2025-11-20 at 20.11.17_44500028.jpg"),
    safeRequire("../assets/Gallery/Birthdays/WhatsApp Image 2025-11-20 at 20.11.17_d07251ae.jpg"),
  ].filter((x): x is string => Boolean(x)),

  "Boundaries": [
    safeRequire("../assets/Gallery/Boundaries/WhatsApp Image 2025-11-20 at 20.03.07_19107e38.jpg"),
  ].filter((x): x is string => Boolean(x)),

  "Christmass Hamper": [
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-20 at 19.55.04_f71586a7.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.25.59_803a39da.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.25.59_0023143c.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.25.59_d840bb32.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.25.59_f89e9fd6.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.26.00_8fa19108.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.26.00_239b99b3.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.26.00_b3718f13.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.26.00_c03e958e.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.26.01_c9aa10ba.jpg"),
    safeRequire("../assets/Gallery/Christmass Hamper/WhatsApp Image 2025-11-21 at 15.26.01_fa4aa0af.jpg"),
  ].filter((x): x is string => Boolean(x)),

  "Education": [
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-10-16 at 09.35.10_6c4f12ca.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-10-16 at 09.35.19_ee9a34a8.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-10-16 at 09.36.43_83908c6a.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-10-16 at 09.37.45_26780bed.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_1bb500d1.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_05c4c6db.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_7e05bb9c.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_8df21dbf.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_12bfabf8.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_90e19c67.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_754bc5ef.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_1269cfd2.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_bcabfb42.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_cfc61127.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.03.07_fa685941.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.20_c2ac1749.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.21_994cce3f.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.22_6e3bb66f.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.22_d0e280cd.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.22_d5978af8.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.22_f942439d.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.23_bc1aeb21.jpg"),
    safeRequire("../assets/Gallery/Education/WhatsApp Image 2025-11-20 at 20.11.24_870d03e1.jpg"),
  ].filter((x): x is string => Boolean(x)),

  "Feed a granny": [
    safeRequire("../assets/Gallery/Feed a granny/WhatsApp Image 2025-11-09 at 20.31.44_fff52405.jpg"),
    safeRequire("../assets/Gallery/Feed a granny/WhatsApp Image 2025-11-09 at 20.32.47_e8236082.jpg"),
    safeRequire("../assets/Gallery/Feed a granny/WhatsApp Image 2025-11-09 at 20.32.48_3c16b336.jpg"),
    safeRequire("../assets/Gallery/Feed a granny/WhatsApp Image 2025-11-09 at 20.32.48_61df2916.jpg"),
    safeRequire("../assets/Gallery/Feed a granny/WhatsApp Image 2025-11-09 at 20.32.48_a2a4eef8.jpg"),
    safeRequire("../assets/Gallery/Feed a granny/WhatsApp Image 2025-11-09 at 20.33.18_ec649783.jpg"),
    safeRequire("../assets/Gallery/Feed a granny/WhatsApp Image 2025-11-20 at 19.54.19_f7da3ed7.jpg"),
  ].filter((x): x is string => Boolean(x)),

  "Girlie Camps": [
    safeRequire("../assets/Gallery/Girlie Camps/WhatsApp Image 2025-10-18 at 17.22.53_4f9d13be.jpg"),
    safeRequire("../assets/Gallery/Girlie Camps/WhatsApp Image 2025-10-18 at 17.22.53_caa14ac5.jpg"),
    safeRequire("../assets/Gallery/Girlie Camps/WhatsApp Image 2025-10-18 at 17.22.53_da30af06.jpg"),
    safeRequire("../assets/Gallery/Girlie Camps/WhatsApp Image 2025-10-18 at 17.22.53_e2675b83.jpg"),
    safeRequire("../assets/Gallery/Girlie Camps/WhatsApp Image 2025-10-18 at 17.22.53_f5bc4bca.jpg"),
    safeRequire("../assets/Gallery/Girlie Camps/WhatsApp Image 2025-10-18 at 17.22.54_3ad7bb3d.jpg"),
    safeRequire("../assets/Gallery/Girlie Camps/WhatsApp Image 2025-10-18 at 17.22.54_bff4fa85.jpg"),
  ].filter((x): x is string => Boolean(x)),
