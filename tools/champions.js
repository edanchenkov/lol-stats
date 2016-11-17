import fs from 'fs';
import RiotApi from './../server/RiotApi';

let file = 'data/champions.json';

RiotApi.getChampions('euw').end((err, res) => {
    let champions = JSON.parse(res.text).data;
    let content = {};

    for (let key in champions) {
        if (champions.hasOwnProperty(key)) {
            content[champions[key].id] = champions[key];
        }
    }

    fs.writeFile(file, JSON.stringify(content), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('File was saved', file);
    });
});
