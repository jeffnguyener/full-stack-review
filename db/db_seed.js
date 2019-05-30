CREATE TABLE balances (
    balance_id SERIAL PRIMARY KEY,
    balance INTEGER
);

CREATE TABLE user_login (
    login_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password TEXT
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
)