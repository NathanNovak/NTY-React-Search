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
	}
};							