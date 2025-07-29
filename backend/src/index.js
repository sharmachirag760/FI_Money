const express = require('express');
const server = require('./config/ServerConfig')
const connectDB = require('./config/dbConfig')
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const productRouter = require('./routes/productRoute');

const cors = require('cors');
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
}));


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/auth',authRouter);
app.get('/ping',(req,res)=>{
    console.log(req.body)
    console.log(req.cookies);
    return res.json({message: 'pong'})
})

app.listen(server.PORT, async ()=>{
    await connectDB();
    console.log(`Port started at ${server.PORT} !!`)
}) 