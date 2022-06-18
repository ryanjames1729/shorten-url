exports.handler = async function (event) {
    const form = JSON.parse(event.body).payload.data;
    console.log(form)
    const fs = require('fs');
    const data = form.url + ' ' + form.route;

    fs.writeFile('../../_redirects', data, (err) => {
        if (err) throw err;
    });

    return {
        statusCode: 200,

    }
}