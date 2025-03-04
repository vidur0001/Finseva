const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Registration schema
const registrationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Add a minimum length for password security
  },
  confirmPassword: {
    type: String,
    required: true,
  }
});

// SignIn schema 
const signInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save middleware for registration (to hash the password)
registrationSchema.pre('save', async function (next) {
    // const user = localStorage.find()
  if (!this.isModified('password')) {
    return next();
  }

 // for Password Matching
  if (this.password !== this.confirmPassword) {
    throw new Error('Passwords do not match!');
  }

  // Hash password before saving
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = undefined; // No need to store confirmPassword
  next();
});

// Method to compare password (for sign-in)
signInSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create models from the schemas
const Registration = mongoose.model('Registration', registrationSchema);
const SignIn = mongoose.model('SignIn', signInSchema);

module.exports = { Registration, SignIn };
