import { getDynamoDbClient } from '../utils/getDynamoDbClient'
import { v4 as uuidv4 } from 'uuid';

interface ICreateUserBodyDTO {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
}

export const handler = async (event) => {
	const db = getDynamoDbClient();
	const { email, firstname, lastname, password } = JSON.parse(event.body) as ICreateUserBodyDTO;

	const user = {
		id: uuidv4(),
		email,
		firstname,
		lastname,
		password
	}

	await db.put({
		TableName: 'agromasc',
		Item: {
			...user,
			kind: 'USER'
		}
	}).promise()

	delete user.password;

	return {
		statusCode: 201,
		body: JSON.stringify(user),
		headers: {
			'Content-type': 'application/json'
		}
	};
}