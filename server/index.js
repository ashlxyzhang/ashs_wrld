import express from 'express'
import dotenv from 'dotenv'

const port = 5100

dotenv.config()

var id = process.env.VITE_SPOTIFY_CLIENT_ID
var secret = process.env.VITE_SPOTIFY_CLIENT_SECRET

var app = express();

app.get('/auth/callback', (req, res) => {

    console.log("callback!!")

    var code = req.query.code;
    console.log(code);
  
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: "http://localhost:5173/auth/callback",
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(id + ':' + secret).toString('base64')),
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      json: true
    };
  
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.redirect('/')
      }
    });
})

app.get('/auth/token', (req, res) => {
    res.json({
        access_token: access_token
    })
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})

/*
app.get('/auth/login', (req, res) => {

    console.log("login attempt")

    var scope = "streaming \
                 user-read-email \
                 user-read-private"
  
    var auth_query_parameters = new URLSearchParams({
      response_type: "code",
      client_id: id,
      scope: scope,
      redirect_uri: "http://localhost:5173/auth/callback"
    })
  
    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})
*/