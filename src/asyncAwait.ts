import fs from "fs";
export default async function myfunc() {
    await fs.readFile(`${process.cwd()}/data/data.text`, (err, data) => {
        if (!err) {
            console.log(data);
        }
    })


    console.log('The control flow jumps in this line of code and it will return the dada as soon as it complete the data fetchin process...');

}