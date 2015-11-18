var Dropbox = require("dropbox");

function getDropBoxFile(client, path, cb) {
  client.readFile(path, { arrayBuffer: true }, cb);
}

module.exports = function dropBoxMiddleware(auth) {
  var client = new Dropbox.Client(auth);

  return function middleware(req, res, next) {
    if (req.method !== 'GET') {
      next();
      return;
    }
    getDropBoxFile(client, req.path.substring(1), function(error, data, metadata) {
      if (error) {
        return res.status(500).json({ error: error }).end();
      }
      res.set({
        'Content-Type': metadata.mimeType,
        'Content-Length': metadata.size
      })
      res.end(new Buffer(data), 'binary');
      return;
    });
  };

}
