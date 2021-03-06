var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : 'Article-One | Me',
        heading: 'Article One',
        date: 'Sep 05,2016',
        content:'Article-One'
    },
    'article-two' : {
        title : 'Article-Two | Me',
        heading: 'Article Two',
        date: 'Sep 06,2016',
        content:'Article-Two'
    },
    'article-three' : {
        title : 'Article-Three | Me',
        heading: 'Article Three',
        date: 'Sep 07,2016',
        content:'Article-Three'
    },
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
          <div class ="container">
              <div>
                  <a style="color:white" href="/">Home</a>
              </div>
              <hr/>
              <h3>
                  ${heading}
              </h3>
              <div>
                  ${date}
              </div>
              <div>
                  ${content}
              </div>
              <br>
              <hr/>

              <div>
              <p>Provide us with valuable comments</p>
              <br>
              <br>
              <input type = "text" id ='comment' placeholder="Give your comments"></input>
              </div>
              <br>
              <div>
              <input type = "submit" id ="submit_com" value="Submit Comment"></input>
              </div>
              <hr/>
              <div>
              <p><u><b>ALL COMMENTS</b></u></p>
              <ul id ="com_sec">
              </ul>
              </div>
        </div>
        <script type="text/javascript" src="/ui/main1.js">
        </script>
        </body>
    </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req , res){
  counter = counter + 1;
  res.send(counter.toString());
});


app.get('/:articleName', function(req , res){
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/main1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main1.js'));
});

var names=[];
app.get('/submit-name/:name',function(req, res){
  //get name from the request object
  var name = req.params.name;

  names.push(name);

  res.send(JSON.stringify(names));
});

var commbox=[];
app.get('/submit-comment/:comment',function(req, res){
  //get name from the request object
  var comment = req.params.comment;

  commbox.push(comment);

  res.send(JSON.stringify(commbox));
});
//app.get('/ui/madi.png', function (req, res) {
//res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
//});

//to check how it works
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
