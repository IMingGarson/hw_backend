/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: 'id',
        account: {type: 'varchar(1023)', notNull: true },
        password: { type: 'varchar(2047)', notNull: true  },
        username: { type: 'varchar(255)', default: "" },
        lastLoginAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        updatedAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        deleteAt: {
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
