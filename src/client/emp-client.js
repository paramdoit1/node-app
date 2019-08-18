const request = require('request');

const getEmployeeList = (data, httpRequest) => new Promise(
    (resolve, reject) => {
        console.log('httpRequest.uri', httpRequest.uri);
        request.post({
            uri: httpRequest.uri,
            headers: httpRequest.headers,
            body: data
        }, (err, res, responseBody) => {
            let response = {};
            if (!err) {
                response = {
                    status: res.statusCode,
                    body: responseBody
                }
                if (res.statusCode == 200) {
                    console.log(`Response when calling employee service: ${JSON.stringify(response)}`)
                } else {
                    console.warn(`Custom Error Response: ${JSON.stringify(response)}`)
                }
            } else {
                console.error('Error recieved during invoke:', err);
                reject(err)
            }
            resolve(response);
        });

    }).catch((err) => {
        console.error('Error invoking service', err);
        throw err;
    })

const invokeService = async () => {
    const empUrl = 'http://localhost:3000/application/empList';
    const httpRequest = {
        uri: empUrl,
        headers:{'content-type':'application/json'}
    }
    try {
        const response = await getEmployeeList('', httpRequest);
    } catch (error) {
        console.error('error:', error);
    }
}

invokeService();