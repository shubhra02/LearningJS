const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Shubhra')
fs.appendFileSync('notes.txt', 'This is my first node js code')