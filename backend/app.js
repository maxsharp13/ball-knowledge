require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const playRoutes = require('./routes/plays');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const { errors } = require('./middlewares/validation');

const app = express();
const { PORT = 3001 } = process.env;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send({ message: 'Ball Knowledge backend running' });
});

app.use(userRoutes);
app.use('/plays', auth, playRoutes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});