import { UPDATE_USERNAME } from '../actions/username-actions'

export default function userNameReducer(state = '', action) {
	switch (action.type) {
		case UPDATE_USERNAME:
			console.log(action.username);
			return {
				...state,
				username: action.username
			}
		default:
			return state;
	}
}