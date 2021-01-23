import axios from 'axios';

export const fetchProject = () => async dispatch => {
	try{
		const {data} = await axios.get("https://mdsa.bipad.gov.np/api/v1/project");
		
		dispatch ({type : 'FETCH_PROJECTS', payload : data})
	}catch(error){
		console.log(error);
	}
}
