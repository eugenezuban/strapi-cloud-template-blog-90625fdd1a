'use strict';

module.exports = async () => {
  try {
    console.log('Starting cleanup process...');

    const dbClient = strapi.db.connection.client.config.client;
    console.log(`Database client detected: ${dbClient}`);

    if (dbClient === 'better-sqlite3') {
      console.log('Running SQLite cleanup...');
      await strapi.db.connection.raw('PRAGMA foreign_keys = OFF;');
      await strapi.db.connection.raw('DROP TABLE IF EXISTS page_contents;');
      await strapi.db.connection.raw('PRAGMA foreign_keys = ON;');
    } else {
      console.log('Running cleanup...');
      await strapi.db.connection.raw(`
        DO $$
        DECLARE
          r RECORD;
        BEGIN
          FOR r IN (SELECT constraint_name, table_name
                    FROM information_schema.table_constraints
                    WHERE constraint_type = 'FOREIGN KEY'
                    AND (table_name = 'page_contents' OR constraint_name LIKE '%page_contents%'))
          LOOP
            EXECUTE 'ALTER TABLE ' || quote_ident(r.table_name) || ' DROP CONSTRAINT ' || quote_ident(r.constraint_name);
          END LOOP;
        END $$;
      `);

      await strapi.db.connection.raw('DROP TABLE IF EXISTS page_contents CASCADE;');
    }

    console.log('Table page_contents and its dependencies have been removed successfully.');
  } catch (error) {
    console.error('Error during cleanup:', error.message);
  }
};
