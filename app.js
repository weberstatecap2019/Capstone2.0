const APP_TITLE = "fullstack-starter";

let createError = require('http-errors');
let debug = require('debug')(APP_TITLE);
let http = require('http');
let express = require('express');
import cors from 'cors';
let path = require('path');
let cookieParser = require('cookie-parser');
let passport = require('passport');
let session = require('express-session');
let flash = require('express-flash');
let logger = require('morgan');
let sassMiddleware = require('node-sass-middleware');

// Connect to mongodb using mongoose
import { connect } from "./config/db"
require('./config/passport');
// connect('mongodb://localhost:27017/mine')

let app = express();

// view helpers
app.locals.formatDate = require("date-fns/format");

// view engine setup
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: 'secret_goes_here',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());
app.use(sassMiddleware({
  src: path.join(__dirname, 'app', 'assets'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Authentication
app.use(passport.initialize());

// Routing
import { configuretRoutes } from './config/routes'
configuretRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Create HTTP server.
let server = http.createServer(app);
server.listen(process.env.PORT || '8080');
server.on('error', (err) => { throw err });
server.on('listening', function (){
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
});