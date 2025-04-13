const fs = require('fs');
const path = require('path');

// Get command line arguments
const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

if (!inputFilePath || !outputFilePath) {
  console.error('❌ Usage: node convert-to-csv.js <input-file> <output-file>');
  process.exit(1);
}

// Read the file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`❌ Error reading file: ${err.message}`);
    process.exit(1);
  }

  // Parse lines and columns (tab-delimited)
  const lines = data.trim().split('\n');
  const rows = lines.map(line => line.trim().split('\t'));

  // Convert to CSV format
  const csvContent = rows.map(cols =>
    cols.map(col => `"${col.replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  // Write to specified output file
  fs.writeFile(outputFilePath, csvContent, 'utf8', err => {
    if (err) {
      console.error(`❌ Error writing CSV: ${err.message}`);
      process.exit(1);
    }
    console.log(`✅ CSV file written: ${outputFilePath}`);
  });
});
