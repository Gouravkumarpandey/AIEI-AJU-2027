const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');
const contactRoutes = require('./routes/contactRoutes');
const paperRoutes = require('./routes/paperRoutes');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', registrationRoutes);
app.use('/api', contactRoutes);
app.use('/api', paperRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
