var express = require('express');
var app = express();

app.get('/',         function(req, res){ res.sendFile(__dirname + '/src/index.html'); });
app.get('/ai6gl.js', function(req, res){ res.sendFile(__dirname + '/src/ai6gl.js'  ); });
app.get('/matrix.js', function(req, res){ res.sendFile(__dirname + '/src/matrix.js'); });
app.get('/minMatrix.js', function(req, res){ res.sendFile(__dirname + '/src/minMatrix.js'); });
app.get('/bevelcube.js', function(req, res){ res.sendFile(__dirname + '/src/bevelcube.js'); });
app.get('/octahedron.js', function(req, res){ res.sendFile(__dirname + '/src/octahedron.js'); });
app.get('/src/shader/vertex.vs', function(req, res){ res.sendFile(__dirname + '/src/shader/vertex.vs'); });
app.get('/src/shader/fragment.fs', function(req, res){ res.sendFile(__dirname + '/src/shader/fragment.fs'); });
// app.get('/src/shader/planeVertex.js', function(req, res){ res.sendFile(__dirname + '/src/shader/planeVertex.js'); });
// app.get('/src/shader/planeFragment.js', function(req, res){ res.sendFile(__dirname + '/src/shader/planeFragment.js'); });
// app.get('/loader.js', function(req, res){ res.sendFile(__dirname + '/src/loader.js'); });

const http = require('http').Server(app);
http.listen(8080);
