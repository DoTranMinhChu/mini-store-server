import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routerApiProduct from './routers/ProductsRouter.js'
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.DATABASE_URL;

app.use(cors())
app.use('/api/product', routerApiProduct)

mongoose.connect(URI).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Example app http://localhost:${PORT}/api/product`);
    });
}).catch(err => {
    console.log(err)
})
