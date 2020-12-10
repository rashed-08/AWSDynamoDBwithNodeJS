require('dotenv').config();
const AWS = require('aws-sdk');

const AccessKeyId = process.env.AWSAccessKey;
const SecretKey = process.env.AWSSecretKey;
const region = process.env.region;
const tableName = process.env.tableName;

const dynamoDB = new AWS.DynamoDB.DocumentClient({
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretKey,
    region: region,
});

function ReadOne() {
    const username = 'first';
    const params = {
        TableName: tableName,
        Key: {
            'username': username
        }
    };
    dynamoDB.get(params, function (err, data) {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    })
}

ReadOne();
