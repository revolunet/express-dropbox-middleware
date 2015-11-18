# Dropbox middleware for Express 4

Map an express route to a dropbox folder using your API token

## Usage

```js
var dropBoxMiddleware = require('express-dropbox-middleware');

var express = require('express');
var app = express();

app.use('/dropbox', dropBoxMiddleware({
    token: "myAPItoken"
}));

var server = app.listen(3100);

```

Now head to http://127.0.0.1:3100/dropbox/path/to/your/file.jpeg to open your dropbox file

## Auth

Create your app from https://www.dropbox.com/developers/apps
