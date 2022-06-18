const { url } = require('inspector');
const { isDataView } = require('util/types');

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
        isDataView.push("/" + url.route + "  " + destination + "  302");
    }

    console.log(data);
    

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