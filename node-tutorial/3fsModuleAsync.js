const { readFile, writeFile } = require('fs')

readFile('./tempText1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(Error);
        return
    }
    const first = result
    writeFile('./tempText2.txt', 'This is the text from temText1.txt:' + (first), (err, result) => {
        if (err) {
            console.log(Error);
            return
        }
        console.log(result);

    }
    )
}
)