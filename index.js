var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect('mongodb://localhost/portfolio');

app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// var commentSchema = new mongoose.Schema({
// 	text: String
// })

// var Comment = mongoose.model("Comment", commentSchema);

// INDEX
// app.get("/", function(req,res) {
// 	Comment.find({}, function(err, foundComment) {
// 		res.render("landing", {comments: foundComment});
// 	})
// });

// HOME PAGE
app.get('/', (req,res) => {
	res.render("home");
});

app.get('/about', (req,res) => {
	res.render("about");
});

// app.get('/minigames', (req,res) => {
// 	res.send("Page under construction");
// })

app.get('/minigames', (req,res) => {
	res.render("minigames/index");
})

app.get('/minigames/starcraft', (req,res) => {
	res.sendFile(__dirname + "/views/minigames/games/starcraft.html");
	// res.send('this will be a minigame');
});

app.get('/minigames/CGJ', (req,res) => {
	res.sendFile(__dirname + "/views/minigames/games/cgj.html");
})

app.get('/coriolis', (req,res) =>{
	res.render("games/coriolis");
});

app.get('/coriolis/game', (req,res) =>{
	res.sendFile(__dirname + "/public/CoriolisGame/index.html");
	// res.sendFile(__dirname + "/views/minigames/games/cgj.html");
});

app.get('/relativity', (req,res) => {
	res.send("page under construction")
	// res.render("games/relativity");
});

app.get('/gravity', (req,res)=> {
	res.render("games/gravity");
});

// // CREATE post comments to index page
// app.post("/", function(req,res){
// 	var text = req.body.comment;
// 	Comment.create({text: text}, function(err, newComment){
// 		res.redirect("/");
// 	});
// 	// res.send("your comments will be recorded (at some point), so please send your comments to author directly, sry");
// });

app.listen(process.env.PORT || 8000, function(){
	console.log("Server up");
})
