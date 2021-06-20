import { getDynamoDbClient } from '../utils/getDynamoDbClient'

export const handler = async (event) => {
	const db = getDynamoDbClient();
	const users = (await db.query({
		TableName: 'agromasc',
		KeyConditionExpression: '#kind = :kind',
		ExpressionAttributeNames: {
			'#kind': 'kind'
		},
		ExpressionAttributeValues: {
			':kind': 'USER'
		}
	}).promise()).Items;

	return {
		statusCode: 200,
		body: JSON.stringify(users),
		headers: {
			'Content-type': 'application/user'
		}
	}
}