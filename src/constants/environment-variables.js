import dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  NYT_API_BASE_URL,
  NYT_API_KEY,
} = process.env;
