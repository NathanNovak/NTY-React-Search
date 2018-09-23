import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron';
import {Input, FormBtn} from '../../components/Form'
import API from "../../utils/API";
import {Container, Row, Col} from "../../components/Grid";
import {ArticleList, ArticleListItem, SavedArticleListItem} from '../../components/ArticleList';


class Home extends Component {
	state = {
		key: '',
		topic: "",
		startDate: "",
		endDate: "",
		articles: [],
		savedArticles: []
	}

	componentDidMount() {
		this.loadSavedArticles();
	}

	loadSavedArticles = () => {
		API.getSavedArticle().then(results => {
			console.log("GET Saved", results);
			this.setState({
				savedArticles: results.data
			})
			console.log("Saved Articles", this.state.savedArticles)
		})
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
				// console.log("RES", results);
				this.setState({
					articles: results.data
				});
				console.log("Articles", this.state.articles)
				
			})
		}
	}

	handleInputChange = event => {
		const {name, value} = event.target;
		// console.log(event.target)
		this.setState({
			[name]: value
		});
	};

	onFormSubmit = (article) => {
		console.log("Aritcle Search", article)
		let img = article.multimedia[0] ? "https://www.nytimes.com/" + article.multimedia[0].url : "";

		API.saveArticle({
			id: article._id,
			topic: article.headline.main,
			web: article.web_url,
			image: img
		}).then(res => this.loadSavedArticles())
	}

	delete = (id) => {
		console.log("Deleted", id);
		API.deleteArticle(id).then(res => this.loadSavedArticles())
		.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<Jumbotron>
					{/* <h1 >New York Times</h1> */}
					<h3>Article Search</h3>
					{/* <img src="..\Home\images\si-glyph-newspaper.svg" alt="newpaper"></img> */}
				</Jumbotron>
				<Container>
					<Row>
						<Col size="md-12">
							<form className="form-inline">
								<Input
									value={this.state.topic}
									label="Topic"
									onChange={this.handleInputChange}
									name="topic"
									placeholder="Title (required)"
								/>
								<Input
									value={this.state.startDate}
									label="Start Date"
									onChange={this.handleInputChange}
									name="startDate"
									placeholder="YYYYMMDD (required)"
								/>
								<Input
									value={this.state.endDate}
									label="End Date"
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
								{this.state.articles.map((article, i) => {
									let img = article.multimedia[0] ? "https://www.nytimes.com/" + article.multimedia[0].url : "";
									return (
										<ArticleListItem
											key={article._id}
											title={article.headline.main}
											href={article.web_url}
											news={article.snippet}
											thumbnail={img}
											submit={() => this.onFormSubmit(article)}
										/>
									);
								})}
							</ArticleList>
						</Col>
					</Row>
					</Container>
					
					<Container>
					<Row>
						{/* Saved Articles */}
						
						<Col size="md-12">
						<h2>Saved Articles</h2>
							<ArticleList  >
								{this.state.savedArticles.map((article) => {
									// let img = article.multimedia[0] ? "https://www.nytimes.com/" + article.multimedia[0].url : "";
									console.log(article)
									return (
										<SavedArticleListItem
											key={article._id}
											title={article.topic}
											href={article.web}
										// news={article.snippet}
										thumbnail={article.image}
										submit={() => this.delete(article)}
										/>
									);
								})}
							</ArticleList>
						</Col>
						{/* </Container> */}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Home;