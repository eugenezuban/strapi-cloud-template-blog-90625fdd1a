'use strict';

module.exports = {
  async cleanup(ctx) {
    try {
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

      await strapi.db.connection.raw('DROP TABLE IF EXISTS page_contents CASCADE');

      ctx.body = { message: 'Table page_contents and its dependencies have been removed successfully.' };
    } catch (error) {
      ctx.throw(500, error.message);
    }
  }
};
