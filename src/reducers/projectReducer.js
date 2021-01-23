export default (state = {projects:{}}, action) => {

	switch(action.type){
		
		case 'FETCH_PROJECTS' :

			const {payload} = action;

			return { projects: payload };
			
		default : 
			return state;	
		}
}

