import { DynamoDB } from 'aws-sdk';

const options = {
	region: 'localhost',
	endpoint: 'http://localhost:8000'
}

export const getDynamoDbClient = () => {
	if (process.env.isOffline) {
		return new DynamoDB.DocumentClient(options);
	}
	return new DynamoDB.DocumentClient();
}