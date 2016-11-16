import fs from 'fs';
import Api from './../src/api';

let file = 'data/realms.json';

Api.getRealms('euw').end((err, res) => {
    let content = JSON.parse(res.text);
    fs.writeFile(file, JSON.stringify(content), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('File was saved', file);
    });
});
