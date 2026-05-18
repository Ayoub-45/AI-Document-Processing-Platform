import {config} from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';
config();

const PORT = process.env.BACKEND_PORT || 5000;
const connectionString = process.env.MONGO_URI
connectDB(connectionString);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});