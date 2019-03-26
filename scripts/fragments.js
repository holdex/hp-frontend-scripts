const axios = require('axios');
const fs = require('fs');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Ensure environment variables are read.
require('../config/env');


const API_URL = process.env.API_URL ? process.env.API_URL : 'https://api.cloud.holdex.io/gql/query';

axios({
    url: API_URL,
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({
        variables: {},
        operationName: '',
        query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
    }),
}).then(result => result.data)
    .then(result => {
        const filteredData = result.data.__schema.types.filter(
            type => type.possibleTypes !== null,
        );
        result.data.__schema.types = filteredData;
        fs.writeFile('./fragments.json', JSON.stringify(result.data), err => {
            if (err) {
                console.error('Error writing fragmentTypes file', err);
            } else {
                console.log('Fragment types successfully extracted!');
            }
        });
    }).catch(err => console.error('Error get fragmentTypes', err));