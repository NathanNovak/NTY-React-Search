import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron';
import {Input, FormBtn} from '../../components/Form'
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import {ArticleList, ArticleListItem} from '../../components/ArticleList';

class Home extends Component {
	state = {
		topic: "Dog",
		startDate: "20180101",
		endDate: "20180131",
		articles: []
	}

	handleClick = event => {
		event.preventDefault();
		// console.log(this.state)
		if (this.state.topic && this.state.startDate && this.state.endDate) {
			API.getArticle({
				topic: this.state.topic,
				startDate: this.state.startDate,
				endDate: this.state.endDate
			}).then((results) => {
				console.log("RES", results);
				this.setState({
					articles: results.data
				});
				console.log("Articles", this.state.articles)
			})
		}
	}

	handleInputChange = event => {
		const {name, value} =event.target;
		// console.log(event.target)
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div>
				<Jumbotron>
					<h1 >New York Times</h1>
					<h3>Article Search</h3>
					{/* <img src="..\Home\images\si-glyph-newspaper.svg" alt="newpaper"></img> */}
				</Jumbotron>
				<Container>
				<Row>
					<Col size="md-12">
				<form className="form-inline">
				<Input
				 value= {this.state.topic}
				 label= "Topic"
				 onChange={this.handleInputChange}
				 name="topic"
				 placeholder="Title (required)"
				 />
				 	<Input
				 value= {this.state.startDate}
				 label= "Start Date"
				 onChange={this.handleInputChange}
				 name="startDate"
				 placeholder="YYYYMMDD (required)"
				 />
				 	<Input
				 value= {this.state.endDate}
				 label= "End Date"
				 onChange={this.handleInputChange}
				 name="endDate"
				 placeholder="YYYYMMDD (required)"
				 />
				 <FormBtn
				 	 onClick={this.handleClick}
					 disabled={!(this.state.topic && this.state.startDate && this.state.endDate)}
				 >
					 Submit
				 </FormBtn>	
				</form>
				</Col>
				{/* <Container> */}
					<Col size="md-12">
					<ArticleList  >
						{this.state.articles.map(article => {
							return (
								<ArticleListItem
								key={article._id}
								title={article.headline.main}
								href={article.web_url}
								news={article.snippet}
								// thumbnail={article.multimedia.url}
								/>
							);
						})}
					</ArticleList>
					</Col>
				{/* </Container> */}
				</Row>
					
				
					{/* <div className='card'>
					<h5 className="card-header">Search</h5>
					<div className="card-body">
						<h5 className="card-title">Special title treatment</h5>
						<form>
							<div className='form-gorup'>
								<label>Topic</label>
							<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Topic"></input>
						</div>
						<div className='form-gorup'>
								<label>Start Year</label>
							<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Year as YYYYMMDD"></input>
						</div>
						<div className='form-gorup'>
								<label>End Year Year</label>
							<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Year as YYYYMMDD"></input>
						</div>
						<button className='btn btn-primary' type='submit' id='submit'>Submit</button>
						</form>
					</div>
				</div> */}
			</Container>
			</div>
		);
	}
}

export default Home;