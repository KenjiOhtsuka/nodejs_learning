const fs = require('fs')

fs.readFile('read_file_2.js', 'utf-8', function (err, data) {
    console.log('=== Start output the file ===')
    console.log(data)
    console.log('=== End output the file ===')
})

// This line is output before Async output
console.log("[end script]")