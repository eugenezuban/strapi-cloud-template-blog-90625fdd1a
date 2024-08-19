'use strict';

module.exports = {
  up: async (knex) => {
    try {
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      await knex.raw(`
        DO $$
        DECLARE
          r RECORD;
        BEGIN
          -- Remove constraints
          FOR r IN (SELECT conname, conrelid::regclass AS table_name FROM pg_constraint
                    WHERE confrelid = 'page_contents'::regclass::oid)
          LOOP
            EXECUTE 'ALTER TABLE ' || r.table_name || ' DROP CONSTRAINT IF EXISTS ' || r.conname;
          END LOOP;
        END $$;
      `);

      await knex.raw(`
        DO $$
        DECLARE
          r RECORD;
        BEGIN
          -- Remove triggers
          FOR r IN (SELECT tgname, tgrelid::regclass AS table_name FROM pg_trigger
                    WHERE tgrelid = 'page_contents'::regclass::oid)
          LOOP
            EXECUTE 'DROP TRIGGER IF EXISTS ' || r.tgname || ' ON ' || r.table_name;
          END LOOP;
        END $$;
      `);

      await knex.raw(`
        DO $$
        DECLARE
          r RECORD;
        BEGIN
          -- Remove indexes
          FOR r IN (SELECT indexname FROM pg_indexes WHERE tablename = 'page_contents')
          LOOP
            EXECUTE 'DROP INDEX IF EXISTS ' || r.indexname;
          END LOOP;
        END $$;
      `);

      await knex.schema.dropTableIfExists('page_contents');

      console.log('Table page_contents and its dependencies have been removed successfully.');
    } catch (error) {
      console.error('Error during migration:', error);
      throw error;
    }
  },

  down: async (knex) => {
    console.log('This migration cannot be reverted.');
  },
};
