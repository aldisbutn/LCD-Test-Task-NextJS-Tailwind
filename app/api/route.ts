import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

// Declare database variable
let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export const GET = async (req: Request, res: Response) => {
  // Check if database is connected
  if (!db) {
    // Open database connection
    db = await open({
      filename: './database.db',
      driver: sqlite3.Database,
    });
  }
  // Get all items from the database
  const items = await db.all('SELECT * FROM devices');
  // Return response with items as JSON
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
};
