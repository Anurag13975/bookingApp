import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import adminRouter from './routes/admin-routes.js';
import movieRouter from './routes/movie-routes.js';
import bookingsRouter from './routes/booking-routes.js';
import userRouter from './routes/user-routes.js';
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
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(5000, () => {
      console.log(`connected to database and server is running`);
    })
  )
  .catch((e) => console.log(e));
