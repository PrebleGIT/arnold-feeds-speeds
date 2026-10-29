/* ===================================================================
   TECHNICAL DATA — every number shown in the Technical Data app.

   HOW TO UPDATE
   - Easiest: open the app, click "Edit data", change values, then
     "Save to data file". Everyone sees it after refreshing.
   - Or edit this file in Notepad and save. Rules:
       * text goes in "quotes", numbers do not:  "rpm": 7500
       * an inch mark inside text is written \"   e.g. "0.5000\""
       * keep the commas between items; leave a cell out (or blank)
         when there is no data, and the app greys that choice out.
   - Charts: put image/PDF files in the "charts" folder and list them
     under reference > charts.
   =================================================================== */
window.TECH_DATA = {
  // App settings. maxRpm: highest spindle RPM — milling RPM is capped here and feed lowered to keep chip load.
  // finishFeedPct: end mill finishing chip load as a % of the catalog number (100 = catalog).
  // editPin: set a PIN (e.g. "1234") to ask for it before editing. Leave "" for no PIN.
  "settings": {
    "title": "Technical Data",
    "maxRpm": 12000,
    "finishFeedPct": 75,
    "editPin": "",
    "updated": "2026-10-29",
    "savedAt": 1793315537989
  },

  // MILLING — one block per tool.
  // kind "ipt" (catalog chart): sizes = diameters offered; rows = one per material and type of cut with
  //   SFM, depths of cut, and chip load per tooth under each size label. RPM and feed are calculated.
  // kind "rpm" (shop numbers): one row per diameter, each material holds {"rpm": , "ipm": }.
  "milling": [
    {
      "tool": "IMCO M924 End Mill",
      "sub": "4 flute · catalog speeds & feeds",
      "kind": "ipt",
      "sizes": [
        {"size": "1/8", "dia": 0.125, "loc": "", "partNo": ""},
        {"size": "5/32", "dia": 0.15625, "loc": "", "partNo": ""},
        {"size": "3/16", "dia": 0.1875, "loc": "", "partNo": ""},
        {"size": "7/32", "dia": 0.21875, "loc": "", "partNo": ""},
        {"size": "1/4", "dia": 0.25, "loc": "", "partNo": ""},
        {"size": "5/16", "dia": 0.3125, "loc": "", "partNo": ""},
        {"size": "3/8", "dia": 0.375, "loc": "", "partNo": ""},
        {"size": "7/16", "dia": 0.4375, "loc": "", "partNo": ""},
        {"size": "1/2", "dia": 0.5, "loc": "", "partNo": ""},
        {"size": "5/8", "dia": 0.625, "loc": "", "partNo": ""},
        {"size": "3/4", "dia": 0.75, "loc": "", "partNo": ""},
        {"size": "1", "dia": 1, "loc": "", "partNo": ""}
      ],
      "rows": [
        {"1": ".0048", "iso": "K", "material": "Cast Iron — Gray", "examples": "", "strategy": "Roughing", "cut": "Slotting", "adoc": "1 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 325, "1/8": ".0006", "5/32": ".0008", "3/16": ".0009", "7/32": ".0011", "1/4": ".0012", "5/16": ".0015", "3/8": ".0018", "7/16": ".0021", "1/2": ".0024", "5/8": ".0030", "3/4": ".0036"},
        {"1": ".0060", "iso": "K", "material": "Cast Iron — Gray", "examples": "", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".5 x D", "flutes": 4, "sfm": 400, "1/8": ".0008", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0019", "3/8": ".0023", "7/16": ".0026", "1/2": ".0030", "5/8": ".0038", "3/4": ".0045"},
        {"1": ".0066", "iso": "K", "material": "Cast Iron — Gray", "examples": "", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 475, "1/8": ".0008", "5/32": ".0010", "3/16": ".0012", "7/32": ".0014", "1/4": ".0017", "5/16": ".0021", "3/8": ".0025", "7/16": ".0029", "1/2": ".0033", "5/8": ".0041", "3/4": ".0050"},
        {"1": ".0044", "iso": "K", "material": "Cast Iron — Ductile", "examples": "", "strategy": "Roughing", "cut": "Slotting", "adoc": "1 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 300, "1/8": ".0006", "5/32": ".0007", "3/16": ".0008", "7/32": ".0010", "1/4": ".0011", "5/16": ".0014", "3/8": ".0017", "7/16": ".0019", "1/2": ".0022", "5/8": ".0028", "3/4": ".0033"},
        {"1": ".0054", "iso": "K", "material": "Cast Iron — Ductile", "examples": "", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".5 x D", "flutes": 4, "sfm": 375, "1/8": ".0007", "5/32": ".0008", "3/16": ".0010", "7/32": ".0012", "1/4": ".0014", "5/16": ".0017", "3/8": ".0020", "7/16": ".0024", "1/2": ".0027", "5/8": ".0034", "3/4": ".0041"},
        {"1": ".0060", "iso": "K", "material": "Cast Iron — Ductile", "examples": "", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 450, "1/8": ".0008", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0019", "3/8": ".0023", "7/16": ".0026", "1/2": ".0030", "5/8": ".0038", "3/4": ".0045"},
        {"1": ".0044", "iso": "K", "material": "Cast Iron — Malleable", "examples": "", "strategy": "Roughing", "cut": "Slotting", "adoc": ".75 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 250, "1/8": ".0006", "5/32": ".0007", "3/16": ".0008", "7/32": ".0010", "1/4": ".0011", "5/16": ".0014", "3/8": ".0017", "7/16": ".0019", "1/2": ".0022", "5/8": ".0028", "3/4": ".0033"},
        {"1": ".0054", "iso": "K", "material": "Cast Iron — Malleable", "examples": "", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".5 x D", "flutes": 4, "sfm": 325, "1/8": ".0007", "5/32": ".0008", "3/16": ".0010", "7/32": ".0012", "1/4": ".0014", "5/16": ".0017", "3/8": ".0020", "7/16": ".0024", "1/2": ".0027", "5/8": ".0034", "3/4": ".0041"},
        {"1": ".0060", "iso": "K", "material": "Cast Iron — Malleable", "examples": "", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 400, "1/8": ".0008", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0019", "3/8": ".0023", "7/16": ".0026", "1/2": ".0030", "5/8": ".0038", "3/4": ".0045"},
        {"1": ".0052", "iso": "P", "material": "Low Carbon Steels", "examples": "1018, 12L14, 8620", "strategy": "Roughing", "cut": "Slotting", "adoc": "1 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 350, "1/8": ".0007", "5/32": ".0008", "3/16": ".0010", "7/32": ".0011", "1/4": ".0013", "5/16": ".0016", "3/8": ".0020", "7/16": ".0023", "1/2": ".0026", "5/8": ".0033", "3/4": ".0039"},
        {"1": ".0064", "iso": "P", "material": "Low Carbon Steels", "examples": "1018, 12L14, 8620", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".5 x D", "flutes": 4, "sfm": 425, "1/8": ".0008", "5/32": ".0010", "3/16": ".0012", "7/32": ".0014", "1/4": ".0016", "5/16": ".0020", "3/8": ".0024", "7/16": ".0028", "1/2": ".0032", "5/8": ".0040", "3/4": ".0048"},
        {"1": ".0072", "iso": "P", "material": "Low Carbon Steels", "examples": "1018, 12L14, 8620", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 500, "1/8": ".0009", "5/32": ".0011", "3/16": ".0014", "7/32": ".0016", "1/4": ".0018", "5/16": ".0023", "3/8": ".0027", "7/16": ".0032", "1/2": ".0036", "5/8": ".0045", "3/4": ".0054"},
        {"1": ".0048", "iso": "P", "material": "Medium Carbon Steels", "examples": "4140, 4340", "strategy": "Roughing", "cut": "Slotting", "adoc": "1 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 300, "1/8": ".0006", "5/32": ".0008", "3/16": ".0009", "7/32": ".0011", "1/4": ".0012", "5/16": ".0015", "3/8": ".0018", "7/16": ".0021", "1/2": ".0024", "5/8": ".0030", "3/4": ".0036"},
        {"1": ".0060", "iso": "P", "material": "Medium Carbon Steels", "examples": "4140, 4340", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".5 x D", "flutes": 4, "sfm": 375, "1/8": ".0008", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0019", "3/8": ".0023", "7/16": ".0026", "1/2": ".0030", "5/8": ".0038", "3/4": ".0045"},
        {"1": ".0066", "iso": "P", "material": "Medium Carbon Steels", "examples": "4140, 4340", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 450, "1/8": ".0008", "5/32": ".0010", "3/16": ".0012", "7/32": ".0014", "1/4": ".0017", "5/16": ".0021", "3/8": ".0025", "7/16": ".0029", "1/2": ".0033", "5/8": ".0041", "3/4": ".0050"},
        {"1": ".0048", "iso": "P", "material": "Tool & Die Steels <48 Rc", "examples": "A2, D2, H13, P20", "strategy": "Roughing", "cut": "Slotting", "adoc": ".75 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 300, "1/8": ".0006", "5/32": ".0008", "3/16": ".0009", "7/32": ".0011", "1/4": ".0012", "5/16": ".0015", "3/8": ".0018", "7/16": ".0021", "1/2": ".0024", "5/8": ".0030", "3/4": ".0036"},
        {"1": ".0058", "iso": "P", "material": "Tool & Die Steels <48 Rc", "examples": "A2, D2, H13, P20", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".3 x D", "flutes": 4, "sfm": 375, "1/8": ".0007", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0018", "3/8": ".0022", "7/16": ".0025", "1/2": ".0029", "5/8": ".0036", "3/4": ".0044"},
        {"1": ".0060", "iso": "P", "material": "Tool & Die Steels <48 Rc", "examples": "A2, D2, H13, P20", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 450, "1/8": ".0008", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0019", "3/8": ".0023", "7/16": ".0026", "1/2": ".0030", "5/8": ".0038", "3/4": ".0045"},
        {"1": ".0048", "iso": "M", "material": "Martensitic Stainless Steels", "examples": "416, 410, 440C", "strategy": "Roughing", "cut": "Slotting", "adoc": ".75 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 300, "1/8": ".0006", "5/32": ".0008", "3/16": ".0009", "7/32": ".0011", "1/4": ".0012", "5/16": ".0015", "3/8": ".0018", "7/16": ".0021", "1/2": ".0024", "5/8": ".0030", "3/4": ".0036"},
        {"1": ".0058", "iso": "M", "material": "Martensitic Stainless Steels", "examples": "416, 410, 440C", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".3 x D", "flutes": 4, "sfm": 375, "1/8": ".0007", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0018", "3/8": ".0022", "7/16": ".0025", "1/2": ".0029", "5/8": ".0036", "3/4": ".0044"},
        {"1": ".0060", "iso": "M", "material": "Martensitic Stainless Steels", "examples": "416, 410, 440C", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 450, "1/8": ".0008", "5/32": ".0009", "3/16": ".0011", "7/32": ".0013", "1/4": ".0015", "5/16": ".0019", "3/8": ".0023", "7/16": ".0026", "1/2": ".0030", "5/8": ".0038", "3/4": ".0045"},
        {"1": ".0052", "iso": "M", "material": "Austenitic Stainless Steels", "examples": "303, 304, 316", "strategy": "Roughing", "cut": "Slotting", "adoc": ".75 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 275, "1/8": ".0007", "5/32": ".0008", "3/16": ".0010", "7/32": ".0011", "1/4": ".0013", "5/16": ".0016", "3/8": ".0020", "7/16": ".0023", "1/2": ".0026", "5/8": ".0033", "3/4": ".0039"},
        {"1": ".0064", "iso": "M", "material": "Austenitic Stainless Steels", "examples": "303, 304, 316", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".3 x D", "flutes": 4, "sfm": 325, "1/8": ".0008", "5/32": ".0010", "3/16": ".0012", "7/32": ".0014", "1/4": ".0016", "5/16": ".0020", "3/8": ".0024", "7/16": ".0028", "1/2": ".0032", "5/8": ".0040", "3/4": ".0048"},
        {"1": ".0066", "iso": "M", "material": "Austenitic Stainless Steels", "examples": "303, 304, 316", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 400, "1/8": ".0008", "5/32": ".0010", "3/16": ".0012", "7/32": ".0014", "1/4": ".0017", "5/16": ".0021", "3/8": ".0025", "7/16": ".0029", "1/2": ".0033", "5/8": ".0041", "3/4": ".0050"},
        {"1": ".0040", "iso": "M", "material": "Precipitation Hardening Stainless Steels", "examples": "17-4, 15-5, 13-8", "strategy": "Roughing", "cut": "Slotting", "adoc": ".5 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 250, "1/8": ".0005", "5/32": ".0006", "3/16": ".0008", "7/32": ".0009", "1/4": ".0010", "5/16": ".0013", "3/8": ".0015", "7/16": ".0018", "1/2": ".0020", "5/8": ".0025", "3/4": ".0030"},
        {"1": ".0050", "iso": "M", "material": "Precipitation Hardening Stainless Steels", "examples": "17-4, 15-5, 13-8", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".3 x D", "flutes": 4, "sfm": 300, "1/8": ".0006", "5/32": ".0008", "3/16": ".0009", "7/32": ".0011", "1/4": ".0013", "5/16": ".0016", "3/8": ".0019", "7/16": ".0022", "1/2": ".0025", "5/8": ".0031", "3/4": ".0038"},
        {"1": ".0052", "iso": "M", "material": "Precipitation Hardening Stainless Steels", "examples": "17-4, 15-5, 13-8", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 375, "1/8": ".0007", "5/32": ".0008", "3/16": ".0010", "7/32": ".0011", "1/4": ".0013", "5/16": ".0016", "3/8": ".0020", "7/16": ".0023", "1/2": ".0026", "5/8": ".0033", "3/4": ".0039"},
        {"1": ".0040", "iso": "S", "material": "Titanium Alloys", "examples": "6AL-4V", "strategy": "Roughing", "cut": "Slotting", "adoc": ".5 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 250, "1/8": ".0005", "5/32": ".0006", "3/16": ".0008", "7/32": ".0009", "1/4": ".0010", "5/16": ".0013", "3/8": ".0015", "7/16": ".0018", "1/2": ".0020", "5/8": ".0025", "3/4": ".0030"},
        {"1": ".0050", "iso": "S", "material": "Titanium Alloys", "examples": "6AL-4V", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".3 x D", "flutes": 4, "sfm": 300, "1/8": ".0006", "5/32": ".0008", "3/16": ".0009", "7/32": ".0011", "1/4": ".0013", "5/16": ".0016", "3/8": ".0019", "7/16": ".0022", "1/2": ".0025", "5/8": ".0031", "3/4": ".0038"},
        {"1": ".0052", "iso": "S", "material": "Titanium Alloys", "examples": "6AL-4V", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".015 x D", "flutes": 4, "sfm": 375, "1/8": ".0007", "5/32": ".0008", "3/16": ".0010", "7/32": ".0011", "1/4": ".0013", "5/16": ".0016", "3/8": ".0020", "7/16": ".0023", "1/2": ".0026", "5/8": ".0033", "3/4": ".0039"},
        {"1": ".0042", "iso": "S", "material": "High Temperature Alloys", "examples": "Inconel, Haynes, Stellite, Hastalloy", "strategy": "Roughing", "cut": "Slotting", "adoc": ".25 x D", "rdoc": "1 x D", "flutes": 4, "sfm": 60, "1/8": ".0005", "5/32": ".0007", "3/16": ".0008", "7/32": ".0009", "1/4": ".0011", "5/16": ".0013", "3/8": ".0016", "7/16": ".0018", "1/2": ".0021", "5/8": ".0026", "3/4": ".0032"},
        {"1": ".0054", "iso": "S", "material": "High Temperature Alloys", "examples": "Inconel, Haynes, Stellite, Hastalloy", "strategy": "Roughing", "cut": "Peripheral", "adoc": "1.25 x D", "rdoc": ".25 x D", "flutes": 4, "sfm": 90, "1/8": ".0007", "5/32": ".0008", "3/16": ".0010", "7/32": ".0012", "1/4": ".0014", "5/16": ".0017", "3/8": ".0020", "7/16": ".0024", "1/2": ".0027", "5/8": ".0034", "3/4": ".0041"},
        {"1": ".0062", "iso": "S", "material": "High Temperature Alloys", "examples": "Inconel, Haynes, Stellite, Hastalloy", "strategy": "Finishing", "cut": "Finish", "adoc": "1.5 x D", "rdoc": ".01 x D", "flutes": 4, "sfm": 125, "1/8": ".0008", "5/32": ".0010", "3/16": ".0012", "7/32": ".0014", "1/4": ".0016", "5/16": ".0019", "3/8": ".0023", "7/16": ".0027", "1/2": ".0031", "5/8": ".0039", "3/4": ".0047"}
      ]
    },
    {
      "tool": "Haas ADKT 1706 Indexable Mill",
      "sub": "PESR-MM / ML inserts · 3/4\" – 2\"",
      "kind": "range",
      "note": "Haas Tooling ADKT 1706 chart. Start in the middle of the SFM and feed ranges and adjust for your setup.",
      "cuts": [
        {"cut": "Face / Shoulder", "sub": "Facing · Shouldering", "apMax": 0.649, "note": "Surface and shoulder milling can be pushed up to 1150 SFM and .016 IPT depending on the setup."},
        {"cut": "Slot / Ramp / Helical", "sub": "Slotting · Ramping · Helical", "apMax": 0.649, "note": "In deep grooving, keep axial DOC under .197\" and use coolant + air."}
      ],
      "sizes": [
        {"size": "3/4", "dia": 0.75, "flutes": "", "partNo": ""},
        {"size": "1", "dia": 1, "flutes": "", "partNo": ""},
        {"size": "1-1/4", "dia": 1.25, "flutes": "", "partNo": ""},
        {"size": "2", "dia": 2, "flutes": 5, "partNo": ""}
      ],
      "rows": [
        {"iso": "P", "material": "Steels", "grade": "HU30", "isoRange": "P30-P40", "sfm": "492-787", "Face / Shoulder": "0.002-0.012", "Slot / Ramp / Helical": "0.002-0.012"},
        {"iso": "P", "material": "Steels", "grade": "HP25", "isoRange": "P25-P35", "sfm": "426-688", "Face / Shoulder": "0.002-0.012", "Slot / Ramp / Helical": "0.002-0.012"},
        {"iso": "P", "material": "Steels", "grade": "MKP30", "isoRange": "P30-P40", "sfm": "820-1148", "Face / Shoulder": "0.002-0.012", "Slot / Ramp / Helical": "0.002-0.012"},
        {"iso": "M", "material": "Stainless Steels", "grade": "HU30", "isoRange": "M20-M30", "sfm": "295-492", "Face / Shoulder": "0.002-0.010", "Slot / Ramp / Helical": "0.002-0.006"},
        {"iso": "K", "material": "Cast Iron", "grade": "HU30", "isoRange": "K20-K30", "sfm": "393-820", "Face / Shoulder": "0.003-0.014", "Slot / Ramp / Helical": "0.003-0.008"},
        {"iso": "K", "material": "Cast Iron", "grade": "MKP30", "isoRange": "K20-K30", "sfm": "656-984", "Face / Shoulder": "0.003-0.014", "Slot / Ramp / Helical": "0.003-0.008"}
      ]
    }
  ],

  // DRILLING — one block per drill type.
  // kind "rpm": rows by diameter with RPM / IPM per material (like milling).
  // kind "range": catalog chart — sizes = insert sizes with min/max drill dia; rows = one per material condition
  //   with an SFM range and a feed range (in/rev) under each size.
  // kind "sfm": one row per material with SFM / IPR (ranges optional).
  "drilling": [
    {
      "type": "HSS Drills — RedLine",
      "sub": "High speed steel · up to 1-1/2\"+",
      "kind": "range",
      "heading": "RedLine HSS drill",
      "variantLabel": "Drill",
      "sizeLabel": "Drill diameter",
      "note": "RedLine Tools HSS chart. Speeds and feeds are estimates — start in the middle of the range and adjust for the job.",
      "sizes": [
        {"size": "≤ 1/8", "min": 0, "max": 0.187},
        {"size": "1/4", "min": 0.188, "max": 0.312},
        {"size": "3/8", "min": 0.313, "max": 0.437},
        {"size": "1/2", "min": 0.438, "max": 0.625},
        {"size": "3/4", "min": 0.626, "max": 0.875},
        {"size": "1", "min": 0.876, "max": 1.25},
        {"size": "1-1/2+", "min": 1.251, "max": 3}
      ],
      "rows": [
        {"1": ".0070-.0080", "iso": "P", "material": "Steels", "condition": "High Strength Tool Steel", "grades": "A2, D2, P20, H11, H13, S2, O1", "length": "HSS", "sfm": "30-65", "note": "", "≤ 1/8": ".0007-.0020", "1/4": ".0030-.0040", "3/8": ".0040-.0065", "1/2": ".0060-.0070", "3/4": ".0065-.0075", "1-1/2+": ".0075-.0085"},
        {"1": ".0120-.0130", "iso": "P", "material": "Steels", "condition": "Low Carbon", "grades": "A36, 12L14, 12L15, 1005, 1018, 1020, 1108-1119, 1213-1215, 1513-1518, 4012, 5015, 9310", "length": "HSS", "sfm": "95", "note": "", "≤ 1/8": ".0009-.0050", "1/4": ".0060-.0070", "3/8": ".0090-.0100", "1/2": ".0100-.0110", "3/4": ".0110-.0120", "1-1/2+": ".0130-.0140"},
        {"1": ".0120-.0140", "iso": "P", "material": "Steels", "condition": "Medium Carbon", "grades": "1040-1095, 1140-1151, 1330-1345, 1520-1572, 4023-4063, 4120-4161, 4330-4340, 4620-4640, 8620-8660, 8740-8750, 6150, 51000, 52100", "length": "HSS", "sfm": "115", "note": "", "≤ 1/8": ".0009-.0050", "1/4": ".0060-.0070", "3/8": ".0090-.0120", "1/2": ".0110-.0120", "3/4": ".0110-.0130", "1-1/2+": ".0130-.0150"},
        {"1": ".0100-.0110", "iso": "M", "material": "Stainless Steels", "condition": "Austenitic", "grades": "301-304L, 310, 316L, 321, 347", "length": "HSS", "sfm": "26", "note": "", "≤ 1/8": ".0010-.0030", "1/4": ".0035-.0050", "3/8": ".0050-.0075", "1/2": ".0080-.0090", "3/4": ".0090-.0100", "1-1/2+": ".0110-.0120"},
        {"1": ".0070-.0080", "iso": "M", "material": "Stainless Steels", "condition": "Martensitic", "grades": "403, 410, 416, 420, 430, 431, 440", "length": "HSS", "sfm": "50", "note": "", "≤ 1/8": ".0010-.0024", "1/4": ".0025-.0037", "3/8": ".0040-.0055", "1/2": ".0050-.0060", "3/4": ".0060-.0070", "1-1/2+": ".0080-.0090"},
        {"1": ".0070-.0080", "iso": "M", "material": "Stainless Steels", "condition": "Precipitation Hardening", "grades": "12/8, 15/5, 17/4, AM-350/355/363, PH13-8MO, PH14-8/MO", "length": "HSS", "sfm": "20", "note": "", "≤ 1/8": ".0020-.0030", "1/4": ".0030-.0040", "3/8": ".0040-.0050", "1/2": ".0050-.0060", "3/4": ".0060-.0070", "1-1/2+": ".0080-.0090"},
        {"1": ".0070-.0080", "iso": "K", "material": "Cast Irons", "condition": "Ductile", "grades": "A536, J434, 60-40-18", "length": "HSS", "sfm": "45", "note": "", "≤ 1/8": ".0007-.0025", "1/4": ".0025-.0035", "3/8": ".0040-.0060", "1/2": ".0060-.0070", "3/4": ".0065-.0075", "1-1/2+": ".0075-.0085"},
        {"1": ".0090-.0130", "iso": "K", "material": "Cast Irons", "condition": "Gray", "grades": "A48, A436, A319, Class 20, G4000", "length": "HSS", "sfm": "80-100", "note": "", "≤ 1/8": ".0006-.0030", "1/4": ".0030-.0060", "3/8": ".0040-.0090", "1/2": ".0070-.0100", "3/4": ".0080-.0120", "1-1/2+": ".0100-.0140"},
        {"1": ".0090-.0130", "iso": "K", "material": "Cast Irons", "condition": "Malleable", "grades": "A220, A602, J158", "length": "HSS", "sfm": "80-100", "note": "", "≤ 1/8": ".0006-.0030", "1/4": ".0030-.0060", "3/8": ".0040-.0090", "1/2": ".0070-.0100", "3/4": ".0080-.0120", "1-1/2+": ".0100-.0140"},
        {"1": ".0120-.0140", "iso": "N", "material": "Non-Ferrous", "condition": "Aluminum Alloys", "grades": "2014, 2024, 6061, 7075", "length": "HSS", "sfm": "300", "note": "", "≤ 1/8": ".0007-.0050", "1/4": ".0040-.0080", "3/8": ".0060-.0110", "1/2": ".0080-.0120", "3/4": ".0090-.0130", "1-1/2+": ".0130-.0150"},
        {"1": ".0120-.0140", "iso": "N", "material": "Non-Ferrous", "condition": "High Silicon Aluminum", "grades": "A380, A390", "length": "HSS", "sfm": "60-80", "note": "", "≤ 1/8": ".0007-.0050", "1/4": ".0040-.0080", "3/8": ".0060-.0110", "1/2": ".0080-.0120", "3/4": ".0090-.0130", "1-1/2+": ".0130-.0150"},
        {"1": ".0090-.0110", "iso": "N", "material": "Non-Ferrous", "condition": "Brass / Bronze", "grades": "Aluminum Bronze, Low Silicon Bronze", "length": "HSS", "sfm": "90-115", "note": "", "≤ 1/8": ".0008-.0040", "1/4": ".0035-.0070", "3/8": ".0050-.0075", "1/2": ".0075-.0090", "3/4": ".0080-.0100", "1-1/2+": ".0100-.0120"},
        {"1": ".0070-.0090", "iso": "N", "material": "Non-Ferrous", "condition": "Composites", "grades": "G-10, Fiberglass, Graphite, Graphite Epoxy, Plastics", "length": "HSS", "sfm": "100-125", "note": "", "≤ 1/8": ".0040-.0060", "1/4": ".0030-.0050", "3/8": ".0040-.0060", "1/2": ".0050-.0070", "3/4": ".0060-.0080", "1-1/2+": ".0080-.0100"},
        {"1": ".0110-.0130", "iso": "N", "material": "Non-Ferrous", "condition": "Copper", "grades": "", "length": "HSS", "sfm": "108", "note": "", "≤ 1/8": ".0010-.0035", "1/4": ".0038-.0065", "3/8": ".0070-.0090", "1/2": ".0080-.0110", "3/4": ".0100-.0120", "1-1/2+": ".0110-.0130"},
        {"1": ".0110-.0130", "iso": "N", "material": "Non-Ferrous", "condition": "Magnesium", "grades": "", "length": "HSS", "sfm": "90-115", "note": "", "≤ 1/8": ".0008-.0040", "1/4": ".0035-.0070", "3/8": ".0050-.0075", "1/2": ".0075-.0090", "3/4": ".0100-.0120", "1-1/2+": ".0110-.0130"},
        {"1": ".0035-.0045", "iso": "S", "material": "High Temp Alloys", "condition": "Nickel Base", "grades": "Inconel 625/718, Inco 700, 713C, 718, Monel 400-401, 404, K401, Rene, Rene 41 & 95 Hastelloy, Waspoloy, Udimet 500 & 700", "length": "HSS", "sfm": "10-20", "note": "", "≤ 1/8": ".0004-.0013", "1/4": ".0013-.0020", "3/8": ".0020-.0030", "1/2": ".0030-.0035", "3/4": ".0030-.0040", "1-1/2+": ".0040-.0050"},
        {"1": ".0050-.0070", "iso": "S", "material": "High Temp Alloys", "condition": "Titanium", "grades": "Commercially Pure, 6Al-4V, ASTM 1/2/3, 6Al-25N-4Zr-2Mo-Si, Ti-8Al-1Mo, Ti-8Al-4Mo", "length": "HSS", "sfm": "20-75", "note": "", "≤ 1/8": ".0006-.0025", "1/4": ".0020-.0040", "3/8": ".0030-.0055", "1/2": ".0040-.0060", "3/4": ".0045-.0065", "1-1/2+": ".0060-.0065"}
      ]
    },
    {
      "type": "Flat Bottom & Spade — Ingersoll QuadTwist",
      "sub": "SOMT inserts · .472\" – 2.000\" · 2xD – 5xD",
      "kind": "range",
      "heading": "Ingersoll QuadTwist",
      "note": "Ingersoll QuadTwist -SK / -NG / -HP chipbreakers. Start in the middle of the range and adjust.",
      "sizes": [
        {"size": "SOMT 04", "min": 0.472, "max": 0.531},
        {"size": "SOMT 05", "min": 0.551, "max": 0.645},
        {"size": "SOMT 06", "min": 0.649, "max": 0.763},
        {"size": "SOMT 07", "min": 0.767, "max": 0.882},
        {"size": "SOMT 08", "min": 0.886, "max": 1.039},
        {"size": "SOMT 09", "min": 1.063, "max": 1.22},
        {"size": "SOMT 11", "min": 1.25, "max": 1.46},
        {"size": "SOMT 13", "min": 1.437, "max": 1.687},
        {"size": "SOMT 15", "min": 1.719, "max": 2}
      ],
      "rows": [
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Annealed, <0.25% C", "matNo": 1, "rm": "420", "hardness": "125 HB", "sfm": "700-1200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.003", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".002-.004", "SOMT 08": ".002-.004", "SOMT 09": ".003-.004", "SOMT 11": ".003-.005", "SOMT 13": ".003-.005", "SOMT 15": ".003-.005"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Annealed, <0.25% C", "matNo": 1, "rm": "420", "hardness": "125 HB", "sfm": "700-1200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.003", "SOMT 05": ".0015-.002", "SOMT 06": ".0015-.002", "SOMT 07": ".0015-.002", "SOMT 08": ".0015-.002", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.004", "SOMT 15": ".0025-.004"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Annealed, ≥0.25% C", "matNo": 2, "rm": "650", "hardness": "190 HB", "sfm": "600-950", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.004", "SOMT 05": ".003-.004", "SOMT 06": ".003-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.006", "SOMT 11": ".003-.006", "SOMT 13": ".003-.0065", "SOMT 15": ".003-.0065"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Annealed, ≥0.25% C", "matNo": 2, "rm": "650", "hardness": "190 HB", "sfm": "600-950", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.004", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".002-.004", "SOMT 08": ".002-.004", "SOMT 09": ".003-.005", "SOMT 11": ".003-.005", "SOMT 13": ".003-.0055", "SOMT 15": ".003-.0055"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Quenched & tempered, <0.55% C", "matNo": 3, "rm": "850", "hardness": "250 HB", "sfm": "450-800", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.005", "SOMT 05": ".003-.005", "SOMT 06": ".003-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".004-.006", "SOMT 11": ".004-.006", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Quenched & tempered, <0.55% C", "matNo": 3, "rm": "850", "hardness": "250 HB", "sfm": "450-800", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.007", "SOMT 11": ".003-.006", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Annealed, ≥0.55% C", "matNo": 4, "rm": "750", "hardness": "220 HB", "sfm": "450-800", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.005", "SOMT 05": ".003-.005", "SOMT 06": ".003-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Annealed, ≥0.55% C", "matNo": 4, "rm": "750", "hardness": "220 HB", "sfm": "450-800", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.007", "SOMT 11": ".003-.006", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Quenched & tempered, ≥0.55% C", "matNo": 5, "rm": "1000", "hardness": "300 HB", "sfm": "450-800", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.005", "SOMT 05": ".003-.005", "SOMT 06": ".003-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "P", "material": "Non-alloy & free cutting steel", "condition": "Quenched & tempered, ≥0.55% C", "matNo": 5, "rm": "1000", "hardness": "300 HB", "sfm": "450-800", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.007", "SOMT 11": ".003-.006", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Annealed", "matNo": 6, "rm": "600", "hardness": "200 HB", "sfm": "450-800", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.006", "SOMT 05": ".003-.006", "SOMT 06": ".003-.006", "SOMT 07": ".003-.007", "SOMT 08": ".003-.007", "SOMT 09": ".004-.007", "SOMT 11": ".004-.009", "SOMT 13": ".004-.009", "SOMT 15": ".004-.0095"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Annealed", "matNo": 6, "rm": "600", "hardness": "200 HB", "sfm": "450-800", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.006", "SOMT 05": ".002-.005", "SOMT 06": ".002-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.007", "SOMT 11": ".003-.008", "SOMT 13": ".003-.008", "SOMT 15": ".004-.0085"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Quenched & tempered (275 HB)", "matNo": 7, "rm": "930", "hardness": "275 HB", "sfm": "325-600", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.006", "SOMT 05": ".003-.006", "SOMT 06": ".003-.006", "SOMT 07": ".003-.008", "SOMT 08": ".003-.008", "SOMT 09": ".004-.008", "SOMT 11": ".004-.0085", "SOMT 13": ".004-.0085", "SOMT 15": ".004-.0085"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Quenched & tempered (275 HB)", "matNo": 7, "rm": "930", "hardness": "275 HB", "sfm": "325-600", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.006", "SOMT 05": ".002-.005", "SOMT 06": ".002-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.007", "SOMT 11": ".003-.008", "SOMT 13": ".003-.008", "SOMT 15": ".004-.0085"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Quenched & tempered (300 HB)", "matNo": 8, "rm": "1000", "hardness": "300 HB", "sfm": "325-600", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.006", "SOMT 05": ".003-.006", "SOMT 06": ".003-.006", "SOMT 07": ".003-.008", "SOMT 08": ".003-.008", "SOMT 09": ".004-.008", "SOMT 11": ".004-.0085", "SOMT 13": ".004-.0085", "SOMT 15": ".004-.0085"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Quenched & tempered (300 HB)", "matNo": 8, "rm": "1000", "hardness": "300 HB", "sfm": "325-600", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.006", "SOMT 05": ".002-.005", "SOMT 06": ".002-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.007", "SOMT 11": ".003-.008", "SOMT 13": ".003-.008", "SOMT 15": ".004-.0085"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Quenched & tempered (350 HB)", "matNo": 9, "rm": "1200", "hardness": "350 HB", "sfm": "325-600", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.006", "SOMT 05": ".003-.006", "SOMT 06": ".003-.006", "SOMT 07": ".003-.008", "SOMT 08": ".003-.008", "SOMT 09": ".004-.008", "SOMT 11": ".004-.0085", "SOMT 13": ".004-.0085", "SOMT 15": ".004-.0085"},
        {"iso": "P", "material": "Low alloy steel & cast steel (<5% alloying)", "condition": "Quenched & tempered (350 HB)", "matNo": 9, "rm": "1200", "hardness": "350 HB", "sfm": "325-600", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.006", "SOMT 05": ".002-.005", "SOMT 06": ".002-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.007", "SOMT 11": ".003-.008", "SOMT 13": ".003-.008", "SOMT 15": ".004-.0085"},
        {"iso": "P", "material": "High alloy steel, cast steel & tool steel", "condition": "Annealed", "matNo": 10, "rm": "680", "hardness": "200 HB", "sfm": "450-675", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.005", "SOMT 05": ".002-.005", "SOMT 06": ".0025-.005", "SOMT 07": ".0025-.005", "SOMT 08": ".003-.006", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "P", "material": "High alloy steel, cast steel & tool steel", "condition": "Annealed", "matNo": 10, "rm": "680", "hardness": "200 HB", "sfm": "450-675", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.006", "SOMT 11": ".003-.007", "SOMT 13": ".003-.007", "SOMT 15": ".004-.008"},
        {"iso": "P", "material": "High alloy steel, cast steel & tool steel", "condition": "Quenched & tempered", "matNo": 11, "rm": "1100", "hardness": "325 HB", "sfm": "325-525", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.005", "SOMT 05": ".0025-.005", "SOMT 06": ".0025-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".0035-.007", "SOMT 11": ".0035-.008", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "P", "material": "High alloy steel, cast steel & tool steel", "condition": "Quenched & tempered", "matNo": 11, "rm": "1100", "hardness": "325 HB", "sfm": "325-525", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.006", "SOMT 11": ".003-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.008"},
        {"iso": "M", "material": "Stainless steel & cast stainless", "condition": "Ferritic / martensitic", "matNo": 12, "rm": "680", "hardness": "200 HB", "sfm": "500-800", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.005", "SOMT 05": ".0025-.005", "SOMT 06": ".0025-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.007", "SOMT 11": ".0035-.008", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "M", "material": "Stainless steel & cast stainless", "condition": "Ferritic / martensitic", "matNo": 12, "rm": "680", "hardness": "200 HB", "sfm": "500-800", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.006", "SOMT 11": ".003-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.008"},
        {"iso": "M", "material": "Stainless steel & cast stainless", "condition": "Martensitic", "matNo": 13, "rm": "820", "hardness": "240 HB", "sfm": "500-800", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.005", "SOMT 05": ".0025-.005", "SOMT 06": ".0025-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.007", "SOMT 11": ".0035-.008", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "M", "material": "Stainless steel & cast stainless", "condition": "Martensitic", "matNo": 13, "rm": "820", "hardness": "240 HB", "sfm": "500-800", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.006", "SOMT 11": ".003-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.008"},
        {"iso": "M", "material": "Stainless steel & cast stainless", "condition": "Austenitic", "matNo": 14, "rm": "600", "hardness": "180 HB", "sfm": "500-800", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.005", "SOMT 05": ".0025-.005", "SOMT 06": ".0025-.005", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.007", "SOMT 11": ".0035-.008", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "M", "material": "Stainless steel & cast stainless", "condition": "Austenitic", "matNo": 14, "rm": "600", "hardness": "180 HB", "sfm": "500-800", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.005", "SOMT 05": ".002-.004", "SOMT 06": ".002-.004", "SOMT 07": ".003-.005", "SOMT 08": ".003-.005", "SOMT 09": ".003-.006", "SOMT 11": ".003-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.008"},
        {"iso": "K", "material": "Grey cast iron (GG)", "condition": "Ferritic", "matNo": 15, "rm": "", "hardness": "160 HB", "sfm": "525-850", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.007", "SOMT 05": ".003-.007", "SOMT 06": ".003-.007", "SOMT 07": ".004-.008", "SOMT 08": ".004-.008", "SOMT 09": ".004-.008", "SOMT 11": ".004-.008", "SOMT 13": ".004-.0085", "SOMT 15": ".004-.0085"},
        {"iso": "K", "material": "Grey cast iron (GG)", "condition": "Ferritic", "matNo": 15, "rm": "", "hardness": "160 HB", "sfm": "525-850", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.007", "SOMT 05": ".003-.0055", "SOMT 06": ".003-.0055", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "K", "material": "Grey cast iron (GG)", "condition": "Pearlitic", "matNo": 16, "rm": "", "hardness": "250 HB", "sfm": "525-850", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.007", "SOMT 05": ".003-.007", "SOMT 06": ".003-.007", "SOMT 07": ".004-.008", "SOMT 08": ".004-.008", "SOMT 09": ".004-.008", "SOMT 11": ".004-.008", "SOMT 13": ".004-.0085", "SOMT 15": ".004-.0085"},
        {"iso": "K", "material": "Grey cast iron (GG)", "condition": "Pearlitic", "matNo": 16, "rm": "", "hardness": "250 HB", "sfm": "525-850", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.007", "SOMT 05": ".003-.0055", "SOMT 06": ".003-.0055", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "K", "material": "Nodular cast iron (GGG)", "condition": "Ferritic", "matNo": 17, "rm": "", "hardness": "180 HB", "sfm": "525-850", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.007", "SOMT 05": ".003-.007", "SOMT 06": ".003-.007", "SOMT 07": ".004-.008", "SOMT 08": ".004-.008", "SOMT 09": ".004-.008", "SOMT 11": ".004-.008", "SOMT 13": ".004-.0085", "SOMT 15": ".004-.0085"},
        {"iso": "K", "material": "Nodular cast iron (GGG)", "condition": "Ferritic", "matNo": 17, "rm": "", "hardness": "180 HB", "sfm": "525-850", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.007", "SOMT 05": ".003-.0055", "SOMT 06": ".003-.0055", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "K", "material": "Nodular cast iron (GGG)", "condition": "Pearlitic", "matNo": 18, "rm": "", "hardness": "260 HB", "sfm": "525-850", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.007", "SOMT 05": ".003-.007", "SOMT 06": ".003-.007", "SOMT 07": ".004-.008", "SOMT 08": ".004-.008", "SOMT 09": ".004-.008", "SOMT 11": ".004-.008", "SOMT 13": ".004-.0085", "SOMT 15": ".004-.0085"},
        {"iso": "K", "material": "Nodular cast iron (GGG)", "condition": "Pearlitic", "matNo": 18, "rm": "", "hardness": "260 HB", "sfm": "525-850", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.007", "SOMT 05": ".003-.0055", "SOMT 06": ".003-.0055", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "K", "material": "Malleable cast iron", "condition": "Ferritic", "matNo": 19, "rm": "", "hardness": "130 HB", "sfm": "400-725", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.0055", "SOMT 05": ".003-.0055", "SOMT 06": ".003-.0055", "SOMT 07": ".004-.006", "SOMT 08": ".004-.006", "SOMT 09": ".004-.0065", "SOMT 11": ".004-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "K", "material": "Malleable cast iron", "condition": "Ferritic", "matNo": 19, "rm": "", "hardness": "130 HB", "sfm": "400-725", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.0055", "SOMT 05": ".0025-.0045", "SOMT 06": ".0025-.0045", "SOMT 07": ".003-.0055", "SOMT 08": ".003-.0055", "SOMT 09": ".004-.006", "SOMT 11": ".004-.006", "SOMT 13": ".004-.0065", "SOMT 15": ".004-.0065"},
        {"iso": "K", "material": "Malleable cast iron", "condition": "Pearlitic", "matNo": 20, "rm": "", "hardness": "230 HB", "sfm": "400-725", "length": "2xD – 4xD", "note": "", "SOMT 04": ".003-.0055", "SOMT 05": ".003-.0055", "SOMT 06": ".003-.0055", "SOMT 07": ".004-.006", "SOMT 08": ".004-.006", "SOMT 09": ".004-.0065", "SOMT 11": ".004-.007", "SOMT 13": ".004-.007", "SOMT 15": ".004-.007"},
        {"iso": "K", "material": "Malleable cast iron", "condition": "Pearlitic", "matNo": 20, "rm": "", "hardness": "230 HB", "sfm": "400-725", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".003-.0055", "SOMT 05": ".0025-.0045", "SOMT 06": ".0025-.0045", "SOMT 07": ".003-.0055", "SOMT 08": ".003-.0055", "SOMT 09": ".004-.006", "SOMT 11": ".004-.006", "SOMT 13": ".004-.0065", "SOMT 15": ".004-.0065"},
        {"iso": "N", "material": "Aluminum — wrought alloy", "condition": "Not cureable", "matNo": 21, "rm": "", "hardness": "60 HB", "sfm": "650-1150", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".0035-.007", "SOMT 11": ".0035-.007", "SOMT 13": ".004-.0075", "SOMT 15": ".004-.0075"},
        {"iso": "N", "material": "Aluminum — wrought alloy", "condition": "Not cureable", "matNo": 21, "rm": "", "hardness": "60 HB", "sfm": "650-1150", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".0025-.006", "SOMT 08": ".0025-.006", "SOMT 09": ".003-.006", "SOMT 11": ".003-.006", "SOMT 13": ".0035-.007", "SOMT 15": ".0035-.007"},
        {"iso": "N", "material": "Aluminum — wrought alloy", "condition": "Cured", "matNo": 22, "rm": "", "hardness": "100 HB", "sfm": "650-1150", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".0035-.007", "SOMT 11": ".0035-.007", "SOMT 13": ".004-.0075", "SOMT 15": ".004-.0075"},
        {"iso": "N", "material": "Aluminum — wrought alloy", "condition": "Cured", "matNo": 22, "rm": "", "hardness": "100 HB", "sfm": "650-1150", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".0025-.006", "SOMT 08": ".0025-.006", "SOMT 09": ".003-.006", "SOMT 11": ".003-.006", "SOMT 13": ".0035-.007", "SOMT 15": ".0035-.007"},
        {"iso": "N", "material": "Aluminum — cast, alloyed", "condition": "≤12% Si, not cureable", "matNo": 23, "rm": "", "hardness": "75 HB", "sfm": "650-1150", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".0035-.007", "SOMT 11": ".0035-.007", "SOMT 13": ".004-.0075", "SOMT 15": ".004-.0075"},
        {"iso": "N", "material": "Aluminum — cast, alloyed", "condition": "≤12% Si, not cureable", "matNo": 23, "rm": "", "hardness": "75 HB", "sfm": "650-1150", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".0025-.006", "SOMT 08": ".0025-.006", "SOMT 09": ".003-.006", "SOMT 11": ".003-.006", "SOMT 13": ".0035-.007", "SOMT 15": ".0035-.007"},
        {"iso": "N", "material": "Aluminum — cast, alloyed", "condition": "≤12% Si, cured", "matNo": 24, "rm": "", "hardness": "90 HB", "sfm": "650-1150", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".0035-.007", "SOMT 11": ".0035-.007", "SOMT 13": ".004-.0075", "SOMT 15": ".004-.0075"},
        {"iso": "N", "material": "Aluminum — cast, alloyed", "condition": "≤12% Si, cured", "matNo": 24, "rm": "", "hardness": "90 HB", "sfm": "650-1150", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".0025-.006", "SOMT 08": ".0025-.006", "SOMT 09": ".003-.006", "SOMT 11": ".003-.006", "SOMT 13": ".0035-.007", "SOMT 15": ".0035-.007"},
        {"iso": "N", "material": "Aluminum — cast, alloyed", "condition": ">12% Si, high temperature", "matNo": 25, "rm": "", "hardness": "130 HB", "sfm": "650-1150", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".0035-.007", "SOMT 11": ".0035-.007", "SOMT 13": ".004-.0075", "SOMT 15": ".004-.0075"},
        {"iso": "N", "material": "Aluminum — cast, alloyed", "condition": ">12% Si, high temperature", "matNo": 25, "rm": "", "hardness": "130 HB", "sfm": "650-1150", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".0025-.006", "SOMT 08": ".0025-.006", "SOMT 09": ".003-.006", "SOMT 11": ".003-.006", "SOMT 13": ".0035-.007", "SOMT 15": ".0035-.007"},
        {"iso": "N", "material": "Copper alloys", "condition": "Free cutting (>1% Pb)", "matNo": 26, "rm": "", "hardness": "110 HB", "sfm": "490-825", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "N", "material": "Copper alloys", "condition": "Free cutting (>1% Pb)", "matNo": 26, "rm": "", "hardness": "110 HB", "sfm": "490-825", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.0065", "SOMT 11": ".003-.0065", "SOMT 13": ".0035-.0075", "SOMT 15": ".0035-.0075"},
        {"iso": "N", "material": "Copper alloys", "condition": "Brass", "matNo": 27, "rm": "", "hardness": "90 HB", "sfm": "490-825", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "N", "material": "Copper alloys", "condition": "Brass", "matNo": 27, "rm": "", "hardness": "90 HB", "sfm": "490-825", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.0065", "SOMT 11": ".003-.0065", "SOMT 13": ".0035-.0075", "SOMT 15": ".0035-.0075"},
        {"iso": "N", "material": "Copper alloys", "condition": "Electrolytic copper", "matNo": 28, "rm": "", "hardness": "100 HB", "sfm": "490-825", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "N", "material": "Copper alloys", "condition": "Electrolytic copper", "matNo": 28, "rm": "", "hardness": "100 HB", "sfm": "490-825", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".003-.006", "SOMT 08": ".003-.006", "SOMT 09": ".003-.0065", "SOMT 11": ".003-.0065", "SOMT 13": ".0035-.0075", "SOMT 15": ".0035-.0075"},
        {"iso": "N", "material": "Non-metallic", "condition": "Duro & fiber plastics", "matNo": 29, "rm": "", "hardness": "", "sfm": "490-825", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "N", "material": "Non-metallic", "condition": "Duro & fiber plastics", "matNo": 29, "rm": "", "hardness": "", "sfm": "490-825", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".0025-.006", "SOMT 08": ".0025-.006", "SOMT 09": ".003-.006", "SOMT 11": ".0035-.006", "SOMT 13": ".0035-.0075", "SOMT 15": ".0035-.0075"},
        {"iso": "N", "material": "Non-metallic", "condition": "Hard rubber", "matNo": 30, "rm": "", "hardness": "", "sfm": "490-825", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.006", "SOMT 05": ".0025-.006", "SOMT 06": ".0025-.006", "SOMT 07": ".003-.0065", "SOMT 08": ".003-.0065", "SOMT 09": ".004-.007", "SOMT 11": ".004-.007", "SOMT 13": ".004-.008", "SOMT 15": ".004-.008"},
        {"iso": "N", "material": "Non-metallic", "condition": "Hard rubber", "matNo": 30, "rm": "", "hardness": "", "sfm": "490-825", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.006", "SOMT 05": ".002-.0055", "SOMT 06": ".002-.0055", "SOMT 07": ".0025-.006", "SOMT 08": ".0025-.006", "SOMT 09": ".003-.006", "SOMT 11": ".0035-.006", "SOMT 13": ".0035-.0075", "SOMT 15": ".0035-.0075"},
        {"iso": "S", "material": "High temp alloys", "condition": "Fe based, annealed", "matNo": 31, "rm": "", "hardness": "200 HB", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.003", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".002-.0035", "SOMT 08": ".002-.0035", "SOMT 09": ".003-.004", "SOMT 11": ".003-.004", "SOMT 13": ".003-.005", "SOMT 15": ".003-.005"},
        {"iso": "S", "material": "High temp alloys", "condition": "Fe based, annealed", "matNo": 31, "rm": "", "hardness": "200 HB", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.003", "SOMT 05": ".0015-.0025", "SOMT 06": ".0015-.0025", "SOMT 07": ".0015-.0025", "SOMT 08": ".0015-.0025", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.004", "SOMT 15": ".0025-.004"},
        {"iso": "S", "material": "High temp alloys", "condition": "Fe based, cured", "matNo": 32, "rm": "", "hardness": "280 HB", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.003", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".002-.0035", "SOMT 08": ".002-.0035", "SOMT 09": ".003-.004", "SOMT 11": ".003-.004", "SOMT 13": ".003-.005", "SOMT 15": ".003-.005"},
        {"iso": "S", "material": "High temp alloys", "condition": "Fe based, cured", "matNo": 32, "rm": "", "hardness": "280 HB", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.003", "SOMT 05": ".0015-.0025", "SOMT 06": ".0015-.0025", "SOMT 07": ".0015-.0025", "SOMT 08": ".0015-.0025", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.004", "SOMT 15": ".0025-.004"},
        {"iso": "S", "material": "High temp alloys", "condition": "Ni or Co based, annealed", "matNo": 33, "rm": "", "hardness": "250 HB", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.003", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".002-.0035", "SOMT 08": ".002-.0035", "SOMT 09": ".003-.004", "SOMT 11": ".003-.004", "SOMT 13": ".003-.005", "SOMT 15": ".003-.005"},
        {"iso": "S", "material": "High temp alloys", "condition": "Ni or Co based, annealed", "matNo": 33, "rm": "", "hardness": "250 HB", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.003", "SOMT 05": ".0015-.0025", "SOMT 06": ".0015-.0025", "SOMT 07": ".0015-.0025", "SOMT 08": ".0015-.0025", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.004", "SOMT 15": ".0025-.004"},
        {"iso": "S", "material": "High temp alloys", "condition": "Ni or Co based, cured", "matNo": 34, "rm": "", "hardness": "350 HB", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.003", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".002-.0035", "SOMT 08": ".002-.0035", "SOMT 09": ".003-.004", "SOMT 11": ".003-.004", "SOMT 13": ".003-.005", "SOMT 15": ".003-.005"},
        {"iso": "S", "material": "High temp alloys", "condition": "Ni or Co based, cured", "matNo": 34, "rm": "", "hardness": "350 HB", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.003", "SOMT 05": ".0015-.0025", "SOMT 06": ".0015-.0025", "SOMT 07": ".0015-.0025", "SOMT 08": ".0015-.0025", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.004", "SOMT 15": ".0025-.004"},
        {"iso": "S", "material": "High temp alloys", "condition": "Ni or Co based, cast", "matNo": 35, "rm": "", "hardness": "320 HB", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.003", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".002-.0035", "SOMT 08": ".002-.0035", "SOMT 09": ".003-.004", "SOMT 11": ".003-.004", "SOMT 13": ".003-.005", "SOMT 15": ".003-.005"},
        {"iso": "S", "material": "High temp alloys", "condition": "Ni or Co based, cast", "matNo": 35, "rm": "", "hardness": "320 HB", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.003", "SOMT 05": ".0015-.0025", "SOMT 06": ".0015-.0025", "SOMT 07": ".0015-.0025", "SOMT 08": ".0015-.0025", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.004", "SOMT 15": ".0025-.004"},
        {"iso": "S", "material": "Titanium & Ti alloys", "condition": "Pure titanium (Rm 400)", "matNo": 36, "rm": "400", "hardness": "", "sfm": "165-265", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.0035", "SOMT 05": ".0025-.0035", "SOMT 06": ".0025-.0035", "SOMT 07": ".003-.004", "SOMT 08": ".003-.004", "SOMT 09": ".003-.004", "SOMT 11": ".003-.004", "SOMT 13": ".003-.004", "SOMT 15": ".003-.004"},
        {"iso": "S", "material": "Titanium & Ti alloys", "condition": "Pure titanium (Rm 400)", "matNo": 36, "rm": "400", "hardness": "", "sfm": "165-265", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.0035", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".0025-.0035", "SOMT 08": ".0025-.0035", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.0035", "SOMT 15": ".0025-.0035"},
        {"iso": "S", "material": "Titanium & Ti alloys", "condition": "Alpha + beta alloys, cured (Rm 1050)", "matNo": 37, "rm": "1050", "hardness": "", "sfm": "165-265", "length": "2xD – 4xD", "note": "", "SOMT 04": ".0025-.0035", "SOMT 05": ".0025-.0035", "SOMT 06": ".0025-.0035", "SOMT 07": ".003-.004", "SOMT 08": ".003-.004", "SOMT 09": ".003-.004", "SOMT 11": ".003-.004", "SOMT 13": ".003-.004", "SOMT 15": ".003-.004"},
        {"iso": "S", "material": "Titanium & Ti alloys", "condition": "Alpha + beta alloys, cured (Rm 1050)", "matNo": 37, "rm": "1050", "hardness": "", "sfm": "165-265", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".0025-.0035", "SOMT 05": ".002-.003", "SOMT 06": ".002-.003", "SOMT 07": ".0025-.0035", "SOMT 08": ".0025-.0035", "SOMT 09": ".0025-.0035", "SOMT 11": ".0025-.0035", "SOMT 13": ".0025-.0035", "SOMT 15": ".0025-.0035"},
        {"iso": "H", "material": "Hardened steel", "condition": "Hardened 55 HRC", "matNo": 38, "rm": "", "hardness": "55 HRC", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.0035", "SOMT 05": ".002-.0035", "SOMT 06": ".002-.0035", "SOMT 07": ".002-.004", "SOMT 08": ".002-.004", "SOMT 09": ".002-.0045", "SOMT 11": ".002-.0045", "SOMT 13": ".002-.0045", "SOMT 15": ".002-.0045"},
        {"iso": "H", "material": "Hardened steel", "condition": "Hardened 55 HRC", "matNo": 38, "rm": "", "hardness": "55 HRC", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.0035", "SOMT 05": ".0015-.003", "SOMT 06": ".0015-.003", "SOMT 07": ".0015-.0035", "SOMT 08": ".0015-.0035", "SOMT 09": ".0015-.004", "SOMT 11": ".0015-.004", "SOMT 13": ".0015-.004", "SOMT 15": ".0015-.004"},
        {"iso": "H", "material": "Hardened steel", "condition": "Hardened 60 HRC", "matNo": 39, "rm": "", "hardness": "60 HRC", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.0035", "SOMT 05": ".002-.0035", "SOMT 06": ".002-.0035", "SOMT 07": ".002-.004", "SOMT 08": ".002-.004", "SOMT 09": ".002-.0045", "SOMT 11": ".002-.0045", "SOMT 13": ".002-.0045", "SOMT 15": ".002-.0045"},
        {"iso": "H", "material": "Hardened steel", "condition": "Hardened 60 HRC", "matNo": 39, "rm": "", "hardness": "60 HRC", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.0035", "SOMT 05": ".0015-.003", "SOMT 06": ".0015-.003", "SOMT 07": ".0015-.0035", "SOMT 08": ".0015-.0035", "SOMT 09": ".0015-.004", "SOMT 11": ".0015-.004", "SOMT 13": ".0015-.004", "SOMT 15": ".0015-.004"},
        {"iso": "H", "material": "Chilled cast iron", "condition": "Cast", "matNo": 40, "rm": "", "hardness": "400 HB", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.0035", "SOMT 05": ".002-.0035", "SOMT 06": ".002-.0035", "SOMT 07": ".002-.004", "SOMT 08": ".002-.004", "SOMT 09": ".002-.0045", "SOMT 11": ".002-.0045", "SOMT 13": ".002-.0045", "SOMT 15": ".002-.0045"},
        {"iso": "H", "material": "Chilled cast iron", "condition": "Cast", "matNo": 40, "rm": "", "hardness": "400 HB", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.0035", "SOMT 05": ".0015-.003", "SOMT 06": ".0015-.003", "SOMT 07": ".0015-.0035", "SOMT 08": ".0015-.0035", "SOMT 09": ".0015-.004", "SOMT 11": ".0015-.004", "SOMT 13": ".0015-.004", "SOMT 15": ".0015-.004"},
        {"iso": "H", "material": "Cast iron nodular (hardened)", "condition": "Hardened", "matNo": 41, "rm": "", "hardness": "55 HRC", "sfm": "100-200", "length": "2xD – 4xD", "note": "", "SOMT 04": ".002-.0035", "SOMT 05": ".002-.0035", "SOMT 06": ".002-.0035", "SOMT 07": ".002-.004", "SOMT 08": ".002-.004", "SOMT 09": ".002-.0045", "SOMT 11": ".002-.0045", "SOMT 13": ".002-.0045", "SOMT 15": ".002-.0045"},
        {"iso": "H", "material": "Cast iron nodular (hardened)", "condition": "Hardened", "matNo": 41, "rm": "", "hardness": "55 HRC", "sfm": "100-200", "length": "5xD", "note": "For 5xD, reduce feed rate by 40% for the first .150\" to stabilize, then go up to 100% programmed feed.", "SOMT 04": ".002-.0035", "SOMT 05": ".0015-.003", "SOMT 06": ".0015-.003", "SOMT 07": ".0015-.0035", "SOMT 08": ".0015-.0035", "SOMT 09": ".0015-.004", "SOMT 11": ".0015-.004", "SOMT 13": ".0015-.004", "SOMT 15": ".0015-.004"}
      ]
    }
  ],

  // THREADING
  "threading": {
    // Materials offered for form / cut taps.
    "materials": ["Aluminum", "CRS", "Stainless", "Tool Steel"],

    // Target SFM chips shown for form and cut taps.
    "sfmChart": [
      {"type": "Form Tap", "Aluminum": 90, "CRS": 60, "Stainless": 40, "Tool Steel": 30},
      {"type": "Cut Tap", "Aluminum": 50, "CRS": 40, "Stainless": 30, "Tool Steel": 25}
    ],

    // Form taps: each material holds {"sfm": , "rpm": , "ipm": }.
    "formInch": [
      {"tap": "4-40", "pitch": "0.0250", "drill": ".1024\" (2.6mm)", "Aluminum": {"sfm": 89.3, "rpm": 2080, "ipm": 52}, "CRS": {"sfm": 60.1, "rpm": 1400, "ipm": 35}, "Stainless": {"sfm": 39.5, "rpm": 920, "ipm": 23}, "Tool Steel": {"sfm": 29.2, "rpm": 680, "ipm": 17}},
      {"tap": "5-40", "pitch": "0.0250", "drill": ".1181\" (3mm)", "Aluminum": {"sfm": 90.8, "rpm": 1960, "ipm": 49}, "CRS": {"sfm": 59.3, "rpm": 1280, "ipm": 32}, "Stainless": {"sfm": 40.8, "rpm": 880, "ipm": 22}, "Tool Steel": {"sfm": 29.7, "rpm": 640, "ipm": 16}},
      {"tap": "6-32", "pitch": "0.0313", "drill": ".1250\"", "Aluminum": {"sfm": 90.7, "rpm": 1824, "ipm": 57}, "CRS": {"sfm": 60.5, "rpm": 1216, "ipm": 38}, "Stainless": {"sfm": 39.8, "rpm": 800, "ipm": 25}, "Tool Steel": {"sfm": 30.2, "rpm": 608, "ipm": 19}},
      {"tap": "8-32", "pitch": "0.0313", "drill": ".1496\" (3.8mm)", "Aluminum": {"sfm": 90.5, "rpm": 1600, "ipm": 50}, "CRS": {"sfm": 59.7, "rpm": 1056, "ipm": 33}, "Stainless": {"sfm": 39.8, "rpm": 704, "ipm": 22}, "Tool Steel": {"sfm": 30.8, "rpm": 544, "ipm": 17}},
      {"tap": "10-32", "pitch": "0.0313", "drill": ".1772\" (4.5mm)", "Aluminum": {"sfm": 89.2, "rpm": 1408, "ipm": 44}, "CRS": {"sfm": 60.8, "rpm": 960, "ipm": 30}, "Stainless": {"sfm": 40.5, "rpm": 640, "ipm": 20}, "Tool Steel": {"sfm": 30.4, "rpm": 480, "ipm": 15}},
      {"tap": "10-24", "pitch": "0.0417", "drill": ".1693\" (4.3mm)", "Aluminum": {"sfm": 89.7, "rpm": 1416, "ipm": 59}, "CRS": {"sfm": 59.3, "rpm": 936, "ipm": 39}, "Stainless": {"sfm": 39.5, "rpm": 624, "ipm": 26}, "Tool Steel": {"sfm": 30.4, "rpm": 480, "ipm": 20}},
      {"tap": "1/4-20", "pitch": "0.0500", "drill": ".2283\" (5.8mm)", "Aluminum": {"sfm": 90.3, "rpm": 1380, "ipm": 69}, "CRS": {"sfm": 60.2, "rpm": 920, "ipm": 46}, "Stainless": {"sfm": 40.6, "rpm": 620, "ipm": 31}, "Tool Steel": {"sfm": 30.1, "rpm": 460, "ipm": 23}},
      {"tap": "5/16-18", "pitch": "0.0556", "drill": ".2874\" (7.3mm)", "Aluminum": {"sfm": 89.8, "rpm": 1098, "ipm": 61}, "CRS": {"sfm": 60.4, "rpm": 738, "ipm": 41}, "Stainless": {"sfm": 39.8, "rpm": 486, "ipm": 27}, "Tool Steel": {"sfm": 29.5, "rpm": 360, "ipm": 20}},
      {"tap": "3/8-16", "pitch": "0.0625", "drill": ".3437\"", "Aluminum": {"sfm": 89.5, "rpm": 912, "ipm": 57}, "CRS": {"sfm": 59.7, "rpm": 608, "ipm": 38}, "Stainless": {"sfm": 39.3, "rpm": 400, "ipm": 25}, "Tool Steel": {"sfm": 29.8, "rpm": 304, "ipm": 19}},
      {"tap": "7/16-14", "pitch": "0.0714", "drill": ".4063\"", "Aluminum": {"sfm": 89.8, "rpm": 784, "ipm": 56}, "CRS": {"sfm": 59.3, "rpm": 518, "ipm": 37}, "Stainless": {"sfm": 40.1, "rpm": 350, "ipm": 25}, "Tool Steel": {"sfm": 30.5, "rpm": 266, "ipm": 19}},
      {"tap": "1/2-13", "pitch": "0.0769", "drill": ".4646\" (11.8mm)", "Aluminum": {"sfm": 90.2, "rpm": 689, "ipm": 53}, "CRS": {"sfm": 59.6, "rpm": 455, "ipm": 35}, "Stainless": {"sfm": 40.8, "rpm": 312, "ipm": 24}, "Tool Steel": {"sfm": 30.6, "rpm": 234, "ipm": 18}},
      {"tap": "1/2-20", "pitch": "0.0500", "drill": ".4843\" (12.3mm)", "Aluminum": {"sfm": 89, "rpm": 680, "ipm": 34}, "CRS": {"sfm": 60.2, "rpm": 460, "ipm": 23}, "Stainless": {"sfm": 39.3, "rpm": 300, "ipm": 15}, "Tool Steel": {"sfm": 28.8, "rpm": 220, "ipm": 11}},
      {"tap": "5/8-11", "pitch": "0.0909", "drill": ".5787\" (14.7mm)", "Aluminum": {"sfm": 90, "rpm": 550, "ipm": 50}, "CRS": {"sfm": 59.4, "rpm": 363, "ipm": 33}, "Stainless": {"sfm": 39.6, "rpm": 242, "ipm": 22}, "Tool Steel": {"sfm": 30.6, "rpm": 187, "ipm": 17}}
    ],
    "formMetric": [
      {"tap": "M2 x .4", "pitch": "0.0157", "drill": ".0729\" (1.854mm)", "Aluminum": {"sfm": 82.5, "rpm": 4000, "ipm": 63}, "CRS": {"sfm": 55, "rpm": 2667, "ipm": 42}, "Stainless": {"sfm": 36.7, "rpm": 1778, "ipm": 28}, "Tool Steel": {"sfm": 27.5, "rpm": 1333, "ipm": 21}},
      {"tap": "M3 x .5", "pitch": "0.0197", "drill": ".1102\" (2.8mm)", "Aluminum": {"sfm": 81.7, "rpm": 2642, "ipm": 52}, "CRS": {"sfm": 55, "rpm": 1778, "ipm": 35}, "Stainless": {"sfm": 37.7, "rpm": 1219, "ipm": 24}, "Tool Steel": {"sfm": 28.3, "rpm": 914, "ipm": 18}},
      {"tap": "M4 x .7", "pitch": "0.0276", "drill": ".1457\" (3.7mm)", "Aluminum": {"sfm": 82.3, "rpm": 1996, "ipm": 55}, "CRS": {"sfm": 55.4, "rpm": 1343, "ipm": 37}, "Stainless": {"sfm": 37.4, "rpm": 907, "ipm": 25}, "Tool Steel": {"sfm": 28.4, "rpm": 689, "ipm": 19}},
      {"tap": "M5 x .8", "pitch": "0.0315", "drill": ".1811\" (4.6mm)", "Aluminum": {"sfm": 81.8, "rpm": 1587, "ipm": 50}, "CRS": {"sfm": 55.6, "rpm": 1079, "ipm": 34}, "Stainless": {"sfm": 37.6, "rpm": 730, "ipm": 23}, "Tool Steel": {"sfm": 27.8, "rpm": 540, "ipm": 17}},
      {"tap": "M6 x 1", "pitch": "0.0394", "drill": ".2189\" (5.56mm)", "Aluminum": {"sfm": 81.7, "rpm": 1321, "ipm": 52}, "CRS": {"sfm": 55, "rpm": 889, "ipm": 35}, "Stainless": {"sfm": 37.7, "rpm": 610, "ipm": 24}, "Tool Steel": {"sfm": 28.3, "rpm": 457, "ipm": 18}},
      {"tap": "M8 x 1.25", "pitch": "0.0492", "drill": ".2913\" (7.4mm)", "Aluminum": {"sfm": 82.1, "rpm": 996, "ipm": 49}, "CRS": {"sfm": 55.3, "rpm": 671, "ipm": 33}, "Stainless": {"sfm": 36.9, "rpm": 447, "ipm": 22}, "Tool Steel": {"sfm": 28.5, "rpm": 345, "ipm": 17}},
      {"tap": "M10 x 1.5", "pitch": "0.0591", "drill": ".3661\" (9.3mm)", "Aluminum": {"sfm": 82, "rpm": 796, "ipm": 47}, "CRS": {"sfm": 55.9, "rpm": 542, "ipm": 32}, "Stainless": {"sfm": 36.7, "rpm": 356, "ipm": 21}, "Tool Steel": {"sfm": 27.9, "rpm": 271, "ipm": 16}},
      {"tap": "M12 x 1.75", "pitch": "0.0689", "drill": ".4375\" (11.11mm)", "Aluminum": {"sfm": 82.6, "rpm": 668, "ipm": 46}, "CRS": {"sfm": 55.7, "rpm": 450, "ipm": 31}, "Stainless": {"sfm": 37.7, "rpm": 305, "ipm": 21}, "Tool Steel": {"sfm": 28.7, "rpm": 232, "ipm": 16}}
    ],

    // Cut taps: same layout as form taps.
    "cutInch": [
      {"tap": "0-80", "pitch": "0.0125", "drill": "#56 (.0465\")", "Aluminum": {"sfm": 50.3, "rpm": 3200, "ipm": 40}, "CRS": {"sfm": 40.2, "rpm": 2560, "ipm": 32}, "Stainless": {"sfm": 30.2, "rpm": 1920, "ipm": 24}, "Tool Steel": {"sfm": 25.1, "rpm": 1600, "ipm": 20}},
      {"tap": "1-64", "pitch": "0.0156", "drill": "#53 (.0595\")", "Aluminum": {"sfm": 50.3, "rpm": 192, "ipm": 3}, "CRS": {"sfm": 33.5, "rpm": 128, "ipm": 2}, "Stainless": {"sfm": 33.5, "rpm": 128, "ipm": 2}, "Tool Steel": {"sfm": 24.9, "rpm": 95, "ipm": 1}},
      {"tap": "1-72", "pitch": "0.0139", "drill": "#53 (.0595\")", "Aluminum": {"sfm": 56.5, "rpm": 216, "ipm": 3}, "CRS": {"sfm": 37.7, "rpm": 144, "ipm": 2}, "Stainless": {"sfm": 30.1, "rpm": 115, "ipm": 2}, "Tool Steel": {"sfm": 24.9, "rpm": 95, "ipm": 1}},
      {"tap": "2-56", "pitch": "0.0179", "drill": "#50 (.0700\")", "Aluminum": {"sfm": 50.4, "rpm": 2240, "ipm": 40}, "CRS": {"sfm": 40.3, "rpm": 1792, "ipm": 32}, "Stainless": {"sfm": 30.3, "rpm": 1344, "ipm": 24}, "Tool Steel": {"sfm": 25.2, "rpm": 1120, "ipm": 20}},
      {"tap": "2-64", "pitch": "0.0156", "drill": "#50 (.0700\")", "Aluminum": {"sfm": 50.4, "rpm": 2240, "ipm": 35}, "CRS": {"sfm": 40.3, "rpm": 1792, "ipm": 28}, "Stainless": {"sfm": 30.3, "rpm": 1344, "ipm": 21}, "Tool Steel": {"sfm": 24.5, "rpm": 1088, "ipm": 17}},
      {"tap": "3-48", "pitch": "0.0208", "drill": "#47 (.0785\")", "Aluminum": {"sfm": 49.8, "rpm": 1920, "ipm": 40}, "CRS": {"sfm": 39.8, "rpm": 1536, "ipm": 32}, "Stainless": {"sfm": 29.9, "rpm": 1152, "ipm": 24}, "Tool Steel": {"sfm": 24.9, "rpm": 960, "ipm": 20}},
      {"tap": "3-56", "pitch": "0.0179", "drill": "#45 (.0820\")", "Aluminum": {"sfm": 49.3, "rpm": 1904, "ipm": 34}, "CRS": {"sfm": 40.6, "rpm": 1568, "ipm": 28}, "Stainless": {"sfm": 30.5, "rpm": 1176, "ipm": 21}, "Tool Steel": {"sfm": 24.7, "rpm": 952, "ipm": 17}},
      {"tap": "4-40", "pitch": "0.0250", "drill": "#43 (.0890\")", "Aluminum": {"sfm": 50.4, "rpm": 1720, "ipm": 43}, "CRS": {"sfm": 39.9, "rpm": 1360, "ipm": 34}, "Stainless": {"sfm": 30.5, "rpm": 1040, "ipm": 26}, "Tool Steel": {"sfm": 24.6, "rpm": 840, "ipm": 21}},
      {"tap": "4-48", "pitch": "0.0208", "drill": "#42 (.0935\")", "Aluminum": {"sfm": 50.7, "rpm": 1728, "ipm": 36}, "CRS": {"sfm": 39.4, "rpm": 1344, "ipm": 28}, "Stainless": {"sfm": 29.6, "rpm": 1008, "ipm": 21}, "Tool Steel": {"sfm": 25.3, "rpm": 864, "ipm": 18}},
      {"tap": "5-40", "pitch": "0.0250", "drill": "#38 (.1015\")", "Aluminum": {"sfm": 49.7, "rpm": 1520, "ipm": 38}, "CRS": {"sfm": 40.6, "rpm": 1240, "ipm": 31}, "Stainless": {"sfm": 30.1, "rpm": 920, "ipm": 23}, "Tool Steel": {"sfm": 24.9, "rpm": 760, "ipm": 19}},
      {"tap": "5-44", "pitch": "0.0227", "drill": "#37 (.1040\")", "Aluminum": {"sfm": 50.4, "rpm": 1540, "ipm": 35}, "CRS": {"sfm": 40.3, "rpm": 1232, "ipm": 28}, "Stainless": {"sfm": 30.2, "rpm": 924, "ipm": 21}, "Tool Steel": {"sfm": 24.5, "rpm": 748, "ipm": 17}},
      {"tap": "6-32", "pitch": "0.0312", "drill": "#36 (.1065\")", "Aluminum": {"sfm": 49.7, "rpm": 1376, "ipm": 43}, "CRS": {"sfm": 40.5, "rpm": 1120, "ipm": 35}, "Stainless": {"sfm": 30.1, "rpm": 832, "ipm": 26}, "Tool Steel": {"sfm": 25.4, "rpm": 704, "ipm": 22}},
      {"tap": "6-40", "pitch": "0.0250", "drill": "#33 (.1130\")", "Aluminum": {"sfm": 50.6, "rpm": 1400, "ipm": 35}, "CRS": {"sfm": 40.5, "rpm": 1120, "ipm": 28}, "Stainless": {"sfm": 30.3, "rpm": 840, "ipm": 21}, "Tool Steel": {"sfm": 24.6, "rpm": 680, "ipm": 17}},
      {"tap": "8-32", "pitch": "0.0312", "drill": "#29 (.1360\")", "Aluminum": {"sfm": 49.5, "rpm": 1152, "ipm": 36}, "CRS": {"sfm": 39.8, "rpm": 928, "ipm": 29}, "Stainless": {"sfm": 30.2, "rpm": 704, "ipm": 22}, "Tool Steel": {"sfm": 24.7, "rpm": 576, "ipm": 18}},
      {"tap": "8-36", "pitch": "0.0278", "drill": "#29 (.1360\")", "Aluminum": {"sfm": 49.5, "rpm": 1152, "ipm": 32}, "CRS": {"sfm": 40.2, "rpm": 936, "ipm": 26}, "Stainless": {"sfm": 29.4, "rpm": 684, "ipm": 19}, "Tool Steel": {"sfm": 24.7, "rpm": 576, "ipm": 16}},
      {"tap": "10-24", "pitch": "0.0417", "drill": "#25 (.1495\")", "Aluminum": {"sfm": 50.1, "rpm": 1008, "ipm": 42}, "CRS": {"sfm": 40.6, "rpm": 816, "ipm": 34}, "Stainless": {"sfm": 29.8, "rpm": 600, "ipm": 25}, "Tool Steel": {"sfm": 25.1, "rpm": 504, "ipm": 21}},
      {"tap": "10-32", "pitch": "0.0312", "drill": "#21 (.1590\")", "Aluminum": {"sfm": 49.3, "rpm": 992, "ipm": 31}, "CRS": {"sfm": 39.8, "rpm": 800, "ipm": 25}, "Stainless": {"sfm": 30.2, "rpm": 608, "ipm": 19}, "Tool Steel": {"sfm": 25.5, "rpm": 512, "ipm": 16}},
      {"tap": "12-24", "pitch": "0.0417", "drill": "#16 (.1770\")", "Aluminum": {"sfm": 50.2, "rpm": 888, "ipm": 37}, "CRS": {"sfm": 39.4, "rpm": 696, "ipm": 29}, "Stainless": {"sfm": 29.9, "rpm": 528, "ipm": 22}, "Tool Steel": {"sfm": 24.4, "rpm": 432, "ipm": 18}},
      {"tap": "12-28", "pitch": "0.0357", "drill": "#15 (.1800\")", "Aluminum": {"sfm": 50.7, "rpm": 896, "ipm": 32}, "CRS": {"sfm": 39.6, "rpm": 700, "ipm": 25}, "Stainless": {"sfm": 30.1, "rpm": 532, "ipm": 19}, "Tool Steel": {"sfm": 25.3, "rpm": 448, "ipm": 16}},
      {"tap": "1/4-20", "pitch": "0.0500", "drill": "#7 (.2010\")", "Aluminum": {"sfm": 49.7, "rpm": 760, "ipm": 38}, "CRS": {"sfm": 40.6, "rpm": 620, "ipm": 31}, "Stainless": {"sfm": 30.1, "rpm": 460, "ipm": 23}, "Tool Steel": {"sfm": 24.9, "rpm": 380, "ipm": 19}},
      {"tap": "1/4-28", "pitch": "0.0357", "drill": "#3 (.2130\")", "Aluminum": {"sfm": 49.5, "rpm": 756, "ipm": 27}, "CRS": {"sfm": 40.3, "rpm": 616, "ipm": 22}, "Stainless": {"sfm": 29.3, "rpm": 448, "ipm": 16}, "Tool Steel": {"sfm": 25.7, "rpm": 392, "ipm": 14}},
      {"tap": "5/16-18", "pitch": "0.0556", "drill": "F (.2570\")", "Aluminum": {"sfm": 50.1, "rpm": 612, "ipm": 34}, "CRS": {"sfm": 39.8, "rpm": 486, "ipm": 27}, "Stainless": {"sfm": 29.5, "rpm": 360, "ipm": 20}, "Tool Steel": {"sfm": 25, "rpm": 306, "ipm": 17}},
      {"tap": "5/16-24", "pitch": "0.0417", "drill": "I (.2720\")", "Aluminum": {"sfm": 49.1, "rpm": 600, "ipm": 25}, "CRS": {"sfm": 39.3, "rpm": 480, "ipm": 20}, "Stainless": {"sfm": 29.5, "rpm": 360, "ipm": 15}, "Tool Steel": {"sfm": 25.5, "rpm": 312, "ipm": 13}},
      {"tap": "3/8-16", "pitch": "0.0625", "drill": "5/16\" (.3125\")", "Aluminum": {"sfm": 50.3, "rpm": 512, "ipm": 32}, "CRS": {"sfm": 39.3, "rpm": 400, "ipm": 25}, "Stainless": {"sfm": 29.8, "rpm": 304, "ipm": 19}, "Tool Steel": {"sfm": 25.1, "rpm": 256, "ipm": 16}},
      {"tap": "3/8-24", "pitch": "0.0417", "drill": "Q (.3320\")", "Aluminum": {"sfm": 49.5, "rpm": 504, "ipm": 21}, "CRS": {"sfm": 40.1, "rpm": 408, "ipm": 17}, "Stainless": {"sfm": 30.6, "rpm": 312, "ipm": 13}, "Tool Steel": {"sfm": 25.9, "rpm": 264, "ipm": 11}},
      {"tap": "7/16-14", "pitch": "0.0714", "drill": "U (.3680\")", "Aluminum": {"sfm": 49.7, "rpm": 434, "ipm": 31}, "CRS": {"sfm": 40.1, "rpm": 350, "ipm": 25}, "Stainless": {"sfm": 30.5, "rpm": 266, "ipm": 19}, "Tool Steel": {"sfm": 25.7, "rpm": 224, "ipm": 16}},
      {"tap": "7/16-20", "pitch": "0.0500", "drill": "25/64\" (.3906\")", "Aluminum": {"sfm": 50.4, "rpm": 440, "ipm": 22}, "CRS": {"sfm": 38.9, "rpm": 340, "ipm": 17}, "Stainless": {"sfm": 29.8, "rpm": 260, "ipm": 13}, "Tool Steel": {"sfm": 25.2, "rpm": 220, "ipm": 11}},
      {"tap": "1/2-13", "pitch": "0.0769", "drill": "27/64\" (.4219\")", "Aluminum": {"sfm": 49.3, "rpm": 377, "ipm": 29}, "CRS": {"sfm": 40.8, "rpm": 312, "ipm": 24}, "Stainless": {"sfm": 30.6, "rpm": 234, "ipm": 18}, "Tool Steel": {"sfm": 25.5, "rpm": 195, "ipm": 15}},
      {"tap": "1/2-20", "pitch": "0.0500", "drill": "29/64\" (.4531\")", "Aluminum": {"sfm": 49.7, "rpm": 380, "ipm": 19}, "CRS": {"sfm": 39.3, "rpm": 300, "ipm": 15}, "Stainless": {"sfm": 28.8, "rpm": 220, "ipm": 11}, "Tool Steel": {"sfm": 26.2, "rpm": 200, "ipm": 10}},
      {"tap": "9/16-12", "pitch": "0.0833", "drill": "31/64\" (.4844\")", "Aluminum": {"sfm": 49.5, "rpm": 336, "ipm": 28}, "CRS": {"sfm": 40.6, "rpm": 276, "ipm": 23}, "Stainless": {"sfm": 30, "rpm": 204, "ipm": 17}, "Tool Steel": {"sfm": 24.7, "rpm": 168, "ipm": 14}},
      {"tap": "9/16-18", "pitch": "0.0556", "drill": "33/64\" (.5156\")", "Aluminum": {"sfm": 50.4, "rpm": 342, "ipm": 19}, "CRS": {"sfm": 39.8, "rpm": 270, "ipm": 15}, "Stainless": {"sfm": 29.2, "rpm": 198, "ipm": 11}, "Tool Steel": {"sfm": 23.9, "rpm": 162, "ipm": 9}},
      {"tap": "5/8-11", "pitch": "0.0909", "drill": "17/32\" (.5313\")", "Aluminum": {"sfm": 50.4, "rpm": 308, "ipm": 28}, "CRS": {"sfm": 39.6, "rpm": 242, "ipm": 22}, "Stainless": {"sfm": 30.6, "rpm": 187, "ipm": 17}, "Tool Steel": {"sfm": 25.2, "rpm": 154, "ipm": 14}},
      {"tap": "5/8-18", "pitch": "0.0556", "drill": "37/64\" (.5781\")", "Aluminum": {"sfm": 50.1, "rpm": 306, "ipm": 17}, "CRS": {"sfm": 41.2, "rpm": 252, "ipm": 14}, "Stainless": {"sfm": 29.5, "rpm": 180, "ipm": 10}, "Tool Steel": {"sfm": 23.6, "rpm": 144, "ipm": 8}},
      {"tap": "3/4-10", "pitch": "0.1000", "drill": "21/32\" (.6563\")", "Aluminum": {"sfm": 49.1, "rpm": 250, "ipm": 25}, "CRS": {"sfm": 39.3, "rpm": 200, "ipm": 20}, "Stainless": {"sfm": 29.5, "rpm": 150, "ipm": 15}, "Tool Steel": {"sfm": 25.5, "rpm": 130, "ipm": 13}},
      {"tap": "3/4-16", "pitch": "0.0625", "drill": "11/16\" (.6875\")", "Aluminum": {"sfm": 50.3, "rpm": 256, "ipm": 16}, "CRS": {"sfm": 40.8, "rpm": 208, "ipm": 13}, "Stainless": {"sfm": 31.4, "rpm": 160, "ipm": 10}, "Tool Steel": {"sfm": 25.1, "rpm": 128, "ipm": 8}},
      {"tap": "7/8-9", "pitch": "0.1111", "drill": "49/64\" (.7656\")", "Aluminum": {"sfm": 49.5, "rpm": 216, "ipm": 24}, "CRS": {"sfm": 39.2, "rpm": 171, "ipm": 19}, "Stainless": {"sfm": 30.9, "rpm": 135, "ipm": 15}, "Tool Steel": {"sfm": 24.7, "rpm": 108, "ipm": 12}},
      {"tap": "7/8-14", "pitch": "0.0714", "drill": "13/16\" (.8125\")", "Aluminum": {"sfm": 51.3, "rpm": 224, "ipm": 16}, "CRS": {"sfm": 38.5, "rpm": 168, "ipm": 12}, "Stainless": {"sfm": 28.9, "rpm": 126, "ipm": 9}, "Tool Steel": {"sfm": 25.7, "rpm": 112, "ipm": 8}},
      {"tap": "1-8", "pitch": "0.1250", "drill": "7/8\" (.8750\")", "Aluminum": {"sfm": 50.3, "rpm": 192, "ipm": 24}, "CRS": {"sfm": 39.8, "rpm": 152, "ipm": 19}, "Stainless": {"sfm": 29.3, "rpm": 112, "ipm": 14}, "Tool Steel": {"sfm": 25.1, "rpm": 96, "ipm": 12}},
      {"tap": "1-12", "pitch": "0.0833", "drill": "59/64\" (.9219\")", "Aluminum": {"sfm": 50.3, "rpm": 192, "ipm": 16}, "CRS": {"sfm": 40.8, "rpm": 156, "ipm": 13}, "Stainless": {"sfm": 31.4, "rpm": 120, "ipm": 10}, "Tool Steel": {"sfm": 25.1, "rpm": 96, "ipm": 8}},
      {"tap": "1-14", "pitch": "0.0714", "drill": "15/16\" (.9375\")", "Aluminum": {"sfm": 51.3, "rpm": 196, "ipm": 14}, "CRS": {"sfm": 40.3, "rpm": 154, "ipm": 11}, "Stainless": {"sfm": 29.3, "rpm": 112, "ipm": 8}, "Tool Steel": {"sfm": 25.7, "rpm": 98, "ipm": 7}}
    ],
    "cutMetric": [
      {"tap": "M2 x 0.4", "pitch": "0.0157", "drill": "1.6mm (.0630\")", "Aluminum": {"sfm": 49.7, "rpm": 2413, "ipm": 38}, "CRS": {"sfm": 40.6, "rpm": 1968, "ipm": 31}, "Stainless": {"sfm": 30.1, "rpm": 1460, "ipm": 23}, "Tool Steel": {"sfm": 24.9, "rpm": 1206, "ipm": 19}},
      {"tap": "M2.5 x 0.45", "pitch": "0.0177", "drill": "2.05mm (.0807\")", "Aluminum": {"sfm": 49.5, "rpm": 1919, "ipm": 34}, "CRS": {"sfm": 40.7, "rpm": 1580, "ipm": 28}, "Stainless": {"sfm": 30.5, "rpm": 1185, "ipm": 21}, "Tool Steel": {"sfm": 24.7, "rpm": 960, "ipm": 17}},
      {"tap": "M3 x 0.5", "pitch": "0.0197", "drill": "2.5mm (.0984\")", "Aluminum": {"sfm": 50.3, "rpm": 1626, "ipm": 32}, "CRS": {"sfm": 39.3, "rpm": 1270, "ipm": 25}, "Stainless": {"sfm": 29.8, "rpm": 965, "ipm": 19}, "Tool Steel": {"sfm": 25.1, "rpm": 813, "ipm": 16}},
      {"tap": "M3.5 x 0.6", "pitch": "0.0236", "drill": "2.9mm (.1142\")", "Aluminum": {"sfm": 50.4, "rpm": 1397, "ipm": 33}, "CRS": {"sfm": 39.7, "rpm": 1101, "ipm": 26}, "Stainless": {"sfm": 30.5, "rpm": 847, "ipm": 20}, "Tool Steel": {"sfm": 24.4, "rpm": 677, "ipm": 16}},
      {"tap": "M4 x 0.7", "pitch": "0.0276", "drill": "3.3mm (.1299\")", "Aluminum": {"sfm": 49.4, "rpm": 1197, "ipm": 33}, "CRS": {"sfm": 40.4, "rpm": 980, "ipm": 27}, "Stainless": {"sfm": 29.9, "rpm": 726, "ipm": 20}, "Tool Steel": {"sfm": 25.4, "rpm": 617, "ipm": 17}},
      {"tap": "M5 x 0.8", "pitch": "0.0315", "drill": "4.2mm (.1654\")", "Aluminum": {"sfm": 50.7, "rpm": 984, "ipm": 31}, "CRS": {"sfm": 39.3, "rpm": 762, "ipm": 24}, "Stainless": {"sfm": 29.5, "rpm": 571, "ipm": 18}, "Tool Steel": {"sfm": 24.5, "rpm": 476, "ipm": 15}},
      {"tap": "M6 x 1", "pitch": "0.0394", "drill": "5.0mm (.1969\")", "Aluminum": {"sfm": 50.3, "rpm": 813, "ipm": 32}, "CRS": {"sfm": 39.3, "rpm": 635, "ipm": 25}, "Stainless": {"sfm": 29.8, "rpm": 483, "ipm": 19}, "Tool Steel": {"sfm": 25.1, "rpm": 406, "ipm": 16}},
      {"tap": "M7 x 1", "pitch": "0.0394", "drill": "6.0mm (.2362\")", "Aluminum": {"sfm": 49.5, "rpm": 686, "ipm": 27}, "CRS": {"sfm": 40.3, "rpm": 559, "ipm": 22}, "Stainless": {"sfm": 29.3, "rpm": 406, "ipm": 16}, "Tool Steel": {"sfm": 25.7, "rpm": 356, "ipm": 14}},
      {"tap": "M8 x 1.25", "pitch": "0.0492", "drill": "6.7mm (.2638\")", "Aluminum": {"sfm": 50.3, "rpm": 610, "ipm": 30}, "CRS": {"sfm": 40.2, "rpm": 488, "ipm": 24}, "Stainless": {"sfm": 30.2, "rpm": 366, "ipm": 18}, "Tool Steel": {"sfm": 25.1, "rpm": 305, "ipm": 15}},
      {"tap": "M8 x 1", "pitch": "0.0394", "drill": "7.0mm (.2756\")", "Aluminum": {"sfm": 50.3, "rpm": 610, "ipm": 24}, "CRS": {"sfm": 39.8, "rpm": 483, "ipm": 19}, "Stainless": {"sfm": 29.3, "rpm": 356, "ipm": 14}, "Tool Steel": {"sfm": 25.1, "rpm": 305, "ipm": 12}},
      {"tap": "M10 x 1.5", "pitch": "0.0591", "drill": "8.5mm (.3346\")", "Aluminum": {"sfm": 50.6, "rpm": 491, "ipm": 29}, "CRS": {"sfm": 40.1, "rpm": 389, "ipm": 23}, "Stainless": {"sfm": 29.7, "rpm": 288, "ipm": 17}, "Tool Steel": {"sfm": 24.4, "rpm": 237, "ipm": 14}},
      {"tap": "M10 x 1.25", "pitch": "0.0492", "drill": "8.7mm (.3425\")", "Aluminum": {"sfm": 50.3, "rpm": 488, "ipm": 24}, "CRS": {"sfm": 39.8, "rpm": 386, "ipm": 19}, "Stainless": {"sfm": 29.3, "rpm": 284, "ipm": 14}, "Tool Steel": {"sfm": 25.1, "rpm": 244, "ipm": 12}},
      {"tap": "M12 x 1.75", "pitch": "0.0689", "drill": "10.2mm (.4016\")", "Aluminum": {"sfm": 50.3, "rpm": 406, "ipm": 28}, "CRS": {"sfm": 39.5, "rpm": 319, "ipm": 22}, "Stainless": {"sfm": 30.5, "rpm": 247, "ipm": 17}, "Tool Steel": {"sfm": 25.1, "rpm": 203, "ipm": 14}},
      {"tap": "M12 x 1.25", "pitch": "0.0492", "drill": "10.8mm (.4252\")", "Aluminum": {"sfm": 50.3, "rpm": 406, "ipm": 20}, "CRS": {"sfm": 40.2, "rpm": 325, "ipm": 16}, "Stainless": {"sfm": 30.2, "rpm": 244, "ipm": 12}, "Tool Steel": {"sfm": 25.1, "rpm": 203, "ipm": 10}},
      {"tap": "M14 x 2", "pitch": "0.0787", "drill": "12.0mm (.4724\")", "Aluminum": {"sfm": 49.5, "rpm": 343, "ipm": 27}, "CRS": {"sfm": 40.3, "rpm": 279, "ipm": 22}, "Stainless": {"sfm": 29.3, "rpm": 203, "ipm": 16}, "Tool Steel": {"sfm": 25.7, "rpm": 178, "ipm": 14}},
      {"tap": "M16 x 2", "pitch": "0.0787", "drill": "14.0mm (.5512\")", "Aluminum": {"sfm": 50.3, "rpm": 305, "ipm": 24}, "CRS": {"sfm": 39.8, "rpm": 241, "ipm": 19}, "Stainless": {"sfm": 29.3, "rpm": 178, "ipm": 14}, "Tool Steel": {"sfm": 25.1, "rpm": 152, "ipm": 12}},
      {"tap": "M18 x 2.5", "pitch": "0.0984", "drill": "15.5mm (.6102\")", "Aluminum": {"sfm": 50.9, "rpm": 274, "ipm": 27}, "CRS": {"sfm": 39.6, "rpm": 213, "ipm": 21}, "Stainless": {"sfm": 30.2, "rpm": 163, "ipm": 16}, "Tool Steel": {"sfm": 24.5, "rpm": 132, "ipm": 13}},
      {"tap": "M20 x 2.5", "pitch": "0.0984", "drill": "17.5mm (.6890\")", "Aluminum": {"sfm": 50.3, "rpm": 244, "ipm": 24}, "CRS": {"sfm": 39.8, "rpm": 193, "ipm": 19}, "Stainless": {"sfm": 29.3, "rpm": 142, "ipm": 14}, "Tool Steel": {"sfm": 25.1, "rpm": 122, "ipm": 12}},
      {"tap": "M22 x 2.5", "pitch": "0.0984", "drill": "19.5mm (.7677\")", "Aluminum": {"sfm": 50.7, "rpm": 224, "ipm": 22}, "CRS": {"sfm": 39.2, "rpm": 173, "ipm": 17}, "Stainless": {"sfm": 29.9, "rpm": 132, "ipm": 13}, "Tool Steel": {"sfm": 25.3, "rpm": 112, "ipm": 11}},
      {"tap": "M24 x 3", "pitch": "0.1181", "drill": "21.0mm (.8268\")", "Aluminum": {"sfm": 50.3, "rpm": 203, "ipm": 24}, "CRS": {"sfm": 39.8, "rpm": 161, "ipm": 19}, "Stainless": {"sfm": 29.3, "rpm": 119, "ipm": 14}, "Tool Steel": {"sfm": 25.1, "rpm": 102, "ipm": 12}}
    ],

    // NPT pipe taps.
    "npt": [
      {"tap": "1/8 – 27", "tpi": 27, "pitch": "0.0370", "drill": "11/32\" (.3438\")"},
      {"tap": "1/4 – 18", "tpi": 18, "pitch": "0.0556", "drill": "7/16\" (.4375\")"},
      {"tap": "3/8 – 18", "tpi": 18, "pitch": "0.0556", "drill": "37/64\" (.5781\")"},
      {"tap": "1/2 – 14", "tpi": 14, "pitch": "0.0714", "drill": "23/32\" (.7188\")"},
      {"tap": "3/4 – 14", "tpi": 14, "pitch": "0.0714", "drill": "59/64\" (.9219\")"},
      {"tap": "1 – 11½", "tpi": 11.5, "pitch": "0.0870", "drill": "1-5/32\" (1.156\")"},
      {"tap": "1¼ – 11½", "tpi": 11.5, "pitch": "0.0870", "drill": "1-1/2\" (1.500\")"},
      {"tap": "1½ – 11½", "tpi": 11.5, "pitch": "0.0870", "drill": "1-3/4\" (1.750\")"},
      {"tap": "2 – 11½", "tpi": 11.5, "pitch": "0.0870", "drill": "2-7/32\" (2.219\")"},
      {"tap": "2½ – 8", "tpi": 8, "pitch": "0.1250", "drill": "2-21/32\" (2.656\")"},
      {"tap": "3 – 8", "tpi": 8, "pitch": "0.1250", "drill": "3-1/4\" (3.250\")"},
      {"tap": "3½ – 8", "tpi": 8, "pitch": "0.1250", "drill": "3-3/4\" (3.750\")"},
      {"tap": "4 – 8", "tpi": 8, "pitch": "0.1250", "drill": "4-1/4\" (4.250\")"}
    ],

    // OD threading insert PDX (edge of insert to center of 60° cutting edge).
    "odPdx": [
      {"tpi": 11, "pdx": ".0551\""},
      {"tpi": 12, "pdx": ".0551\""},
      {"tpi": 13, "pdx": ".0551\""},
      {"tpi": 14, "pdx": ".0472\""},
      {"tpi": 16, "pdx": ".0394\""},
      {"tpi": 18, "pdx": ".0394\""},
      {"tpi": 20, "pdx": ".0315\""},
      {"tpi": 24, "pdx": ".0315\""}
    ],

    // Thread Dims calculator preset sizes. d = major dia, tpi / p = pitch.
    "presetsInch": [
      {"label": "#0-80 UNF", "d": 0.06, "tpi": 80},
      {"label": "#1-64 UNC", "d": 0.073, "tpi": 64},
      {"label": "#1-72 UNF", "d": 0.073, "tpi": 72},
      {"label": "#2-56 UNC", "d": 0.086, "tpi": 56},
      {"label": "#2-64 UNF", "d": 0.086, "tpi": 64},
      {"label": "#3-48 UNC", "d": 0.099, "tpi": 48},
      {"label": "#4-40 UNC", "d": 0.112, "tpi": 40},
      {"label": "#4-48 UNF", "d": 0.112, "tpi": 48},
      {"label": "#5-40 UNC", "d": 0.125, "tpi": 40},
      {"label": "#6-32 UNC", "d": 0.138, "tpi": 32},
      {"label": "#6-40 UNF", "d": 0.138, "tpi": 40},
      {"label": "#8-32 UNC", "d": 0.164, "tpi": 32},
      {"label": "#8-36 UNF", "d": 0.164, "tpi": 36},
      {"label": "#10-24 UNC", "d": 0.19, "tpi": 24},
      {"label": "#10-32 UNF", "d": 0.19, "tpi": 32},
      {"label": "1/4-20 UNC", "d": 0.25, "tpi": 20},
      {"label": "1/4-28 UNF", "d": 0.25, "tpi": 28},
      {"label": "5/16-18 UNC", "d": 0.3125, "tpi": 18},
      {"label": "5/16-24 UNF", "d": 0.3125, "tpi": 24},
      {"label": "3/8-16 UNC", "d": 0.375, "tpi": 16},
      {"label": "3/8-24 UNF", "d": 0.375, "tpi": 24},
      {"label": "7/16-14 UNC", "d": 0.4375, "tpi": 14},
      {"label": "7/16-20 UNF", "d": 0.4375, "tpi": 20},
      {"label": "1/2-13 UNC", "d": 0.5, "tpi": 13},
      {"label": "1/2-20 UNF", "d": 0.5, "tpi": 20},
      {"label": "9/16-12 UNC", "d": 0.5625, "tpi": 12},
      {"label": "5/8-11 UNC", "d": 0.625, "tpi": 11},
      {"label": "5/8-18 UNF", "d": 0.625, "tpi": 18},
      {"label": "3/4-10 UNC", "d": 0.75, "tpi": 10},
      {"label": "3/4-16 UNF", "d": 0.75, "tpi": 16},
      {"label": "7/8-9 UNC", "d": 0.875, "tpi": 9},
      {"label": "7/8-14 UNF", "d": 0.875, "tpi": 14},
      {"label": "1-8 UNC", "d": 1, "tpi": 8},
      {"label": "1-12 UNF", "d": 1, "tpi": 12},
      {"label": "1-1/8-7 UNC", "d": 1.125, "tpi": 7},
      {"label": "1-1/8-12 UNF", "d": 1.125, "tpi": 12},
      {"label": "1-1/4-7 UNC", "d": 1.25, "tpi": 7},
      {"label": "1-1/4-12 UNF", "d": 1.25, "tpi": 12},
      {"label": "1-3/8-6 UNC", "d": 1.375, "tpi": 6},
      {"label": "1-3/8-12 UNF", "d": 1.375, "tpi": 12},
      {"label": "1-1/2-6 UNC", "d": 1.5, "tpi": 6},
      {"label": "1-1/2-12 UNF", "d": 1.5, "tpi": 12},
      {"label": "1-3/4-5 UNC", "d": 1.75, "tpi": 5},
      {"label": "2-4.5 UNC", "d": 2, "tpi": 4.5}
    ],
    "presetsMetric": [
      {"label": "M1.6x0.35", "d": 1.6, "p": 0.35},
      {"label": "M2x0.4", "d": 2, "p": 0.4},
      {"label": "M2.5x0.45", "d": 2.5, "p": 0.45},
      {"label": "M3x0.5", "d": 3, "p": 0.5},
      {"label": "M3.5x0.6", "d": 3.5, "p": 0.6},
      {"label": "M4x0.7", "d": 4, "p": 0.7},
      {"label": "M5x0.8", "d": 5, "p": 0.8},
      {"label": "M6x1", "d": 6, "p": 1},
      {"label": "M7x1", "d": 7, "p": 1},
      {"label": "M8x1.25", "d": 8, "p": 1.25},
      {"label": "M8x1", "d": 8, "p": 1},
      {"label": "M10x1.5", "d": 10, "p": 1.5},
      {"label": "M10x1.25", "d": 10, "p": 1.25},
      {"label": "M12x1.75", "d": 12, "p": 1.75},
      {"label": "M12x1.25", "d": 12, "p": 1.25},
      {"label": "M14x2", "d": 14, "p": 2},
      {"label": "M16x2", "d": 16, "p": 2},
      {"label": "M20x2.5", "d": 20, "p": 2.5},
      {"label": "M24x3", "d": 24, "p": 3},
      {"label": "M30x3.5", "d": 30, "p": 3.5}
    ]
  },

  // TURNING — one row per tool. category groups the tools (Facing / OD Turning / ID Boring).
  // Each material holds {"sfm": , "ipr": }.
  "turning": {
    "materials": ["Aluminum", "CRS", "303 Stainless", "304 Stainless", "Tool Steel"],
    "tools": [
      {"category": "Facing", "tool": "Rough", "pass": "Rough", "radius": ".0312\"", "grade": "—", "doc": ".030\"–.040\"", "Aluminum": {"sfm": 1400, "ipr": 0.016}, "CRS": {"sfm": 800, "ipr": 0.012}, "303 Stainless": {"sfm": 588, "ipr": 0.01}, "304 Stainless": {"sfm": 400, "ipr": 0.008}, "Tool Steel": {"sfm": 600, "ipr": 0.01}},
      {"category": "Facing", "tool": "Finish", "pass": "Finish", "radius": ".0156\"", "grade": "—", "doc": ".003\"", "Aluminum": {"sfm": 1600, "ipr": 0.006}, "CRS": {"sfm": 1000, "ipr": 0.006}, "303 Stainless": {"sfm": 710, "ipr": 0.004}, "304 Stainless": {"sfm": 710, "ipr": 0.004}, "Tool Steel": {"sfm": 1000, "ipr": 0.004}},
      {"category": "OD Turning", "tool": "Trigon / 80°", "pass": "Rough", "radius": ".0312\"", "grade": "—", "doc": ".060\"–.100\"", "Aluminum": {"sfm": 1400, "ipr": 0.016}, "CRS": {"sfm": 800, "ipr": 0.012}, "303 Stainless": {"sfm": 588, "ipr": 0.01}, "304 Stainless": {"sfm": 400, "ipr": 0.008}, "Tool Steel": {"sfm": 600, "ipr": 0.01}},
      {"category": "OD Turning", "tool": "Trigon / 35°", "pass": "Finish", "radius": ".0156\"", "grade": "—", "doc": ".010\" dia / .003\" face", "Aluminum": {"sfm": 1600, "ipr": 0.006}, "CRS": {"sfm": 1000, "ipr": 0.006}, "303 Stainless": {"sfm": 710, "ipr": 0.004}, "304 Stainless": {"sfm": 710, "ipr": 0.004}, "Tool Steel": {"sfm": 1000, "ipr": 0.004}},
      {"category": "OD Turning", "tool": ".118\" / .200\" Cutoff", "pass": "Rough / Finish", "radius": ".008\"", "grade": "—", "doc": "—", "Aluminum": {"sfm": 800, "ipr": 0.006}, "CRS": {"sfm": 400, "ipr": 0.003}, "303 Stainless": {"sfm": 400, "ipr": 0.002}, "304 Stainless": {"sfm": 350, "ipr": 0.002}, "Tool Steel": {"sfm": 400, "ipr": 0.002}},
      {"category": "ID Boring", "tool": "80° — 1.469\" Min. Bore", "pass": "Rough", "radius": ".0312\"", "grade": "—", "doc": ".060\"–.100\"", "Aluminum": {"sfm": 1400, "ipr": 0.016}, "CRS": {"sfm": 800, "ipr": 0.012}, "303 Stainless": {"sfm": 588, "ipr": 0.01}, "304 Stainless": {"sfm": 400, "ipr": 0.008}, "Tool Steel": {"sfm": 600, "ipr": 0.01}},
      {"category": "ID Boring", "tool": "80° — .929\" Min. Bore", "pass": "Rough", "radius": ".0156\"", "grade": "—", "doc": ".040\"–.050\"", "Aluminum": {"sfm": 1400, "ipr": 0.012}, "CRS": {"sfm": 800, "ipr": 0.008}, "303 Stainless": {"sfm": 400, "ipr": 0.008}, "304 Stainless": {"sfm": 400, "ipr": 0.008}, "Tool Steel": {"sfm": 600, "ipr": 0.008}},
      {"category": "ID Boring", "tool": "80° — .929\" Min. Bore", "pass": "Finish", "radius": ".0156\"", "grade": "—", "doc": ".005\" dia / .002\" face", "Aluminum": {"sfm": 1400, "ipr": 0.006}, "CRS": {"sfm": 1000, "ipr": 0.006}, "303 Stainless": {"sfm": 710, "ipr": 0.004}, "304 Stainless": {"sfm": 710, "ipr": 0.004}, "Tool Steel": {"sfm": 1000, "ipr": 0.004}},
      {"category": "ID Boring", "tool": "Trigon — 1.705\" Min. Bore", "pass": "Finish", "radius": ".0156\"", "grade": "—", "doc": ".005\" dia / .002\" face", "Aluminum": {"sfm": 1600, "ipr": 0.006}, "CRS": {"sfm": 1000, "ipr": 0.006}, "303 Stainless": {"sfm": 710, "ipr": 0.004}, "304 Stainless": {"sfm": 710, "ipr": 0.004}, "Tool Steel": {"sfm": 1000, "ipr": 0.006}},
      {"category": "ID Boring", "tool": "TCMT Anti-Vibe — 1.260\" Min. Bore", "pass": "Finish", "radius": ".0156\"", "grade": "—", "doc": ".005\" dia / .002\" face", "Aluminum": {"sfm": 1600, "ipr": 0.006}, "CRS": {"sfm": 1450, "ipr": 0.004}, "303 Stainless": {"sfm": 710, "ipr": 0.004}, "304 Stainless": {"sfm": 710, "ipr": 0.004}, "Tool Steel": {"sfm": 1200, "ipr": 0.004}}
    ]
  },

  // KEYWAYS — depth to add to keyway from shaft OD. One row per shaft size, one column per keyway width.
  "keyways": {
    "widths": ["1/8", "3/16", "1/4", "5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "11/16", "3/4", "13/16", "7/8", "15/16", "1"],
    "rows": [
      {"shaft": "3/8", "1/8": ".0108", "3/16": ".0231", "1/4": ".0478"},
      {"shaft": "7/16", "1/8": ".0091", "3/16": ".0211", "1/4": ".0398", "5/16": ".0656"},
      {"shaft": "1/2", "1/8": ".0079", "3/16": ".0183", "1/4": ".0325", "5/16": ".055", "3/8": ".0815"},
      {"shaft": "9/16", "1/8": ".0071", "3/16": ".0161", "1/4": ".0289", "5/16": ".0473", "3/8": ".0717"},
      {"shaft": "5/8", "1/8": ".0064", "3/16": ".0144", "1/4": ".0254", "5/16": ".0413", "3/8": ".0625", "7/16": ".0894"},
      {"shaft": "11/16", "1/8": ".0058", "3/16": ".0131", "1/4": ".0236", "5/16": ".0379", "3/8": ".0563", "7/16": ".0776"},
      {"shaft": "3/4", "1/8": ".0053", "3/16": ".0121", "1/4": ".022", "5/16": ".0346", "3/8": ".0511", "7/16": ".0705", "1/2": ".0954"},
      {"shaft": "13/16", "1/8": ".0049", "3/16": ".011", "1/4": ".0198", "5/16": ".0314", "3/8": ".0465", "7/16": ".064", "1/2": ".086"},
      {"shaft": "7/8", "1/8": ".0045", "3/16": ".0102", "1/4": ".0177", "5/16": ".0283", "3/8": ".042", "7/16": ".0583", "1/2": ".0765", "9/16": ".1024"},
      {"shaft": "15/16", "1/8": ".0042", "3/16": ".0092", "1/4": ".0164", "5/16": ".0264", "3/8": ".0392", "7/16": ".0544", "1/2": ".0724", "9/16": ".0939"},
      {"shaft": "1", "1/8": ".004", "3/16": ".0089", "1/4": ".0152", "5/16": ".0246", "3/8": ".0365", "7/16": ".0506", "1/2": ".067", "9/16": ".0866", "5/8": ".1097"},
      {"shaft": "1-1/16", "1/8": ".0037", "3/16": ".0084", "1/4": ".0143", "5/16": ".0228", "3/8": ".0342", "7/16": ".0476", "1/2": ".0625", "9/16": ".0807", "5/8": ".1017"},
      {"shaft": "1-1/8", "1/8": ".0035", "3/16": ".0079", "1/4": ".0136", "5/16": ".021", "3/8": ".0319", "7/16": ".0446", "1/2": ".0581", "9/16": ".0754", "5/8": ".0948", "11/16": ".1173"},
      {"shaft": "1-3/16", "1/8": ".0033", "3/16": ".0077", "1/4": ".0131", "5/16": ".0204", "3/8": ".0304", "7/16": ".0421", "1/2": ".0551", "9/16": ".071", "5/8": ".089", "11/16": ".1096"},
      {"shaft": "1-1/4", "1/8": ".0031", "3/16": ".0071", "1/4": ".0127", "5/16": ".0198", "3/8": ".029", "7/16": ".0397", "1/2": ".0522", "9/16": ".0669", "5/8": ".0838", "11/16": ".1032", "3/4": ".1251"},
      {"shaft": "1-5/16", "1/8": ".003", "3/16": ".0068", "1/4": ".0123", "5/16": ".0191", "3/8": ".0279", "7/16": ".038", "1/2": ".0499", "9/16": ".0633", "5/8": ".0792", "11/16": ".0972", "3/4": ".1175"},
      {"shaft": "1-3/8", "1/8": ".0029", "3/16": ".0065", "1/4": ".012", "5/16": ".0185", "3/8": ".0268", "7/16": ".0364", "1/2": ".0477", "9/16": ".0602", "5/8": ".0752", "11/16": ".0922", "3/4": ".1113", "13/16": ".1329"},
      {"shaft": "1-7/16", "1/8": ".0028", "3/16": ".0062", "1/4": ".0114", "5/16": ".0174", "3/8": ".0254", "7/16": ".0346", "1/2": ".0453", "9/16": ".0573", "5/8": ".0715", "11/16": ".0875", "3/4": ".1056", "13/16": ".1258"},
      {"shaft": "1-1/2", "1/8": ".0027", "3/16": ".0059", "1/4": ".011", "5/16": ".0164", "3/8": ".024", "7/16": ".0328", "1/2": ".0429", "9/16": ".0548", "5/8": ".0682", "11/16": ".0835", "3/4": ".1005", "13/16": ".1196", "7/8": ".1409"},
      {"shaft": "1-9/16", "1/8": ".0026", "3/16": ".0057", "1/4": ".0107", "5/16": ".0158", "3/8": ".0231", "7/16": ".0309", "1/2": ".0412", "9/16": ".0524", "5/8": ".0653", "11/16": ".0798", "3/4": ".0956", "13/16": ".114", "7/8": ".1341"},
      {"shaft": "1-5/8", "1/8": ".0025", "3/16": ".0053", "1/4": ".0105", "5/16": ".0153", "3/8": ".0221", "7/16": ".0291", "1/2": ".0395", "9/16": ".0503", "5/8": ".0625", "11/16": ".0754", "3/4": ".0927", "13/16": ".1089", "7/8": ".1279", "15/16": ".1489"},
      {"shaft": "1-11/16", "1/8": ".0024", "3/16": ".0052", "1/4": ".0102", "5/16": ".0147", "3/8": ".0214", "7/16": ".0282", "1/2": ".0383", "9/16": ".0483", "5/8": ".0601", "11/16": ".0733", "3/4": ".088", "13/16": ".1043", "7/8": ".1223", "15/16": ".1422"},
      {"1": ".157", "shaft": "1-3/4", "1/8": ".0023", "3/16": ".0051", "1/4": ".0099", "5/16": ".0142", "3/8": ".0201", "7/16": ".0274", "1/2": ".0371", "9/16": ".0468", "5/8": ".0587", "11/16": ".0704", "3/4": ".0844", "13/16": ".1001", "7/8": ".1173", "15/16": ".1368"},
      {"1": ".1504", "shaft": "1-13/16", "1/8": ".0022", "3/16": ".005", "1/4": ".0095", "5/16": ".0136", "3/8": ".0198", "7/16": ".0265", "1/2": ".0355", "9/16": ".0448", "5/8": ".0556", "11/16": ".0678", "3/4": ".0812", "13/16": ".0962", "7/8": ".1126", "15/16": ".1307"},
      {"1": ".1446", "shaft": "1-7/8", "1/8": ".0021", "3/16": ".0048", "1/4": ".0093", "5/16": ".013", "3/8": ".019", "7/16": ".0257", "1/2": ".0339", "9/16": ".0433", "5/8": ".0536", "11/16": ".0654", "3/4": ".0783", "13/16": ".0927", "7/8": ".1084", "15/16": ".1256"},
      {"1": ".1391", "shaft": "1-15/16", "1/8": ".002", "3/16": ".0046", "1/4": ".009", "5/16": ".0127", "3/8": ".0184", "7/16": ".025", "1/2": ".0328", "9/16": ".0418", "5/8": ".0518", "11/16": ".0631", "3/4": ".0755", "13/16": ".0893", "7/8": ".1035", "15/16": ".1197"},
      {"1": ".134", "shaft": "2", "1/8": ".002", "3/16": ".0044", "1/4": ".0088", "5/16": ".0124", "3/8": ".0179", "7/16": ".0243", "1/2": ".0317", "9/16": ".0404", "5/8": ".0502", "11/16": ".061", "3/4": ".0731", "13/16": ".0863", "7/8": ".1007", "15/16": ".1167"},
      {"1": ".1293", "shaft": "2-1/16", "1/8": ".0019", "3/16": ".0043", "1/4": ".0083", "5/16": ".0117", "3/8": ".0173", "7/16": ".0236", "1/2": ".0308", "9/16": ".0391", "5/8": ".0485", "11/16": ".059", "3/4": ".0706", "13/16": ".0834", "7/8": ".0974", "15/16": ".1127"},
      {"1": ".125", "shaft": "2-1/8", "1/8": ".0018", "3/16": ".0042", "1/4": ".0078", "5/16": ".0115", "3/8": ".0168", "7/16": ".0229", "1/2": ".0299", "9/16": ".0379", "5/8": ".0465", "11/16": ".0572", "3/4": ".0684", "13/16": ".081", "7/8": ".0943", "15/16": ".1091"},
      {"1": ".1214", "shaft": "2-3/16", "1/8": ".0018", "3/16": ".0041", "1/4": ".0073", "5/16": ".0109", "3/8": ".0163", "7/16": ".0222", "1/2": ".0291", "9/16": ".0368", "5/8": ".0455", "11/16": ".0555", "3/4": ".0667", "13/16": ".0783", "7/8": ".0914", "15/16": ".1055"},
      {"1": ".1173", "shaft": "2-1/4", "1/8": ".0017", "3/16": ".004", "1/4": ".007", "5/16": ".0107", "3/8": ".0159", "7/16": ".0216", "1/2": ".0282", "9/16": ".0358", "5/8": ".0442", "11/16": ".054", "3/4": ".0644", "13/16": ".076", "7/8": ".0886", "15/16": ".1023"},
      {"1": ".1136", "shaft": "2-5/16", "1/8": ".0017", "3/16": ".0039", "1/4": ".0068", "5/16": ".0104", "3/8": ".0155", "7/16": ".0209", "1/2": ".0274", "9/16": ".0346", "5/8": ".0431", "11/16": ".0523", "3/4": ".0626", "13/16": ".0737", "7/8": ".086", "15/16": ".0993"},
      {"1": ".1104", "shaft": "2-3/8", "1/8": ".0016", "3/16": ".0037", "1/4": ".0066", "5/16": ".0102", "3/8": ".0152", "7/16": ".0202", "1/2": ".0267", "9/16": ".0338", "5/8": ".0419", "11/16": ".0509", "3/4": ".0609", "13/16": ".0717", "7/8": ".0836", "15/16": ".0965"},
      {"1": ".1073", "shaft": "2-7/16", "1/8": ".0016", "3/16": ".0036", "1/4": ".0064", "5/16": ".01", "3/8": ".0149", "7/16": ".0198", "1/2": ".026", "9/16": ".0329", "5/8": ".0408", "11/16": ".0495", "3/4": ".0592", "13/16": ".069", "7/8": ".0813", "15/16": ".0942"},
      {"1": ".1044", "shaft": "2-1/2", "1/8": ".0016", "3/16": ".0035", "1/4": ".0063", "5/16": ".0098", "3/8": ".0146", "7/16": ".0194", "1/2": ".0253", "9/16": ".032", "5/8": ".0398", "11/16": ".0483", "3/4": ".0577", "13/16": ".0679", "7/8": ".0792", "15/16": ".0911"},
      {"1": ".1016", "shaft": "2-9/16", "1/8": ".0015", "3/16": ".0034", "1/4": ".0061", "5/16": ".0094", "3/8": ".0142", "7/16": ".0189", "1/2": ".0247", "9/16": ".0313", "5/8": ".0387", "11/16": ".047", "3/4": ".0561", "13/16": ".0661", "7/8": ".0771", "15/16": ".0889"},
      {"1": ".0989", "shaft": "2-5/8", "1/8": ".0015", "3/16": ".0033", "1/4": ".006", "5/16": ".009", "3/8": ".0139", "7/16": ".0185", "1/2": ".0242", "9/16": ".0305", "5/8": ".0378", "11/16": ".0459", "3/4": ".0548", "13/16": ".0645", "7/8": ".0751", "15/16": ".0867"},
      {"1": ".0968", "shaft": "2-11/16", "1/8": ".0014", "3/16": ".0032", "1/4": ".0059", "5/16": ".0089", "3/8": ".0136", "7/16": ".018", "1/2": ".0236", "9/16": ".0293", "5/8": ".037", "11/16": ".0447", "3/4": ".0531", "13/16": ".0629", "7/8": ".0733", "15/16": ".0845"},
      {"1": ".0941", "shaft": "2-3/4", "1/8": ".0014", "3/16": ".0031", "1/4": ".0058", "5/16": ".0088", "3/8": ".0133", "7/16": ".0176", "1/2": ".023", "9/16": ".0289", "5/8": ".036", "11/16": ".0437", "3/4": ".0521", "13/16": ".0614", "7/8": ".0715", "15/16": ".0824"},
      {"1": ".092", "shaft": "2-13/16", "1/8": ".0014", "3/16": ".0031", "1/4": ".0057", "5/16": ".0086", "3/8": ".0129", "7/16": ".0172", "1/2": ".0226", "9/16": ".0285", "5/8": ".0352", "11/16": ".0427", "3/4": ".051", "13/16": ".06", "7/8": ".0699", "15/16": ".0804"},
      {"1": ".0898", "shaft": "2-7/8", "1/8": ".0013", "3/16": ".003", "1/4": ".0056", "5/16": ".0084", "3/8": ".0126", "7/16": ".0168", "1/2": ".022", "9/16": ".0278", "5/8": ".0344", "11/16": ".0417", "3/4": ".0498", "13/16": ".0587", "7/8": ".0682", "15/16": ".0786"},
      {"1": ".0877", "shaft": "2-15/16", "1/8": ".0013", "3/16": ".003", "1/4": ".0054", "5/16": ".0083", "3/8": ".0122", "7/16": ".0164", "1/2": ".0216", "9/16": ".0273", "5/8": ".0336", "11/16": ".0408", "3/4": ".0487", "13/16": ".0573", "7/8": ".067", "15/16": ".0769"},
      {"1": ".0858", "shaft": "3", "1/8": ".0013", "3/16": ".0029", "1/4": ".0053", "5/16": ".0081", "3/8": ".0119", "7/16": ".0161", "1/2": ".0211", "9/16": ".0266", "5/8": ".0329", "11/16": ".04", "3/4": ".0477", "13/16": ".0561", "7/8": ".0652", "15/16": ".0752"},
      {"1": ".0841", "shaft": "3-1/16", "3/16": ".0029", "1/4": ".0052", "5/16": ".008", "3/8": ".0116", "7/16": ".0158", "1/2": ".0207", "9/16": ".0261", "5/8": ".0322", "11/16": ".0391", "3/4": ".0466", "13/16": ".0549", "7/8": ".0639", "15/16": ".0735"},
      {"1": ".0821", "shaft": "3-1/8", "3/16": ".0028", "1/4": ".0051", "5/16": ".0078", "3/8": ".0114", "7/16": ".0155", "1/2": ".0202", "9/16": ".0256", "5/8": ".0316", "11/16": ".0382", "3/4": ".0455", "13/16": ".0538", "7/8": ".0625", "15/16": ".0721"},
      {"1": ".0805", "shaft": "3-3/16", "1/4": ".005", "5/16": ".0076", "3/8": ".0112", "7/16": ".0152", "1/2": ".0198", "9/16": ".0251", "5/8": ".031", "11/16": ".0375", "3/4": ".0447", "13/16": ".0526", "7/8": ".0613", "15/16": ".0705"},
      {"1": ".0789", "shaft": "3-1/4", "1/4": ".0049", "5/16": ".0075", "3/8": ".011", "7/16": ".0149", "1/2": ".0194", "9/16": ".0246", "5/8": ".0304", "11/16": ".0369", "3/4": ".0439", "13/16": ".0517", "7/8": ".06", "15/16": ".0691"},
      {"1": ".0773", "shaft": "3-5/16", "1/4": ".0048", "5/16": ".0074", "3/8": ".0108", "7/16": ".0146", "1/2": ".0191", "9/16": ".0241", "5/8": ".0298", "11/16": ".0362", "3/4": ".043", "13/16": ".0506", "7/8": ".0589", "15/16": ".0677"},
      {"1": ".0752", "shaft": "3-3/8", "1/4": ".0047", "5/16": ".0072", "3/8": ".0106", "7/16": ".0143", "1/2": ".0187", "9/16": ".0237", "5/8": ".0292", "11/16": ".0354", "3/4": ".0421", "13/16": ".0497", "7/8": ".0578", "15/16": ".0664"},
      {"1": ".0744", "shaft": "3-7/16", "1/4": ".0046", "5/16": ".0071", "3/8": ".0104", "7/16": ".014", "1/2": ".0184", "9/16": ".0232", "5/8": ".0287", "11/16": ".0348", "3/4": ".0414", "13/16": ".0487", "7/8": ".0567", "15/16": ".0651"},
      {"1": ".073", "shaft": "3-1/2", "1/4": ".0045", "5/16": ".007", "3/8": ".0102", "7/16": ".0138", "1/2": ".018", "9/16": ".0228", "5/8": ".0282", "11/16": ".0342", "3/4": ".0406", "13/16": ".0478", "7/8": ".0555", "15/16": ".064"},
      {"1": ".0716", "shaft": "3-9/16", "1/4": ".0044", "5/16": ".0069", "3/8": ".0101", "7/16": ".0135", "1/2": ".0178", "9/16": ".0224", "5/8": ".0277", "11/16": ".0335", "3/4": ".04", "13/16": ".047", "7/8": ".0546", "15/16": ".0628"},
      {"1": ".0704", "shaft": "3-5/8", "1/4": ".0043", "5/16": ".0067", "3/8": ".01", "7/16": ".0133", "1/2": ".0174", "9/16": ".022", "5/8": ".0269", "11/16": ".0329", "3/4": ".0392", "13/16": ".0461", "7/8": ".0536", "15/16": ".0618"},
      {"1": ".0691", "shaft": "3-11/16", "1/4": ".0042", "5/16": ".0066", "3/8": ".0099", "7/16": ".0131", "1/2": ".0171", "9/16": ".0216", "5/8": ".0266", "11/16": ".0324", "3/4": ".0386", "13/16": ".0454", "7/8": ".0528", "15/16": ".0607"},
      {"1": ".0679", "shaft": "3-3/4", "1/4": ".0042", "5/16": ".0065", "3/8": ".0098", "7/16": ".0128", "1/2": ".0168", "9/16": ".0213", "5/8": ".0263", "11/16": ".0318", "3/4": ".038", "13/16": ".0447", "7/8": ".0519", "15/16": ".0596"},
      {"1": ".0667", "shaft": "3-13/16", "1/4": ".0041", "5/16": ".0064", "3/8": ".0097", "7/16": ".0126", "1/2": ".0166", "9/16": ".0209", "5/8": ".0258", "11/16": ".0313", "3/4": ".0379", "13/16": ".0438", "7/8": ".0509", "15/16": ".0584"},
      {"1": ".0656", "shaft": "3-7/8", "1/4": ".0041", "5/16": ".0063", "3/8": ".0096", "7/16": ".0124", "1/2": ".0163", "9/16": ".0206", "5/8": ".0254", "11/16": ".0308", "3/4": ".0367", "13/16": ".0431", "7/8": ".05", "15/16": ".0576"},
      {"1": ".0645", "shaft": "3-15/16", "1/4": ".0041", "5/16": ".0062", "3/8": ".0095", "7/16": ".0123", "1/2": ".0161", "9/16": ".0202", "5/8": ".025", "11/16": ".0302", "3/4": ".0361", "13/16": ".0424", "7/8": ".0492", "15/16": ".0566"},
      {"1": ".0636", "shaft": "4", "1/4": ".004", "5/16": ".0061", "3/8": ".0094", "7/16": ".0121", "1/2": ".016", "9/16": ".0199", "5/8": ".0246", "11/16": ".0297", "3/4": ".0355", "13/16": ".0417", "7/8": ".0485", "15/16": ".0557"}
    ]
  },

  // COUNTERSINKS — angle by machine and thread system.
  "countersinks": [
    {"machine": "Haas", "inch": "82°", "metric": "90°"},
    {"machine": "Mazak", "inch": "82°", "metric": "90°"}
  ],

  // REFERENCE tab
  "reference": {
    // Charts & links. link = one or more files in the charts folder (comma separated), a PDF, or a web address.
    "charts": [
      {"title": "GARR Technical Advisor", "sub": "Speeds, feeds & tool selection calculator", "link": "https://www.garrtool.com/calc/index.html"},
      {"title": "Garr Endmills", "sub": "VRX Series — Milling Guide", "link": "charts/garr-vrx-endmills.jpg"},
      {"title": "Guhring Cut Taps", "sub": "SFM Reference Chart", "link": "charts/guhring-cut-taps.jpg"},
      {"title": "Guhring Form Taps", "sub": "SFM Reference Chart", "link": "charts/guhring-form-taps.jpg"},
      {"title": "HSS Drill Chart", "sub": "YG-1 Straight Shank — Recommended Cutting Conditions", "link": "charts/yg1-hss-drill-1.jpg, charts/yg1-hss-drill-2.jpg"},
      {"title": "OSG HY-PRO CARB Drill Chart", "sub": "HP253 · HP255 · HP258", "link": "charts/osg-hy-pro-carb-1.jpg, charts/osg-hy-pro-carb-2.jpg"},
      {"title": "Sumitomo Face Mills", "sub": "WEX Series", "link": "charts/sumitomo-wex.jpg"},
      {"title": "Sumitomo Flat Bottom Drills", "sub": "WDX Series — Inserts 4D Technical Data", "link": "charts/sumitomo-wdx.jpg"},
      {"title": "Sumitomo Spade Drills", "sub": "SMD Series — Cutting Conditions", "link": "charts/sumitomo-smd.jpg"},
      {"title": "Tap Drill Chart", "sub": "Starrett — Inch & Metric", "link": "charts/tap-drill-chart.jpg"}
    ],

    // CAM hole size chart (all values in inches).
    "camInch": [
      {"thread": "#4-40", "tap": "0.089\"", "minor": "0.0849\"", "nominal": "0.112\""},
      {"thread": "#5-40", "tap": "0.1015\"", "minor": "0.0979\"", "nominal": "0.125\""},
      {"thread": "#6-32", "tap": "0.1065\"", "minor": "0.1042\"", "nominal": "0.138\""},
      {"thread": "#8-32", "tap": "0.136\"", "minor": "0.1302\"", "nominal": "0.164\""},
      {"thread": "#10-24", "tap": "0.1495\"", "minor": "0.1449\"", "nominal": "0.19\""},
      {"thread": "1/4\"-20", "tap": "0.201\"", "minor": "0.1959\"", "nominal": "0.25\""},
      {"thread": "5/16\"-18", "tap": "0.257\"", "minor": "0.2524\"", "nominal": "0.3125\""},
      {"thread": "3/8\"-16", "tap": "0.3125\"", "minor": "0.3073\"", "nominal": "0.375\""},
      {"thread": "7/16\"-14", "tap": "0.368\"", "minor": "0.3602\"", "nominal": "0.4375\""},
      {"thread": "1/2\"-13", "tap": "0.4219\"", "minor": "0.4167\"", "nominal": "0.5\""},
      {"thread": "9/16\"-12", "tap": "0.4844\"", "minor": "0.4723\"", "nominal": "0.5625\""},
      {"thread": "5/8\"-11", "tap": "0.5312\"", "minor": "0.5266\"", "nominal": "0.625\""},
      {"thread": "3/4\"-10", "tap": "0.6562\"", "minor": "0.6417\"", "nominal": "0.75\""},
      {"thread": "7/8\"-9", "tap": "0.7656\"", "minor": "0.7547\"", "nominal": "0.875\""},
      {"thread": "1\"-8", "tap": "0.875\"", "minor": "0.8647\"", "nominal": "1\""}
    ],
    "camMetric": [
      {"thread": "M3", "tap": "0.0984\"", "minor": "0.0968\"", "nominal": "0.1181\""},
      {"thread": "M4", "tap": "0.1299\"", "minor": "0.1276\"", "nominal": "0.1574\""},
      {"thread": "M5", "tap": "0.1653\"", "minor": "0.1628\"", "nominal": "0.1969\""},
      {"thread": "M6", "tap": "0.1969\"", "minor": "0.1936\"", "nominal": "0.2362\""},
      {"thread": "M8", "tap": "0.2677\"", "minor": "0.2617\"", "nominal": "0.3149\""},
      {"thread": "M10", "tap": "0.3346\"", "minor": "0.3298\"", "nominal": "0.3937\""},
      {"thread": "M12", "tap": "0.4015\"", "minor": "0.3979\"", "nominal": "0.4724\""},
      {"thread": "M14", "tap": "0.4724\"", "minor": "0.4659\"", "nominal": "0.5511\""},
      {"thread": "M16", "tap": "0.5511\"", "minor": "0.5447\"", "nominal": "0.6299\""},
      {"thread": "M20", "tap": "0.6889\"", "minor": "0.6089\"", "nominal": "0.7874\""},
      {"thread": "M24", "tap": "—", "minor": "0.8170\"", "nominal": "0.9449\""},
      {"thread": "M30", "tap": "—", "minor": "1.0319\"", "nominal": "1.1811\""},
      {"thread": "M36", "tap": "—", "minor": "1.2469\"", "nominal": "1.4137\""}
    ],

    // Integrex reference. Rows with the same section are grouped; note shows under the section title.
    "integrex": [
      {"section": "Stock to Leave — OD", "note": "", "item": "Mazatrol", "value": ".010\" Dia. / .003\" Face"},
      {"section": "Stock to Leave — OD", "note": "", "item": "GibbsCAM", "value": ".005\" Rad. / .003\" Face"},
      {"section": "Stock to Leave — Groove / Cutoff", "note": "", "item": "Mazatrol", "value": ".002\" Finish Allowance"},
      {"section": "Stock to Leave — Groove / Cutoff", "note": "", "item": "GibbsCAM", "value": ".002\" Rad. / .002\" Face"},
      {"section": "Stock to Leave — ID", "note": "", "item": "Mazatrol", "value": ".005\" Dia. / .002\" Face"},
      {"section": "Stock to Leave — ID", "note": "", "item": "GibbsCAM", "value": ".0025\" Rad. / .002\" Face"},
      {"section": "Threading Undercut", "note": "35° / .0156\" Radius Insert", "item": "GibbsCAM", "value": ".015\" under minor / 1½ threads wide"},
      {"section": "Threading Undercut", "note": "35° / .0156\" Radius Insert", "item": "Mazatrol", "value": "—"},
      {"section": "Parameters", "note": "", "item": "Cutoff Max RPM", "value": "TC49"},
      {"section": "Parameters", "note": "", "item": "Bore Retract Clearance", "value": "TC38 (.010\")"},
      {"section": "Mazatrol Pecking Cycles", "note": "", "item": "Peck 1", "value": "High-Speed Peck"},
      {"section": "Mazatrol Pecking Cycles", "note": "", "item": "Peck 2", "value": "Full Retract Peck"},
      {"section": "OD / ID Gripping", "note": "", "item": "ID Chucking", "value": "M272"},
      {"section": "OD / ID Gripping", "note": "", "item": "OD Chucking", "value": "M273"},
      {"section": "Tailstock", "note": "Ref. i300 Program: LIVECENTER", "item": "Tailstock Position 1", "value": "M841"},
      {"section": "Tailstock", "note": "Ref. i300 Program: LIVECENTER", "item": "Turning Spindle Stop", "value": "M205"},
      {"section": "Tailstock", "note": "Ref. i300 Program: LIVECENTER", "item": "Tailstock Reverse (Home)", "value": "M232"},
      {"section": "Thru Spindle Air", "note": "", "item": "i300", "value": "M132 — Turning Only"},
      {"section": "Thru Spindle Air", "note": "", "item": "i200", "value": "M132 — Turning & Milling"}
    ],

    // GD&T symbols and definitions.
    "gdt": [
      {"category": "Form", "symbol": "⏤", "name": "Straightness", "definition": "Constrains a surface or axis to lie within two parallel lines. No datum required."},
      {"category": "Form", "symbol": "⏥", "name": "Flatness", "definition": "Constrains a surface to lie within two parallel planes. No datum required."},
      {"category": "Form", "symbol": "○", "name": "Circularity", "definition": "Each cross-section of a cylindrical feature must lie within two concentric circles. No datum."},
      {"category": "Form", "symbol": "⌭", "name": "Cylindricity", "definition": "All points on a cylindrical surface must lie within two coaxial cylinders. No datum."},
      {"category": "Profile", "symbol": "⌒", "name": "Profile of a Line", "definition": "Constrains a cross-sectional profile to a theoretically exact shape. May or may not reference a datum."},
      {"category": "Profile", "symbol": "⌓", "name": "Profile of a Surface", "definition": "Constrains an entire surface to a theoretically exact shape and location. May reference datums."},
      {"category": "Orientation", "symbol": "∠", "name": "Angularity", "definition": "Controls a surface or axis at a specified angle relative to a datum. Requires a datum."},
      {"category": "Orientation", "symbol": "⊥", "name": "Perpendicularity", "definition": "Controls a surface or axis at exactly 90° to a datum. Requires a datum."},
      {"category": "Orientation", "symbol": "∥", "name": "Parallelism", "definition": "Controls a surface or axis parallel to a datum within a tolerance zone. Requires a datum."},
      {"category": "Location", "symbol": "⊕", "name": "True Position", "definition": "Controls the location and/or orientation of a feature relative to datums. Most common GD&T callout."},
      {"category": "Location", "symbol": "◎", "name": "Concentricity", "definition": "All median points of a diametrically opposed surface must lie within a cylindrical zone coaxial to a datum. Requires a datum."},
      {"category": "Location", "symbol": "⌖", "name": "Symmetry", "definition": "All median points of a feature must lie within two parallel planes equally disposed about a datum plane. Requires a datum."},
      {"category": "Runout", "symbol": "↗", "name": "Circular Runout", "definition": "Controls the variation in a single cross-section as a part is rotated about a datum axis. Requires a datum."},
      {"category": "Runout", "symbol": "⌰", "name": "Total Runout", "definition": "Controls the variation of an entire surface as a part is rotated about a datum axis. Requires a datum."},
      {"category": "Modifiers", "symbol": "Ⓜ", "name": "Maximum Material Condition (MMC)", "definition": "The condition where a feature contains the most material — smallest hole, largest pin."},
      {"category": "Modifiers", "symbol": "Ⓛ", "name": "Least Material Condition (LMC)", "definition": "The condition where a feature contains the least material — largest hole, smallest pin."},
      {"category": "Modifiers", "symbol": "Ⓢ", "name": "Regardless of Feature Size (RFS)", "definition": "The tolerance applies at any produced size of the feature. Default when no modifier shown."},
      {"category": "Modifiers", "symbol": "Ⓟ", "name": "Projected Tolerance Zone", "definition": "The tolerance zone extends beyond the surface of the part, used for fastener clearance."},
      {"category": "Modifiers", "symbol": "Ⓕ", "name": "Free State", "definition": "Measurement taken with the part unconstrained — used for flexible or non-rigid parts."},
      {"category": "Modifiers", "symbol": "⌀", "name": "Diameter Symbol", "definition": "Indicates the tolerance zone is cylindrical (3D) rather than between two parallel planes."},
      {"category": "Modifiers", "symbol": "R", "name": "Radius", "definition": "Indicates a radius dimension. The center may be anywhere within the tolerance zone."},
      {"category": "Modifiers", "symbol": "CR", "name": "Controlled Radius", "definition": "A smooth, fair curve with no flats or reversals. More restrictive than standard radius."},
      {"category": "Modifiers", "symbol": "□", "name": "Square", "definition": "Indicates the tolerance or dimension applies to a square feature."},
      {"category": "Modifiers", "symbol": "ST", "name": "Statistical Tolerance", "definition": "The tolerance is based on statistical process control — parts may be accepted on a statistical basis."}
    ]
  }
};
