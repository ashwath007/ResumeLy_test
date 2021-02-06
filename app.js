const express = require('express');
const app = express();
const chalk = require('chalk');
const port = process.env.PORT || 3000;

app.get("/",function(req,res){
		res.send("ResumeLY");
		});

app.listen(port,()=>{
	console.log(chalk.red("Server Started"));	
});
