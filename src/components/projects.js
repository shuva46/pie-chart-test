import React,{useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {fetchProject} from '../actions/projects';

const Project = (props) =>{

	const {projects} = useSelector(state=>state.project);

	const {results,count} = projects;

	const dispatch = useDispatch();

	useEffect(() => {
		
		dispatch(fetchProject());

	},[]);

		return(
			<h3>Total Projects : {count}</h3>
			)

}

export default Project;