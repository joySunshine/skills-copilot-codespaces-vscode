// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./models/comment'); // Import the Comment model
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

