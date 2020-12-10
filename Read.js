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

function read() {
    const param = {
        TableName: tableName
    }

    dynamoDB.scan(param, function (err, data) {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('Successfully fetched all data');
            data.Items.forEach(function (item) {
                console.log(' -', item.username + '\n'
                    + item.first_name + '\n'
                    + item.last_name + '\n'
                    + item.email + '\n'
                    + item.phone + '\n'
                );
            });
        }
    });
}

read();