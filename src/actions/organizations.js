import axios from 'axios';

export const fetchOrganization = () => async dispatch => {
	try{
		const {data} = await axios.get("https://mdsa.bipad.gov.np/api/v1/organization");
		// console.log();
		dispatch ({type : 'FETCH_ORGANIZATION', payload : data})
	}catch(error){
		console.log(error);
	}
}
