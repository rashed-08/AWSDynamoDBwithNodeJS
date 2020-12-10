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

async function insertIntoDynamoDB() {
    const ItemValue = {
        username: 'first',
        first_name: 'first',
        last_name: ' name',
        email: 'first@email.com',
        phone: '34394204394'
    }

    const params = {
        TableName: tableName,
        Item: ItemValue
    };

    dynamoDB.put(params, function (err, data) {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('Success');
        }
    });   

}

insertIntoDynamoDB();