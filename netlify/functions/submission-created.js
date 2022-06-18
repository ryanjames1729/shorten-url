const { url } = require('inspector');

exports.handler = async function (event) {
    const form = JSON.parse(event.body).payload.data;
    console.log(form)
    const fs = require('fs');
    const data = [];

    for(let item in form) {
        let destination = form.url;
        if(destination.indexOf("://") === -1) {
            destination = "https://" + destination;
        }
        data.push("/" + url.route + "  " + destination + "  302");
    }

    

    fs.writeFile(form.referrer + '/_redirects', data.join('\n'), function(err) {
        if(err) {
            return console.log(err);
        } else {
            return console.log('New routes saved.')
        }
    });

    return {
        statusCode: 200,

    }
}