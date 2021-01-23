import React from 'react';

import Organizations from './organizations';
import Projects from './projects';
const Chart = () => {

	return (
		<div className="chart">
			<h1>Pie Chart</h1>
			<Organizations />
			<Projects />
			
		</div>
	);
}

export default Chart;