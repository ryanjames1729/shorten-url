var fs = require('fs');
const { request } = require('http');

const testing = () => {
    request('https://api.netlify.com/api/v1/forms/62acdfcdd1e60d00096333ec/submissions', function(err, response, body){
        const form = JSON.parse(body);
        console.log(form)
        
        const data = [];

        for(let item in form) {
            let destination = form.url;
            if(destination.indexOf("://") === -1) {
                destination = "https://" + destination;
            }
            data.push("/" + url.route + "  " + destination + "  302");
        }

        console.log(data);
        

        // fs.writeFile(form.referrer + '/_redirects', data.join('\n'), function(err) {
        //     if(err) {
        //         return console.log(err);
        //     } else {
        //         return console.log('New routes saved.')
        //     }
        // });
        return;
    });
}

exports.handler = async function (event) {
    request('https://api.netlify.com/api/v1/forms/62acdfcdd1e60d00096333ec/submissions', function(err, response, body){
        const form = JSON.parse(body);
        console.log(form)
        
        const data = [];

        for(let item in form) {
            let destination = form.url;
            if(destination.indexOf("://") === -1) {
                destination = "https://" + destination;
            }
            data.push("/" + url.route + "  " + destination + "  302");
        }

        console.log(data);
        

        // fs.writeFile(form.referrer + '/_redirects', data.join('\n'), function(err) {
        //     if(err) {
        //         return console.log(err);
        //     } else {
        //         return console.log('New routes saved.')
        //     }
        // });
    });

    

    return {
        statusCode: 200,

    }
}