import fs from 'fs';
import Api from './../src/api';

let file = 'data/champions.json';

Api.getChampions('euw').then((res) => {
    fs.writeFile(file, JSON.stringify(res.body), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('File was saved', file);
    });
});
