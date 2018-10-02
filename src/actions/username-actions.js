export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export function updateUserName(userName) {
	return {
		type: UPDATE_USERNAME,
		payload: {
			userName: userName
		}
	}
}