const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/', (req, res) => {
	console.log("Inside");
});

app.get('/say', async (req, res) => {
	await axios.get('https://kux191smxh.execute-api.us-east-2.amazonaws.com/my-function/say?keyword=' + req.query.keyword)
	.then(function(response) {
		res.send(response.data);
	})
	.catch(function(error) {
		console.log(error);	
	})
})

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
})
