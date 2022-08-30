DROP TABLE pets;
CREATE TABLE pets (
    id serial,
    age integer,
    kind text,
    name text
);

INSERT INTO pets (age, kind, name) VALUES (9, 'Shepherd', 'Lassie');
INSERT INTO pets (age, kind, name) VALUES (7, 'Mastiff', 'Sash');


