import { UPDATE_USERNAME } from '../actions/username-actions'

export default function userNameReducer(state = '', { type, payload }) {
	switch (type) {
		case UPDATE_USERNAME:
			return payload.userName;
		default:
			return state;
	}
}