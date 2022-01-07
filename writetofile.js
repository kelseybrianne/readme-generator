// Function to write a new file
function writeToFile(fileName, data) {

    fs.writeFile(
        fileName,
        data,
        (err) => 
        err ? console.error(err) : console.log('Commit logged!')
    )
}

module.exports = writeToFile;