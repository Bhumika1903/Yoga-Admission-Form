// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bnamdeo14:6263109947@cluster0.snz0dl1.mongodb.net/admission-form?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema and model
const enrollmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  selectedBatch: { type: String, required: true },
  enrollmentDate: { type: Date, default: Date.now },
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// API endpoint for handling form submissions
app.post('/api/register', async (req, res) => {
  try {
    // Validate input data
    const { name, age, selectedBatch } = req.body;

    if (!name || !age || !selectedBatch) {
      return res.status(400).json({ error: 'Incomplete data. Please fill in all fields.' });
    }

    // Create a new enrollment record
    const newEnrollment = new Enrollment({ name, age, selectedBatch });
    await newEnrollment.save();

    // Send a success response
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const mockPaymentFunction = async (userData) => {
    // Simulate payment processing
    console.log('Processing payment for:', userData);
    // Replace this with actual payment gateway integration logic
  
    // For now, return a successful response
    return { success: true, transactionId: 'mock-transaction-id' };
  };
  
  // API endpoint for handling form submissions and payments
  app.post('/api/register', async (req, res) => {
    try {
      // Validate input data
      const { name, age, selectedBatch } = req.body;
  
      if (!name || !age || !selectedBatch) {
        return res.status(400).json({ error: 'Incomplete data. Please fill in all fields.' });
      }
  
      // Create a new enrollment record
      const newEnrollment = new Enrollment({ name, age, selectedBatch });
      await newEnrollment.save();
  
      // Simulate payment
      const paymentResult = await mockPaymentFunction(req.body);
  
      // Check payment result
      if (paymentResult.success) {
        // Send a success response
        res.status(201).json({ message: 'Registration and payment successful!', transactionId: paymentResult.transactionId });
      } else {
        console.error('Payment failed.');
        res.status(500).json({ error: 'Payment failed. Please try again.' });
      }
    } catch (error) {
      console.error('Error during registration and payment:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
