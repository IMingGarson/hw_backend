/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: 'id',
        account: {type: 'varchar(1023)', notNull: true },
        password: { type: 'varchar(2047)', notNull: true  },
        username: { type: 'varchar(255)', default: "" },
        last_login_at: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        updated_at: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        created_at: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        delete_at: {
            type: 'timestamp',
            default: null,
        }
    });
    pgm.createIndex('users', 'account');
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE users;
    `);
};
