export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export function updateUserName(username) {
	return {
		type: UPDATE_USERNAME,
		username: username
	}
}