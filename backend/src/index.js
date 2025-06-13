import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './lib/db.js';
const app = express();

dotenv.config();
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port:' + PORT);
    connectDB();
});