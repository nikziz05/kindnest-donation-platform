// Application Configuration
export const APP_CONFIG = {
  NGO_NAME: 'KindNest Foundation',
  NGO_EMAIL: 'kindnestorg1@gmail.com',
  NGO_PHONE: '+91 12345 XXXXX',
  NGO_ADDRESS: 'Patiala, Punjab, India'
};

// API Configuration
const isDevelopment = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5000/api'
  : process.env.REACT_APP_API_URL || 'https://kindnest1-backend.onrender.com/api';

export const config = {
  apiUrl: API_BASE_URL,
  environment: process.env.NODE_ENV || 'development'
};