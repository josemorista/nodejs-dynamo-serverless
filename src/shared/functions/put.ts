import { APIGatewayProxyHandler } from 'aws-lambda';
import { SQS } from 'aws-sdk';

export const handler: APIGatewayProxyHandler = async (event) => {
	const queue = new SQS({
		region: 'us-east-1'
	});
	await queue.sendMessage({
		QueueUrl: 'http://localhost:9324/000000000000/MyFirstQueue',
		MessageBody: JSON.stringify({
			message: 'Hello'
		})
	}).promise();

	return {
		statusCode: 201,
		body: '',
		headers: {}
	}
};