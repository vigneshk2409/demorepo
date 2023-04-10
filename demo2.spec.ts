import http from 'k6/http';

import { check, sleep } from 'k6';



const filePath = 'E:/Finezoom/VS K6/data2.csv';

const headers = { 'Content-Type': 'application/json' };

const file = open(filePath);

const csvData = file.replace(/\r\n/g, '\n'); // Replace Windows-style line endings with Unix-style

const parsedData = csvData.split('\n').slice(1).map((line) => {

  const [email, password, firstName, lastName] = line.split(',');

  return { email, password, firstName, lastName };

});

export const options = {

  stages: [

    { duration: '30s', target: 30 },

    { duration: '1m', target: 30 },

    { duration: '20s', target: 0 },

  ],

};

export default function () {

 

  const user = parsedData[Math.floor(Math.random() * parsedData.length)];




  const url =  'https://your-website.com/register';

  const payload = JSON.stringify({

    email: user.email,

    password: user.password,

    firstname: user.firstName,

    lastname: user.lastName

  });

  const response = http.post(url, payload, { headers: headers });

  // Check that the response is successful

  check(response, {

    'status is 200': (r) => r.status === 200

  });

  //sleep(1);

}
