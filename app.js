const express = require('express')
const app = express()

app.get('/',(req, res) => res.send('Hello World!'))
app.get('/tweet',(req, res) => res.send('Your Tweets'))
app.get('/comments',(req, res) => res.json({name:"musa", dept:"agric edu", level:"400"}))
app.get('/:name',(req, res) => res.send(req.params))


app.listen(3000, () => console.log('Example app listening on port 3000!'))