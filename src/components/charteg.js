import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

import {fetchProject} from '../actions/projects';


class ChartPie extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  state = {orgData : [], projectData : []};

  componentDidMount(){
    this.setState({orgData : this.props.data});
    this.setState({projectData : this.props.projects})
  }

  renderValue(id){
      const {projects} = this.state.projectData;
      const {results:projectResult} = projects;
      let filterData = projectResult ? projectResult.filter(
          dataResult => dataResult.oid === id
        ) : 0;

      return filterData.length;
    
  }

  renderData(){
    return this.state.orgData.map((item) => {
      return {
        name : item.oname,
        value : this.renderValue(item.oid)
        }
    })
  }

  render() {  
    return (
      <PieChart width={400} height={400}>
        
        <Pie 
          data={ 
            this.renderData()
          } 
          dataKey="value" 
          cx={200} cy={200} 
          innerRadius={70} 
          outerRadius={90} 
          fill="#8884d8" 
          label />
      </PieChart>
    );
  }
}

const mapStateToProps = state =>{
  return {
    projects : state.project
    }
}

export default connect(mapStateToProps, {fetchProject})(ChartPie);