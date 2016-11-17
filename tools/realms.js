import fs from 'fs';
import RiotApi from './../server/RiotApi';

let file = 'data/realms.json';

RiotApi.getRealms('euw').end((err, res) => {
    let content = JSON.parse(res.text);
    fs.writeFile(file, JSON.stringify(content), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('File was saved', file);
    });
});
