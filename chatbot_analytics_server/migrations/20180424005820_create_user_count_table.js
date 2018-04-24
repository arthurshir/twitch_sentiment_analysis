exports.up = function (knex, Promise) {
  return knex.schema.createTable('user', function (t) {
    t.string('username').primary()
    t.integer('num_happy_messages').notNullable().defaultTo(0)
    t.integer('num_unhappy_messages').notNullable().defaultTo(0)
    t.integer('num_neutral_messages').notNullable().defaultTo(0)
    t.timestamps(false, true)
  })
}
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user')
}