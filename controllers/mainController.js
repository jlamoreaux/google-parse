const formidable = require('formidable');
const fs = require('fs');

exports.homePage = (req, res) => {
    res.render('index', { title: 'Google SSO JSON Parser' });
}

exports.makePretty = (req, res) => {
    // const jsonFile = JSON.parse(req.body.json_file);
    // const json = JSON.parse(req.body.json_text);
    // console.log(json.web.client_id);
    // res.render('index', { title: 'Voila', json });
}

exports.parseFile = (req, res, next) => {
    const form = new formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        console.log(req.files);
        console.log("fields:", fields);
        console.log("files:", files.json_file.path);
        const contents = fs.readFileSync(files.json_file.path);
        const jsonContent = JSON.parse(contents);
        console.log(jsonContent);
        res.render("index", { json: jsonContent });
    });

}