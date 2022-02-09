var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cors = require("cors");
const productRouter = require('./routes/productRouter');
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);
app.use("/products", productRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

const port = process.env.PORT || 3001; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
module.exports = app;