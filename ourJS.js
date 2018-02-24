// dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// set up Express
// =============================================================
var app = express();
var PORT = 3000;

// set up some data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// guests
// =============================================================

var all = [];
  {
    name: "Bhanoo",
    phoneNum: 244-333-3333,
    Email: hgskjd@this.net
    custID: "1"
  },
  {
    name: "Cassandra",
    phoneNum: 222-222-2442,
    Email: hgsfghd@this.net,
    custID: "2"
  },
  {
    name: "Candace",
    phoneNum: 222-545-2222,
    Email: hgskfsdjhlkfjd@this.net
    custID: "3" 
  },
  {
    name: "Shane",
    phoneNum: 222-222-5555,
    Email: Shanefdhkdsg@this.net
    custID: "4" 
  },
  {
    name: "Jalil",
    phoneNum: 221-122-2222,
    Email: Jalilgsjcty@this.net
    custID: "5" 
  },
  {
    name: "Earl",
    phoneNum: 222-211-2222,
    Email: Email@this.net,
    custID: "6"  
  },
  {
    name: "Bob",
    phoneNum: 222-222-2222,
    Email: rteyiov@this.net
    custID: "7"
  },
  {
    name: "Joe",
    phoneNum: 222-333-3333,
    Email: lpoiyt@this.net
    custID: "8"
  }
];

var table = [
  {
    name: "Bhanoo",
    phoneNum: 244-333-3333,
    Email: hgskjd@this.net
    custID: "1"
  },
  {
    name: "Cassandra",
    phoneNum: 222-222-2442,
    Email: hgsfghd@this.net,
    custID: "2"
  },
  {
    name: "Candace",
    phoneNum: 222-545-2222,
    Email: hgskfsdjhlkfjd@this.net
    custID: "3" 
  },
  {
    name: "Shane",
    phoneNum: 222-222-5555,
    Email: Shanefdhkdsg@this.net
    custID: "4" 
  },
  {
    name: "Jalil",
    phoneNum: 221-122-2222,
    Email: Jalilgsjcty@this.net
    custID: "5" 
  }
];

var reserve = [];
  {
    name: "Earl",
    phoneNum: 222-211-2222,
    Email: Email@this.net,
    custID: "6"  
  },
  {
    name: "Bob",
    phoneNum: 222-222-2222,
    Email: rteyiov@this.net
    custID: "7"
  },
  {
    name: "Joe",
    phoneNum: 222-333-3333,
    Email: lpoiyt@this.net
    custID: "8"
  }
];

// routing
// =============================================================

// send users to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the restaurant!")
  res.sendFile(path.join(__dirname, "index.html"));
});

// get all folks in system
app.get("/all", function(req, res) {
  res.json(allGuests);
});

// get table guests in system
app.get("/tables", function(req, res) {
  res.json(tableGuests);
});

// get reserve folks
app.get("/reserve", function(req, res) {
  res.json(reserveGuests);
});

// search for specific guest (or all guests), and provide JSON
app.get("/api/:all?", function(req, res) {
  var chosen = req.params.all;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

// add new guests - taking in JSON
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreserve = req.body;

  console.log(newreserve);

  // add JSON for the guest sent to the appropriate array
  reserve.push(newreserve);

  // display the JSON
  res.json(newguest);
});

// start server - begin "listening"
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
