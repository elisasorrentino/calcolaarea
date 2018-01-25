//express
var express = require('express');
var area = require('./area.js');

//instantiate express
var app = express();

app.get("/getArea", function(req, res) {
    var b = req.query.side1;
    var a = req.query.side2;

    if((!(typeof a === "undefined"))&&(!(typeof b === "undefined")))
    {
        var ar = area([a, b]);
        if(ar === -1)
        {
            res.setHeader("Content-Type", "application/json");
            var out = {
                area: -1
            };
            res.status(400).json(out);
        }else
        {
            res.setHeader("Content-Type", "application/json");
            var out = {
                area: ar
            };
            res.status(200).json(out);
        }
    }else
    {
        res.setHeader("Content-Type", "application/json");
        var out = {
            area: -1
        };
        res.status(400).json(out);
    }

    res.end();
});

app.use("/", function(req, res){
    res.setHeader("Content-Type", "application/json");
    var out = {
        error: "404 Not Found",
        requestedurl: req.url
    };
    res.status(404).json(out);
});

app.listen((process.env.PORT || 8080));
console.log("Server running at " + 8080 + " port");