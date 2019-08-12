exports.up = knex => {
  return Promise.all([
    knex.schema.createTable("user_profile", table => {
      table.increments("id").primary();
      table.string("first_name");
      table.string("last_name");
      table.string("email");
      table.timestamp("joined_dt");
      table.timestamp("last_login_dt");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    }),
    knex.schema.createTable("user_content", table => {
      table.increments("id").primary();
      table.string("email");
      table.text("title");
      table.text("description");
      table.string("ext_content_id");
      table.string("content_type");
      table.float("rating");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("last_viewed_at");

    }),
    knex.schema.createTable("user_content_watch_list", table => {
      table.increments("id").primary();
      table.string("email");
      table.text("title");
      table.text("description");
      table.string("ext_content_id");
      table.string("content_type");
      table.timestamp("created_at").defaultTo(knex.fn.now());

    })
  ]);
};

exports.down = knex => {
  return Promise.all([
    knex.schema.dropTable("user_content_watch_list"),
    knex.schema.dropTable("user_content"),
    knex.schema.dropTable("user_profile")

]);
};
