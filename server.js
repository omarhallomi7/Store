const express = require('express');
const app = express();
const port = process.env.PORT || 3001 ;
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const server = http.createServer(app);

app.use(express.json());
app.use(cors())
require('dotenv').config();
app.use(cookieParser())
app.use(fileUpload({
  useTempFiles: true
}))
app.use(express.static("./client/build"))

//Routes
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))


// mongodb connection
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

app.get('/*',(req, res)=>{
  res.sendFile(__dirname + '/../client/build/index.html');
})


server.listen(port, () => {
  console.log(`Listening on port ${port} 🔥`)
})


