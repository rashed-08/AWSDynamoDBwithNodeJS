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

function update() {
    const username = 'my';
    const email = 'my@email.com';
    const param = {
        TableName: tableName,
        Key: {
            'username': username
        },
        UpdateExpression: 'set email = :e',
        ExpressionAttributeValues: {
            ':e': email
        },
        ReturnValues: 'UPDATED_NEW'
    };

    dynamoDB.update(param,function (err, data) {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('Updated successfully done for: ' + username);
            console.log(JSON.stringify(data, null, 2));
        }
    });
}

update();