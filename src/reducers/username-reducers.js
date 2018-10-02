import { UPDATE_USERNAME } from '../actions/username-actions'

export default function userNameReducer(state = '', action) {
	switch (action.type) {
		case UPDATE_USERNAME:
			return {
				...state,
				username: action.username
			}
			//return payload.userName;
		default:
			return state;
	}
}