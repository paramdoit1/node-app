const request = require('superagent');

const URL =   'http://localhost:3000/application/empList';

const postRequest = (url, data) =>
request
    .post(url)
    .set('Accept', 'application/json')
    .send(data);


    describe('Invoke the employee service', () => {
        test('Test emp service', async()=> {
            const response = await postRequest (URL, '');
            console.log('Response', JSON.stringify(response, null, 2));
            expect(response).toBeDefined();
        })
    }, 999999)
    

  