

export default (state = {organizations:{}}, action) => {

	switch(action.type){
		case 'FETCH_ORGANIZATION' :

			const {payload} = action;
			return { organizations : payload }

		default : 
			return state;	
		}
}