import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

// Declare database variable
let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export const GET = async (req: Request, res: Response) => {
  // Get id from request URL
  const id = req.url.split('/').pop();
  try {
    // Check if database is connected
    if (!db) {
      // Open database connection
      db = await open({
        filename: './database.db',
        driver: sqlite3.Database,
      });
    }

    // Get the item from the database with the id
    const item = await db.get('SELECT * FROM devices WHERE id = ?', id);

    // Return response with item as JSON
    return new Response(JSON.stringify(item), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    // Return error response
    return new Response(String(error), {
      status: 500,
    });
  }
};
