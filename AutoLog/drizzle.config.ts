import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// This line tells Drizzle to look at your .env file for the URL
dotenv.config();

export default defineConfig({
schema: './src/db/*', 
out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.VITE_DATABASE_URL!,
  },
});
