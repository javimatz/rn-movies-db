import * as React from 'react';
import PropTypes from 'prop-types';

import HomeComponent from '../components/Home/HomeComponent' 
import { requestMovieScreen as RequestMovieApi } from '../api/api' 

import { MovieTypes } from "../helper/Types";

class MovieScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			moviesData: []
		} 
	}

	componentDidMount() {
    	this.requestMovieScreen();
  	}

	requestMovieScreen = async () => {
		await RequestMovieApi((data) => this.setState({ moviesData: data }));
	};

	render () {
		return (
			<HomeComponent
		        type={"movie"}
		        subTitle={MovieTypes}
		        navigation={this.props.navigation}
		        data={this.state.moviesData}
		        onRefresh={this.requestMovieScreen}
		    />
		);
	}
}

MovieScreen.propTypes = {
	navigation: PropTypes.object
}

export default MovieScreen