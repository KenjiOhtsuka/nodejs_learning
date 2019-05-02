const fs = require('fs')

// Read file in Sync
const data = fs.readFileSync('read_file.js', 'utf-8')
console.log('=== Start output the file ===')
console.log(data)
console.log('=== End output the file ==')

// Read file in Async
fs.readFile('read_file.js', 'utf-8', readHandler)
function readHandler (err, data) {
    console.log('=== Start output the file ===')
    console.log(data)
    console.log('=== End output the file ==')
}

// This line is output before Async output
console.log("[end script]")
