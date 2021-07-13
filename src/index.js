import axios from 'axios';

const USERS_URI = 'https://jsonplaceholder.typicode.com/users?_limit=2';

export const greet = name => 'Hello' + name;

export const users = async () => {
	const { data } = await axios.get(USERS_URI);
	return data;
};
