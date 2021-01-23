import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {fetchOrganization} from '../actions/organizations';

import Example from './charteg';

const Organization = ()=>{
	
	const {organizations} = useSelector(state=>state.organization);

	const {results} = organizations;

	const {projects} = useSelector(state=>state.project);

	const {results:projectResult} = projects;

	const dispatch = useDispatch();

	useEffect(() => {
		
		dispatch(fetchOrganization());
		

	},[]);
	
	const renderProject=(id)=>{
		let filterProject = projectResult ? projectResult.filter(
			data => data.oid === id
		) : '0';
		return filterProject.length;
	}
	
		return(
			<div className="organization">
			{
				results ? 
				<Example data = {results}/> : 'loading...'
			}

			{results && results.map(item => 
				<p key={item.oid}>{item.oname} : {renderProject(item.oid)}</p>
				)}
			</div>
			)
	
	
	
}

export default Organization;