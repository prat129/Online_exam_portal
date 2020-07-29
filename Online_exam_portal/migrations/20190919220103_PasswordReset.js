
exports.up = function (knex) {
    return knex.schema
        .createTable('password_resets', function (table) {
            table.string('email', 255).primary();
            table.string('token', 255).notNullable().unique()
            table.integer('user_id').unsigned().notNullable();
            table.string('user_type', 255).notNullable();
            table.timestamps();
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('password_resets');
};
