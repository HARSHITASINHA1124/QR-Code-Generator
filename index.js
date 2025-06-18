import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

inquirer.prompt([
    {
        type:'input',
        name: 'url',
        message: 'Enter the URL / link'
    }
])
.then(answers => {
    console.log("Your entered URL : ");
    console.log(answers);
    const url = answers.url;
    var qr_png = qr.image(url,{ type: 'png'});    //default = png\
    const writeStream = fs.createWriteStream('qr_img.png');
    qr_png.pipe(writeStream);
    fs.writeFile("user-inputs.txt",url,(err) => {
    if (err) throw err;
    console.log("File has been saved");
    });
});
