const request = require('request');

let url = `https://api.simsimi.net/v1/?text=${text}&lang=vi`;

request(url, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    msg.reply(body.success);
});

const sim = (text) => {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error) reject(error)
            resolve(body)
            console.log(body)
        })
    })
}

module.exports = {
    simsimi: (text) => sim(text)
}