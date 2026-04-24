import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SQUARE_EM_INFO = {
  ".0625": [{ loc: '0.2500"', partNo: "61102" }],
  ".0938": [{ loc: '0.3750"', partNo: "61126" }],
  ".125":  [{ loc: '0.5000"', partNo: "61927" }],
  ".187":  [{ loc: '0.5625"', partNo: "62017" }],
  ".250":  [{ loc: '0.7500"', partNo: "62147" }],
  ".312":  [{ loc: '0.8125"', partNo: "62217" }],
  ".375":  [{ loc: '0.8750"', partNo: "62327" }],
  ".437":  [{ loc: '0.8750"', partNo: "62437" }],
  ".500":  [{ loc: '1.2500"', partNo: "62535" }],
  ".750":  [{ loc: '1.6250"', partNo: "61466" }],
};

const BALL_EM_INFO = {
  ".0625": [{ loc: '0.1250"', partNo: "61100" }],
  ".0938": [{ loc: '0.1875"', partNo: "61124" }],
  ".125":  [{ loc: '0.2500"', partNo: "61142" }],
  ".187":  [{ loc: '0.3125"', partNo: "28490" }],
  ".250":  [{ loc: '0.7500"', partNo: "28580" }],
  ".312":  [{ loc: '0.8125"', partNo: "28620" }],
  ".375":  [{ loc: '0.8750"', partNo: "28680" }],
  ".500":  [{ loc: '1.2500"', partNo: "28761" }],
};

const ENDMILL_DATA = {
  "Flat End Mill — Rough": {
    materials: ["Aluminum", "Cold Roll", "Stainless", "Tool Steel"],
    info: SQUARE_EM_INFO,
    diameters: {
      ".125": { "Cold Roll": { rpm: 7500, ipm: 24 }, "Aluminum": { rpm: 7500, ipm: 36 }, "Tool Steel": { rpm: 7500, ipm: 21 }, "Stainless": { rpm: 4200, ipm: 17 } },
      ".187": { "Cold Roll": { rpm: 7500, ipm: 36 }, "Aluminum": { rpm: 7500, ipm: 48 }, "Tool Steel": { rpm: 7500, ipm: 33 }, "Stainless": { rpm: 4000, ipm: 22 } },
      ".250": { "Cold Roll": { rpm: 6500, ipm: 42 }, "Aluminum": { rpm: 7500, ipm: 60 }, "Tool Steel": { rpm: 5730, ipm: 34 }, "Stainless": { rpm: 3500, ipm: 25 } },
      ".312": { "Cold Roll": { rpm: 5200, ipm: 42 }, "Aluminum": { rpm: 7500, ipm: 65 }, "Tool Steel": { rpm: 4584, ipm: 33 }, "Stainless": { rpm: 2800, ipm: 23 } },
      ".375": { "Cold Roll": { rpm: 4330, ipm: 42 }, "Aluminum": { rpm: 7500, ipm: 70 }, "Tool Steel": { rpm: 3820, ipm: 33 }, "Stainless": { rpm: 2300, ipm: 23 } },
      ".437": { "Cold Roll": { rpm: 3710, ipm: 42 }, "Aluminum": { rpm: 6550, ipm: 70 }, "Tool Steel": { rpm: 3274, ipm: 33 }, "Stainless": { rpm: 2000, ipm: 22 } },
      ".500": { "Cold Roll": { rpm: 3250, ipm: 42 }, "Aluminum": { rpm: 5730, ipm: 70 }, "Tool Steel": { rpm: 2865, ipm: 33 }, "Stainless": { rpm: 1750, ipm: 21 } },
      ".750": { "Cold Roll": { rpm: 2165, ipm: 42 }, "Aluminum": { rpm: 3820, ipm: 70 }, "Tool Steel": { rpm: 1910, ipm: 33 }, "Stainless": { rpm: 1170, ipm: 21 } },
    },
  },
  "Flat End Mill — Finish": {
    materials: ["Aluminum", "Cold Roll", "Stainless", "Tool Steel"],
    info: SQUARE_EM_INFO,
    diameters: {
      ".125": { "Cold Roll": { rpm: 7500, ipm: 27 }, "Aluminum": { rpm: 7500, ipm: 20 }, "Tool Steel": { rpm: 7500, ipm: 24 }, "Stainless": { rpm: 5000, ipm: 20 } },
      ".187": { "Cold Roll": { rpm: 7500, ipm: 42 }, "Aluminum": { rpm: 7500, ipm: 25 }, "Tool Steel": { rpm: 7500, ipm: 33 }, "Stainless": { rpm: 4800, ipm: 28 } },
      ".250": { "Cold Roll": { rpm: 7500, ipm: 54 }, "Aluminum": { rpm: 7500, ipm: 35 }, "Tool Steel": { rpm: 6876, ipm: 41 }, "Stainless": { rpm: 4100, ipm: 33 } },
      ".312": { "Cold Roll": { rpm: 6112, ipm: 56 }, "Aluminum": { rpm: 7500, ipm: 35 }, "Tool Steel": { rpm: 5500, ipm: 42 }, "Stainless": { rpm: 3300, ipm: 30 } },
      ".375": { "Cold Roll": { rpm: 4960, ipm: 54 }, "Aluminum": { rpm: 7500, ipm: 40 }, "Tool Steel": { rpm: 4584, ipm: 42 }, "Stainless": { rpm: 2750, ipm: 30 } },
      ".437": { "Cold Roll": { rpm: 4366, ipm: 56 }, "Aluminum": { rpm: 6550, ipm: 45 }, "Tool Steel": { rpm: 3930, ipm: 41 }, "Stainless": { rpm: 2400, ipm: 29 } },
      ".500": { "Cold Roll": { rpm: 3820, ipm: 50 }, "Aluminum": { rpm: 5730, ipm: 45 }, "Tool Steel": { rpm: 3438, ipm: 41 }, "Stainless": { rpm: 2100, ipm: 28 } },
      ".750": { "Cold Roll": { rpm: 2547, ipm: 55 }, "Aluminum": { rpm: 3820, ipm: 45 }, "Tool Steel": { rpm: 2292, ipm: 41 }, "Stainless": { rpm: 1400, ipm: 28 } },
    },
  },
};

const DRILL_MATERIALS = ["Aluminum", "Cold Roll", "Stainless", "Tool Steel"];

const DRILL_DATA = {
  ".125":  { "Cold Roll": { rpm: 7500, ipm: 35 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 5500, ipm: 18 }, "Stainless": { rpm: 5562, ipm: 18 } },
  ".169":  { "Cold Roll": { rpm: 7500, ipm: 35 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 4100, ipm: 16 }, "Stainless": { rpm: 4100, ipm: 16 } },
  ".203":  { "Cold Roll": { rpm: 6770, ipm: 45 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 3400, ipm: 16 }, "Stainless": { rpm: 3400, ipm: 16 } },
  ".228":  { "Cold Roll": { rpm: 6000, ipm: 40 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 3000, ipm: 15 }, "Stainless": { rpm: 3000, ipm: 15 } },
  ".250":  { "Cold Roll": { rpm: 5500, ipm: 35 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 2750, ipm: 15 }, "Stainless": { rpm: 2750, ipm: 15 } },
  ".288":  { "Cold Roll": { rpm: 4770, ipm: 35 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 2380, ipm: 15 }, "Stainless": { rpm: 2380, ipm: 15 } },
  ".3125": { "Cold Roll": { rpm: 4400, ipm: 35 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 2200, ipm: 15 }, "Stainless": { rpm: 2200, ipm: 15 } },
  ".344":  { "Cold Roll": { rpm: 4000, ipm: 35 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 2000, ipm: 15 }, "Stainless": { rpm: 2000, ipm: 15 } },
  ".375":  { "Cold Roll": { rpm: 3670, ipm: 35 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 1800, ipm: 15 }, "Stainless": { rpm: 1800, ipm: 15 } },
  ".406":  { "Cold Roll": { rpm: 3400, ipm: 30 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 1700, ipm: 15 }, "Stainless": { rpm: 1700, ipm: 15 } },
  ".422":  { "Cold Roll": { rpm: 3250, ipm: 30 }, "Aluminum": { rpm: 7500, ipm: 75 }, "Tool Steel": { rpm: 1630, ipm: 14 }, "Stainless": { rpm: 1630, ipm: 14 } },
  ".437":  { "Cold Roll": { rpm: 3150, ipm: 30 }, "Aluminum": { rpm: 7400, ipm: 75 }, "Tool Steel": { rpm: 1570, ipm: 14 }, "Stainless": { rpm: 1570, ipm: 14 } },
  ".464":  { "Cold Roll": { rpm: 3000, ipm: 25 }, "Aluminum": { rpm: 7000, ipm: 75 }, "Tool Steel": { rpm: 1500, ipm: 13 }, "Stainless": { rpm: 1500, ipm: 13 } },
  ".500":  { "Cold Roll": { rpm: 2750, ipm: 25 }, "Aluminum": { rpm: 6500, ipm: 75 }, "Tool Steel": { rpm: 1375, ipm: 13 }, "Stainless": { rpm: 1375, ipm: 13 } },
  ".531":  { "Cold Roll": { rpm: 2600, ipm: 25 }, "Aluminum": { rpm: 6100, ipm: 75 }, "Tool Steel": { rpm: 1300, ipm: 13 }, "Stainless": { rpm: 1300, ipm: 13 } },
};

const INDEXABLE_DATA = {
  "Aluminum":   { sfm: 720, cl: 0.008 },
  "Cold Roll":  { sfm: 360, cl: 0.004 },
  "Stainless":  { sfm: 130, cl: 0.002 },
  "Tool Steel": { sfm: 180, cl: 0.002 },
};

const SPADE_DATA = {
  "Aluminum":   { sfm: "590 – 790", cl: ".014 – .024" },
  "Cold Roll":  { sfm: "260 – 400", cl: ".006 – .014" },
  "Stainless":  { sfm: "145 – 240", cl: ".004 – .009" },
  "Tool Steel": { sfm: "130 – 230", cl: ".006 – .010" },
};

const TAP_MATERIALS = ["Aluminum", "Cold Roll", "Stainless", "Tool Steel"];

const FORM_TAP_INCH = [
  { tap: "4-40",    pitch: "0.0250", drill: '.1024" (2.6mm)', "Cold Roll": { rpm: 2040, ipm: 51 }, "Aluminum": { rpm: 3000, ipm: 75 }, "Tool Steel": { rpm: 1040, ipm: 26 }, "Stainless": { rpm: 1360, ipm: 34 } },
  { tap: "5-40",    pitch: "0.0250", drill: '.1181" (3mm)',   "Cold Roll": { rpm: 1840, ipm: 46 }, "Aluminum": { rpm: 2760, ipm: 69 }, "Tool Steel": { rpm:  920, ipm: 23 }, "Stainless": { rpm: 1240, ipm: 31 } },
  { tap: "6-32",    pitch: "0.0313", drill: '.1250"',         "Cold Roll": { rpm: 1664, ipm: 52 }, "Aluminum": { rpm: 2496, ipm: 78 }, "Tool Steel": { rpm:  832, ipm: 26 }, "Stainless": { rpm: 1120, ipm: 35 } },
  { tap: "8-32",    pitch: "0.0313", drill: '.1496" (3.8mm)', "Cold Roll": { rpm: 1408, ipm: 44 }, "Aluminum": { rpm: 2112, ipm: 66 }, "Tool Steel": { rpm:  704, ipm: 22 }, "Stainless": { rpm:  928, ipm: 29 } },
  { tap: "10-32",   pitch: "0.0313", drill: '.1772" (4.5mm)', "Cold Roll": { rpm: 1216, ipm: 38 }, "Aluminum": { rpm: 1824, ipm: 57 }, "Tool Steel": { rpm:  608, ipm: 19 }, "Stainless": { rpm:  800, ipm: 25 } },
  { tap: "10-24",   pitch: "0.0417", drill: '.1693" (4.3mm)', "Cold Roll": { rpm: 1200, ipm: 50 }, "Aluminum": { rpm: 1800, ipm: 75 }, "Tool Steel": { rpm:  600, ipm: 25 }, "Stainless": { rpm:  816, ipm: 34 } },
  { tap: "1/4-20",  pitch: "0.0500", drill: '.2283" (5.8mm)', "Cold Roll": { rpm:  920, ipm: 46 }, "Aluminum": { rpm: 1380, ipm: 69 }, "Tool Steel": { rpm:  460, ipm: 23 }, "Stainless": { rpm:  620, ipm: 31 } },
  { tap: "5/16-18", pitch: "0.0556", drill: '.2874" (7.3mm)', "Cold Roll": { rpm:  738, ipm: 41 }, "Aluminum": { rpm: 1098, ipm: 61 }, "Tool Steel": { rpm:  360, ipm: 20 }, "Stainless": { rpm:  486, ipm: 27 } },
  { tap: "3/8-16",  pitch: "0.0625", drill: '.3437"',         "Cold Roll": { rpm:  608, ipm: 38 }, "Aluminum": { rpm:  912, ipm: 57 }, "Tool Steel": { rpm:  304, ipm: 19 }, "Stainless": { rpm:  400, ipm: 25 } },
  { tap: "7/16-14", pitch: "0.0714", drill: '.4063"',         "Cold Roll": { rpm:  518, ipm: 37 }, "Aluminum": { rpm:  784, ipm: 56 }, "Tool Steel": { rpm:  266, ipm: 19 }, "Stainless": { rpm:  350, ipm: 25 } },
  { tap: "1/2-13",  pitch: "0.0769", drill: '.4646" (11.8mm)',"Cold Roll": { rpm:  455, ipm: 35 }, "Aluminum": { rpm:  689, ipm: 53 }, "Tool Steel": { rpm:  234, ipm: 18 }, "Stainless": { rpm:  312, ipm: 24 } },
  { tap: "1/2-20",  pitch: "0.0500", drill: '.4843" (12.3mm)',"Cold Roll": { rpm:  460, ipm: 23 }, "Aluminum": { rpm:  680, ipm: 34 }, "Tool Steel": { rpm:  220, ipm: 11 }, "Stainless": { rpm:  300, ipm: 15 } },
  { tap: "5/8-11",  pitch: "0.0909", drill: '.5787" (14.7mm)',"Cold Roll": { rpm:  363, ipm: 33 }, "Aluminum": { rpm:  550, ipm: 50 }, "Tool Steel": { rpm:  187, ipm: 17 }, "Stainless": { rpm:  242, ipm: 22 } },
];

const FORM_TAP_METRIC = [
  { tap: "M2 x .4",    pitch: "0.0157", drill: '.0729" (1.854mm)', "Cold Roll": { rpm: 2912, ipm: 45.8 }, "Aluminum": { rpm: 3000, ipm: 47.2 }, "Tool Steel": { rpm: 1456, ipm: 22.9 }, "Stainless": { rpm: 1942, ipm: 30.6 } },
  { tap: "M3 x .5",    pitch: "0.0197", drill: '.1102" (2.8mm)',   "Cold Roll": { rpm: 1941, ipm: 38.2 }, "Aluminum": { rpm: 2911, ipm: 57.3 }, "Tool Steel": { rpm:  970, ipm: 19.1 }, "Stainless": { rpm: 1294, ipm: 25.5 } },
  { tap: "M4 x .7",    pitch: "0.0276", drill: '.1457" (3.7mm)',   "Cold Roll": { rpm: 1456, ipm: 40.1 }, "Aluminum": { rpm: 2184, ipm: 60.2 }, "Tool Steel": { rpm:  728, ipm: 20.1 }, "Stainless": { rpm:  971, ipm: 26.8 } },
  { tap: "M5 x .8",    pitch: "0.0315", drill: '.1811" (4.6mm)',   "Cold Roll": { rpm: 1165, ipm: 36.7 }, "Aluminum": { rpm: 1747, ipm: 55.0 }, "Tool Steel": { rpm:  582, ipm: 18.3 }, "Stainless": { rpm:  776, ipm: 24.4 } },
  { tap: "M6 x 1",     pitch: "0.0394", drill: '.2189" (5.56mm)',  "Cold Roll": { rpm:  970, ipm: 38.2 }, "Aluminum": { rpm: 1456, ipm: 57.3 }, "Tool Steel": { rpm:  485, ipm: 19.1 }, "Stainless": { rpm:  647, ipm: 25.5 } },
  { tap: "M8 x 1.25",  pitch: "0.0492", drill: '.2913" (7.4mm)',   "Cold Roll": { rpm:  728, ipm: 35.8 }, "Aluminum": { rpm: 1092, ipm: 53.7 }, "Tool Steel": { rpm:  364, ipm: 17.9 }, "Stainless": { rpm:  485, ipm: 23.9 } },
  { tap: "M10 x 1.5",  pitch: "0.0591", drill: '.3661" (9.3mm)',   "Cold Roll": { rpm:  582, ipm: 34.4 }, "Aluminum": { rpm:  873, ipm: 51.6 }, "Tool Steel": { rpm:  291, ipm: 17.2 }, "Stainless": { rpm:  388, ipm: 22.9 } },
  { tap: "M12 x 1.75", pitch: "0.0689", drill: '.4375" (11.11mm)', "Cold Roll": { rpm:  485, ipm: 33.4 }, "Aluminum": { rpm:  728, ipm: 50.2 }, "Tool Steel": { rpm:  243, ipm: 16.7 }, "Stainless": { rpm:  323, ipm: 22.3 } },
];

// ─── ARNOLD LOGO ──────────────────────────────────────────────────────────────

const ArnoldLogo = () => (
  <svg viewBox="0 0 1040 282" xmlns="http://www.w3.org/2000/svg" style={{ height: 26, width: "auto" }}>
    <rect x="885.83" y="211.97" width="10.13" height="10.13" fill="#00ca3a"/>
    <path d="M765.07,411.73H762c-3.77.12-6.21,2.07-8.1,4l-4,4c-2.7-5.34-6.73-7.94-12.28-7.94h-1.79c-3.61,0-5.95,2.06-7.67,3.57l-5.46,5v-8.58H713v49.85h9.66V431.42L733,422c1.57-1.35,1.6-1.37,3.41-1.37h1.3c3.16,0,4.58,2.71,4.58,5.4v35.51h9.65V428.8l6-5.55,1-.93c1.5-1.5,1.66-1.65,4.38-1.65h2.38c2.85,0,4.69,2.12,4.69,5.4v35.51H780v-34.2a16.16,16.16,0,0,0-4.48-11.68A14.26,14.26,0,0,0,765.07,411.73Z" transform="translate(-125.62 -179.53)" fill="#00ca3a"/>
    <path d="M830.72,411.73H807.34V421h21.24c5.82,0,7.79,1.67,7.79,6.6v4.45H814.06c-8.7.11-15.52,6.36-15.52,14.22a15.3,15.3,0,0,0,15.65,15.29h31.59v-34.8A15.07,15.07,0,0,0,830.72,411.73Zm5.65,40.92H813.24c-2.83,0-5.4-2.81-5.4-5.88a6,6,0,0,1,5.88-6h22.65Z" transform="translate(-125.62 -179.53)" fill="#00ca3a"/>
    <path d="M897.09,411.73H882.34a15.31,15.31,0,0,0-15.65,15.65V445.7c0,9.05,6.73,15.88,15.65,15.88H908.1v-9.17H881.51a5.35,5.35,0,0,1-5.4-5.41V426.31a5.35,5.35,0,0,1,5.4-5.41h16.42c3.73,0,5.4,1.67,5.4,5.41v5.06h9.41v-4.71C912.74,417.17,907,411.73,897.09,411.73Z" transform="translate(-125.62 -179.53)" fill="#00ca3a"/>
    <path d="M965.84,411.73H957c-2.91,0-5.91,1.32-8.93,3.95l-5,4.63v-28.8h-9.41v70.07h9.41v-30l9.22-8.17c2.37-2.15,2.87-2.6,6.06-2.6h7.85a5.41,5.41,0,0,1,5.4,5.41v35.39H981V426.9C981,417.83,974.92,411.73,965.84,411.73Z" transform="translate(-125.62 -179.53)" fill="#00ca3a"/>
    <polygon points="895.72 232.2 876.31 232.2 876.31 241.13 886.3 241.13 886.3 273.35 876.31 273.35 876.31 282.05 905.95 282.05 905.95 273.35 895.72 273.35 895.72 232.2" fill="#00ca3a"/>
    <path d="M1082.28,411.73h-8.8c-2.9,0-5.9,1.32-8.93,3.95l-5,4.63v-8.58h-9.41v49.85h9.41v-30l9.22-8.17c2.37-2.15,2.87-2.6,6.06-2.6h7.85a5.41,5.41,0,0,1,5.4,5.41v35.39h9.42V426.9C1097.46,417.83,1091.36,411.73,1082.28,411.73Z" transform="translate(-125.62 -179.53)" fill="#00ca3a"/>
    <path d="M1165.61,441.72V427.38c0-9.07-6.58-15.65-15.65-15.65H1134a15.31,15.31,0,0,0-15.65,15.65v18.55A15.3,15.3,0,0,0,1134,461.58h25.28v-8.93h-26.11a5.36,5.36,0,0,1-5.41-5.41v-5.52Zm-37.83-15.29a5.36,5.36,0,0,1,5.41-5.41h17.6a5.35,5.35,0,0,1,5.4,5.41V433h-28.41Z" transform="translate(-125.62 -179.53)" fill="#00ca3a"/>
    <path d="M220.26,183.36h-29.1L125.89,360.82l-.27.73H155.2l18.43-52.17h63.19L255,361.55h31L220.39,183.72Zm-14.51,34.49c1.8,5.81,3.36,10.59,4.63,14.23l18,52.75H182.35L201,232.07C202.3,228.39,203.88,223.61,205.75,217.85Z" transform="translate(-125.62 -179.53)" fill="#1a1a1a"/>
    <path d="M581.38,314.68c-2.38-4.24-4.53-7.86-6.43-10.78l-78.9-120.29-.17-.25H467.7V361.55h27.18V230c2.56,4.33,4.8,8,6.67,10.82L580.94,361.3l.16.25h27.46V183.36H581.38Z" transform="translate(-125.62 -179.53)" fill="#1a1a1a"/>
    <path d="M715.35,179.53c-52.21,0-87.29,37.3-87.29,92.81s35.08,92.8,87.29,92.8,87.3-37.3,87.3-92.8S767.57,179.53,715.35,179.53Zm58.21,92.81c0,41.21-22.3,66.82-58.21,66.82s-58.2-25.61-58.2-66.82c0-41.37,22.3-67.07,58.2-67.07S773.56,231,773.56,272.34Z" transform="translate(-125.62 -179.53)" fill="#1a1a1a"/>
    <polygon points="728.04 3.83 699.43 3.83 699.43 182.02 817.79 182.02 817.79 155.08 728.04 155.08 728.04 3.83" fill="#1a1a1a"/>
    <path d="M1031.11,183.36H965.35V361.55h64.08c50.77,0,81.08-33.08,81.08-88.5C1110.51,216.05,1081.56,183.36,1031.11,183.36Zm50.31,89.69c0,42.07-17.24,62.52-52.71,62.52H994V209.1h36.43C1064.72,209.1,1081.42,230,1081.42,273.05Z" transform="translate(-125.62 -179.53)" fill="#1a1a1a"/>
    <path d="M354.81,268.2h-.54v25.74h.54c36.82,0,61.56,26.95,61.56,67.06v.55h25.74V361C442.11,305.49,407,268.2,354.81,268.2Z" transform="translate(-125.62 -179.53)" fill="#1a1a1a"/>
    <path d="M429.79,201.14C420,189.51,405,183.36,386.4,183.36H305.8V361.55H334l.37-152.45h48.4c20.74,0,30.85,9,30.92,27.63v32.56h28.38V235.91C442.1,222.54,437.84,210.52,429.79,201.14Z" transform="translate(-125.62 -179.53)" fill="#1a1a1a"/>
  </svg>
);

// ─── STYLES ───────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  body { background: #f2f3f5; }
  .app { min-height: 100vh; background: #f2f3f5; font-family: 'DM Sans', sans-serif; max-width: 480px; margin: 0 auto; padding-bottom: 48px; }
  .header { background: #fff; border-bottom: 1px solid #e8eaed; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 10; }
  .header-title { font-size: 20px; font-weight: 600; color: #111; letter-spacing: -0.3px; }
  .header-sub { font-size: 12px; color: #9ca3af; font-weight: 500; margin-top: 1px; }
  .nav-tabs { background: #fff; border-bottom: 1px solid #e8eaed; display: flex; padding: 0 16px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
  .nav-tabs::-webkit-scrollbar { display: none; }
  .nav-tab { flex-shrink: 0; padding: 12px 16px 10px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: #9ca3af; background: transparent; border: none; border-bottom: 2px solid transparent; cursor: pointer; transition: color 0.15s, border-color 0.15s; white-space: nowrap; }
  .nav-tab.active { color: #111; border-bottom-color: #111; }
  .section { padding: 20px 16px 0; }
  .section-label { font-size: 11px; font-weight: 600; color: #9ca3af; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 10px; }
  .tool-list { display: flex; flex-direction: column; gap: 6px; }
  .tool-btn { width: 100%; padding: 14px 16px; background: #fff; border: 1.5px solid #e8eaed; border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #111; text-align: left; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: border-color 0.15s, background 0.15s, box-shadow 0.15s; }
  .tool-btn:active { transform: scale(0.99); }
  .tool-btn.selected { border-color: #111; background: #111; color: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
  .tool-btn.unavailable { color: #c4c9d4; cursor: default; background: #fafafa; }
  .tool-btn .badge { font-size: 10px; font-weight: 600; color: #c4c9d4; letter-spacing: 0.05em; text-transform: uppercase; }
  .check { font-size: 16px; }
  .pill-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .pill { padding: 13px 8px; background: #fff; border: 1.5px solid #e8eaed; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #374151; text-align: center; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
  .pill:active { transform: scale(0.97); }
  .pill.sel-green { border-color: #16a34a; background: #f0fdf4; color: #15803d; font-weight: 600; }
  .dia-grid { display: flex; gap: 8px; flex-wrap: wrap; }
  .dia-pill { flex: 1 1 calc(25% - 7px); padding: 13px 4px; background: #fff; border: 1.5px solid #e8eaed; border-radius: 10px; font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 500; color: #374151; text-align: center; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
  .dia-pill:active { transform: scale(0.97); }
  .dia-pill.sel-blue { border-color: #2563eb; background: #eff6ff; color: #1d4ed8; font-weight: 600; }
  .result-card { margin: 20px 16px 0; background: #111; border-radius: 16px; padding: 20px; box-shadow: 0 4px 24px rgba(0,0,0,0.12); }
  .result-eyebrow { font-size: 11px; font-weight: 600; color: #6b7280; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 16px; }
  .result-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .result-stat { background: #1e1e1e; border-radius: 12px; padding: 14px 16px; text-align: center; }
  .result-stat-label { font-size: 11px; font-weight: 600; color: #6b7280; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 6px; }
  .result-stat-value { font-family: 'DM Mono', monospace; font-size: 32px; font-weight: 500; line-height: 1; }
  .result-stat-unit { font-size: 11px; color: #6b7280; margin-top: 3px; }
  .result-note { margin-top: 12px; padding: 10px 14px; background: #292929; border-radius: 8px; font-size: 12px; color: #f59e0b; display: flex; align-items: center; gap: 6px; }
  .result-context { margin-top: 12px; font-size: 12px; color: #4b5563; text-align: center; font-family: 'DM Mono', monospace; }
  .tap-tabs { display: flex; gap: 8px; }
  .tap-tab { flex: 1; padding: 10px; border-radius: 10px; border: 1.5px solid #e8eaed; background: #fff; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: #9ca3af; cursor: pointer; text-align: center; transition: all 0.15s; }
  .tap-tab.active { border-color: #111; background: #111; color: #fff; }
  .tap-size-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .tap-size-btn { padding: 13px 6px; background: #fff; border: 1.5px solid #e8eaed; border-radius: 10px; font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 500; color: #374151; text-align: center; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
  .tap-size-btn:active { transform: scale(0.97); }
  .tap-size-btn.active { border-color: #7c3aed; background: #f5f3ff; color: #6d28d9; font-weight: 600; }
  .reset-btn { display: block; width: calc(100% - 32px); margin: 14px 16px 0; padding: 14px; background: transparent; border: 1.5px solid #e8eaed; border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #9ca3af; text-align: center; cursor: pointer; transition: border-color 0.15s, color 0.15s; }
  .reset-btn:hover { border-color: #d1d5db; color: #6b7280; }
`;

// ─── VIEWS ────────────────────────────────────────────────────────────────────

function EndmillView() {
  const [toolType, setToolType] = useState("");
  const [material, setMaterial] = useState("");
  const [diameter, setDiameter] = useState("");

  const toolData  = ENDMILL_DATA[toolType] ?? null;
  const diameters = toolData ? Object.keys(toolData.diameters) : [];
  const materials = toolData ? toolData.materials : [];
  const result    = toolData && material && diameter ? toolData.diameters[diameter]?.[material] ?? null : null;

  function selectTool(key) { setToolType(key); setMaterial(""); setDiameter(""); }
  function reset() { setToolType(""); setMaterial(""); setDiameter(""); }

  const TOOLS = ["Flat End Mill — Rough", "Flat End Mill — Finish", "Shell Mill"];

  return (
    <>
      <div className="section">
        <div className="section-label">Tool Type</div>
        <div className="tool-list">
          {TOOLS.map(key => {
            const avail = !!ENDMILL_DATA[key], sel = toolType === key;
            return (
              <button key={key} disabled={!avail} onClick={() => selectTool(key)}
                className={`tool-btn${sel ? " selected" : ""}${!avail ? " unavailable" : ""}`}>
                <span>{key}</span>
                {sel && <span className="check">✓</span>}
                {!avail && <span className="badge">Soon</span>}
              </button>
            );
          })}
        </div>
      </div>

      {toolData && (
        <div className="section">
          <div className="section-label">Material</div>
          <div className="pill-grid">
            {materials.map(m => (
              <button key={m} onClick={() => { setMaterial(m); setDiameter(""); }}
                className={`pill${material === m ? " sel-green" : ""}`}>{m}</button>
            ))}
          </div>
        </div>
      )}

      {material && (
        <div className="section">
          <div className="section-label">Diameter (inches)</div>
          <div className="dia-grid">
            {diameters.map(d => (
              <button key={d} onClick={() => setDiameter(d)}
                className={`dia-pill${diameter === d ? " sel-blue" : ""}`}>{d}"</button>
            ))}
          </div>
        </div>
      )}

      {result && (
        <div className="result-card">
          <div className="result-eyebrow">Proven Parameters</div>
          <div className="result-grid">
            <div className="result-stat">
              <div className="result-stat-label">RPM</div>
              <div className="result-stat-value" style={{ color: "#60a5fa" }}>{result.rpm.toLocaleString()}</div>
              <div className="result-stat-unit">rev / min</div>
            </div>
            <div className="result-stat">
              <div className="result-stat-label">Feed</div>
              <div className="result-stat-value" style={{ color: "#34d399" }}>{result.ipm}</div>
              <div className="result-stat-unit">in / min</div>
            </div>
          </div>

          {toolData.info?.[diameter] && (
            <div style={{ marginTop: 12 }}>
              {toolData.info[diameter].map(({ loc, partNo }) => (
                <div key={partNo} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <div className="result-stat">
                    <div className="result-stat-label">Length of Cut</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 22, color: "#fbbf24", fontWeight: 500, lineHeight: 1, marginTop: 4 }}>{loc}</div>
                  </div>
                  <div className="result-stat">
                    <div className="result-stat-label">Part #</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 22, color: "#e879f9", fontWeight: 500, lineHeight: 1, marginTop: 4 }}>{partNo}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-context">{diameter}" · {material} · {toolType}</div>
        </div>
      )}

      {toolType && <button className="reset-btn" onClick={reset}>Start Over</button>}
    </>
  );
}

function DrillView() {
  const [drillType, setDrillType] = useState("solid");
  const [material,  setMaterial]  = useState("");
  const [diameter,  setDiameter]  = useState("");

  const solidResult = drillType === "solid" && material && diameter ? DRILL_DATA[diameter]?.[material] ?? null : null;
  const idxResult   = drillType === "indexable" && material ? INDEXABLE_DATA[material] : null;
  const spdResult   = drillType === "spade"     && material ? SPADE_DATA[material]     : null;

  function resetSel() { setMaterial(""); setDiameter(""); }

  const DRILL_TYPES = [
    { key: "solid",     label: "Solid Carbide" },
    { key: "indexable", label: "Indexable" },
    { key: "spade",     label: "Spade" },
  ];

  const sfmMats = Object.keys(drillType === "indexable" ? INDEXABLE_DATA : SPADE_DATA);

  return (
    <>
      <div className="section">
        <div className="section-label">Drill Type</div>
        <div className="tool-list">
          {DRILL_TYPES.map(({ key, label }) => (
            <button key={key} onClick={() => { setDrillType(key); resetSel(); }}
              className={`tool-btn${drillType === key ? " selected" : ""}`}>
              <span>{label}</span>
              {drillType === key && <span className="check">✓</span>}
            </button>
          ))}
        </div>
      </div>

      {drillType === "solid" && (
        <>
          <div className="section">
            <div className="section-label">Material</div>
            <div className="pill-grid">
              {DRILL_MATERIALS.map(m => (
                <button key={m} onClick={() => { setMaterial(m); setDiameter(""); }}
                  className={`pill${material === m ? " sel-green" : ""}`}>{m}</button>
              ))}
            </div>
          </div>
          {material && (
            <div className="section">
              <div className="section-label">Drill Diameter (inches)</div>
              <div className="dia-grid">
                {Object.keys(DRILL_DATA).map(d => (
                  <button key={d} onClick={() => setDiameter(d)}
                    className={`dia-pill${diameter === d ? " sel-blue" : ""}`}>{d}"</button>
                ))}
              </div>
            </div>
          )}
          {solidResult && (
            <div className="result-card">
              <div className="result-eyebrow">Proven Parameters</div>
              <div className="result-grid">
                <div className="result-stat">
                  <div className="result-stat-label">RPM</div>
                  <div className="result-stat-value" style={{ color: "#60a5fa" }}>{solidResult.rpm.toLocaleString()}</div>
                  <div className="result-stat-unit">rev / min</div>
                </div>
                <div className="result-stat">
                  <div className="result-stat-label">Feed</div>
                  <div className="result-stat-value" style={{ color: "#34d399" }}>{solidResult.ipm}</div>
                  <div className="result-stat-unit">in / min</div>
                </div>
              </div>
              <div className="result-context">{diameter}" · {material} · Solid Carbide Drill</div>
            </div>
          )}
        </>
      )}

      {(drillType === "indexable" || drillType === "spade") && (
        <>
          <div className="section">
            <div className="section-label">Material</div>
            <div className="pill-grid">
              {sfmMats.map(m => (
                <button key={m} onClick={() => setMaterial(m)}
                  className={`pill${material === m ? " sel-green" : ""}`}>{m}</button>
              ))}
            </div>
          </div>
          {(idxResult || spdResult) && (() => {
            const r = idxResult || spdResult;
            const isSpade = drillType === "spade";
            return (
              <div className="result-card">
                <div className="result-eyebrow">{isSpade ? "Sumitomo Spade Drill" : "Starting Parameters"}</div>
                <div className="result-grid">
                  <div className="result-stat">
                    <div className="result-stat-label">SFM</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isSpade ? 20 : 32, color: "#60a5fa", fontWeight: 500, lineHeight: 1, marginTop: 4 }}>{r.sfm}</div>
                    <div className="result-stat-unit">surface ft / min</div>
                  </div>
                  <div className="result-stat">
                    <div className="result-stat-label">Feed / Rev</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: isSpade ? 20 : 26, color: "#34d399", fontWeight: 500, lineHeight: 1, marginTop: 4 }}>{r.cl}</div>
                    <div className="result-stat-unit">in / rev</div>
                  </div>
                </div>
                <div className="result-context">{material} · {isSpade ? "Sumitomo Spade" : "Indexable"} Drill</div>
              </div>
            );
          })()}
        </>
      )}
    </>
  );
}

function TapView() {
  const [system,   setSystem]   = useState("inch");
  const [tapSize,  setTapSize]  = useState(null);
  const [material, setMaterial] = useState("Cold Roll");

  const rows     = system === "inch" ? FORM_TAP_INCH : FORM_TAP_METRIC;
  const selected = tapSize ? rows.find(r => r.tap === tapSize) : null;
  const sf       = selected ? selected[material] : null;

  function switchSystem(s) { setSystem(s); setTapSize(null); }

  return (
    <>
      <div className="section">
        <div className="section-label">Thread System</div>
        <div className="tap-tabs">
          <button className={`tap-tab${system === "inch"   ? " active" : ""}`} onClick={() => switchSystem("inch")}>Inch</button>
          <button className={`tap-tab${system === "metric" ? " active" : ""}`} onClick={() => switchSystem("metric")}>Metric</button>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Tap Size</div>
        <div className="tap-size-grid">
          {rows.map(row => (
            <button key={row.tap} onClick={() => setTapSize(row.tap)}
              className={`tap-size-btn${tapSize === row.tap ? " active" : ""}`}>
              {row.tap}
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <>
          <div className="section">
            <div className="section-label">Material</div>
            <div className="pill-grid">
              {TAP_MATERIALS.map(m => (
                <button key={m} onClick={() => setMaterial(m)}
                  className={`pill${material === m ? " sel-green" : ""}`}>{m}</button>
              ))}
            </div>
          </div>

          {sf && (
            <div className="result-card">
              <div className="result-eyebrow">Form Tap · {selected.tap} · {material}</div>
              <div className="result-grid">
                <div className="result-stat">
                  <div className="result-stat-label">RPM</div>
                  <div className="result-stat-value" style={{ color: "#60a5fa" }}>{sf.rpm.toLocaleString()}</div>
                  <div className="result-stat-unit">rev / min</div>
                </div>
                <div className="result-stat">
                  <div className="result-stat-label">Feed</div>
                  <div className="result-stat-value" style={{ color: "#34d399" }}>{sf.ipm}</div>
                  <div className="result-stat-unit">in / min</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
                <div className="result-stat">
                  <div className="result-stat-label">Form Drill</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, color: "#f9fafb", fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
                    {selected.drill}
                  </div>
                </div>
                <div className="result-stat">
                  <div className="result-stat-label">Thread Pitch</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 26, color: "#a78bfa", fontWeight: 500, lineHeight: 1, marginTop: 4 }}>
                    {selected.pitch}"
                  </div>
                  <div className="result-stat-unit">inches / rev</div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────

const TABS = [
  { key: "endmill", label: "End Mill" },
  { key: "drill",   label: "Drill" },
  { key: "tap",     label: "Form Tap" },
];

export default function App() {
  const [tab, setTab] = useState("endmill");

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <div className="header">
          <div>
            <div className="header-title">Feeds &amp; Speeds</div>
            <div className="header-sub">Shop Reference</div>
          </div>
          <ArnoldLogo />
        </div>
        <div className="nav-tabs">
          {TABS.map(t => (
            <button key={t.key} className={`nav-tab${tab === t.key ? " active" : ""}`}
              onClick={() => setTab(t.key)}>{t.label}</button>
          ))}
        </div>
        {tab === "endmill" && <EndmillView />}
        {tab === "drill"   && <DrillView />}
        {tab === "tap"     && <TapView />}
        <div style={{ height: 32 }} />
      </div>
    </>
  );
}
