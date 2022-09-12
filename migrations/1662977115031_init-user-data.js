/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        INSERT INTO users (account, password, username)
        VALUES
        ('JimmyLiu@gmail.com', '5a105e8b9d40e1329780d62ea2265d8a', 'Jimmy'),
        ('xoxoxo@gmail.com', 'ad0234829205b9033196ba818f7a872b', 'yoyo_cool'),
        ('ccweb@hotmail.com', '8ad8757baa8564dc136c1e07507f4a98', 'web');
    `);
};

exports.down = pgm => {
    pgm.sql(`
        DELETE FROM users WHERE account = 'JimmyLiu@gmail.com';
        DELETE FROM users WHERE account = 'xoxoxo@gmail.com';
        DELETE FROM users WHERE account = 'ccweb@hotmail.com';
    `);
};
