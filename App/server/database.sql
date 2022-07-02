CREATE DATABASE devicereg;

CREATE TABLE devices(
    did SERIAL PRIMARY KEY,
    devicename VARCHAR(255),
    deviceid VARCHAR(255)
);