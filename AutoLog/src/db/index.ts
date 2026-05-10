import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// This logic allows the file to work in the browser AND the terminal
const connectionString = 
  (import.meta as any).env?.VITE_DATABASE_URL || 
  (globalThis as any).process?.env?.VITE_DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing!");
}

const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
