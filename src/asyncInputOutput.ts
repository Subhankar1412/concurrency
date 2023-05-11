import fs from "fs";
export default function asyncInOut() {

    fs.readFile(`${process.cwd()}/data/data.text`, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    });


    console.log('execute this file before finishing the file to read...');

}
