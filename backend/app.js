import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-routes';
import adminRouter from './routes/admin-routes';
import movieRouter from './routes/movie-routes';
import bookingsRouter from './routes/booking-routes';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
// middlewares
app.use(express.json());
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/movie', movieRouter);
app.use('/booking', bookingsRouter);

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ofjxcsi.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () => {
      console.log(`connected to database and server is running`);
    })
  )
  .catch((e) => console.log(e));
