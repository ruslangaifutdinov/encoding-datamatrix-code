const bwipjs = require("bwip-js");
const fs = require("fs");

let DATAMATRIXFILE = fs
  .readFileSync("./input/datamatrix.txt")
  .toString()
  .split("\n");

for (let i = 0; i <= DATAMATRIXFILE.length - 1; i++) {
  bwipjs.toBuffer(
    {
      bcid: "gs1datamatrix", // Barcode type
      text: DATAMATRIXFILE[i], // Text to encode
      scale: 1, // 3x scaling factor
      height: 15, // Bar height, in millimeters
      includetext: false, // Show human-readable text
      textxalign: "center", // Always good to set this
    },
    function (err, png) {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        fs.writeFileSync(`./outputs/datamatrix_${[i]}.png`, png);
        console.log(`datamatrix_${[i]} create`);
      }
    }
  );
}
