import axios from "axios";

export default {
	// Saves atricle to the database
	getArticle: function (query) {
		console.log("went in", query);
		return axios.get("/api/articles", { params: { 
				// api_key: "c26eece03b8b44819878e2226be6b47a", 
				q: query.topic, 
				startDate: query.startDate, 
				endDate: query.endDate,
			  }});
	},

	// Saves a book to the database
  saveArticle: function (article) {
		console.log("Saved Article", article);
    return axios.post("/api/saved", article);
	},
	getSavedArticle: function () {
		return axios.get("/api/saved");
	},
	deleteArticle: function(id) {
		console.log("Article ID", id._id);
    return axios.delete("/api/saved/" + id._id);
  }
};							