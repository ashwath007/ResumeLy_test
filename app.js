const express = require('express');
const app = express();
const chalk = require('chalk');
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cors = require('cors');
var cookieParser = require('cookie-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(cookieParser());



//DATABASE
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log(chalk.green.bold("DONE"));
});

//



app.get("/",function(req,res){
		res.send("ResumeLY");
		});

app.listen(port,()=>{
	console.log(chalk.red("Server Started"));	
});
