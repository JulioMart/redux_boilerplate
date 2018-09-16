// import { GET_CONTACTS } from '../actions/types';

const initialState = {
	// contacts: [
	//   {
	//     id: ,
	//     name: ,
	//     email:
	//   },
	//   {
	//     id: ,
	//     name: ,
	//     email:
	//   }
	// ]
};

export default function(state = initialState, action) {
	switch (action.type) {
		// case GET_CONTACTS:
		// 	return {
		// 		...state
		// 	};
		default:
			return state;
	}
}