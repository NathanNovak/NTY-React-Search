const axios = require("axios");
const router = require("express").Router();
const articleController = require("../../controller/articlesController");

router.get("/articles", (req, res) => {
  console.log("hafffppens", req.query);
  console.log("url", req.url);
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c26eece03b8b44819878e2226be6b47a", { params: req.query })
    .then(results => {
      //  console.log("results", results.data.response.docs )
   return res.json(results.data.response.docs)})
    .catch(err => res.status(422).json(err));
});

router.route("/saved")
  .get(articleController.findAll)
  .post(articleController.create);

  router
  .route("/saved/:id")
  .get(articleController.findById)
  .delete(articleController.remove);
module.exports = router;