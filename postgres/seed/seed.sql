BEGIN TRANSACTION; -- we use transactions to make sure that if a query fails or part of a query fails then stop that operations, it also provides it an atomic structure, transactions are comman when we have multiple SQL commands
-- Connect to the "dev" database
\c dev

-- Insert into Users
INSERT INTO "Users" (name, email, createdAt, updatedAt) VALUES ('Mohsin', 'm.mohsin.shahzad0582@gmail.com', '2023-09-09', '2023-09-09');
INSERT INTO "Users" (name, email, createdAt, updatedAt) VALUES ('Hassan', 'hassan@gmail.com', '2023-09-09', '2023-09-09');
INSERT INTO "Users" (name, email, createdAt, updatedAt) VALUES ('Taimoor', 'taimoor@gmail.com', '2023-09-09', '2023-09-09');

-- Insert into Posts
INSERT INTO "Posts" (title, content, userId, createdAt, updatedAt) VALUES ('Nodej Postgres Redis', 'New things to be done.', 1, '2023-09-09', '2023-09-09');
INSERT INTO "Posts" (title, content, userId, createdAt, updatedAt) VALUES ('hispotan de nu', 'Nulla mollis molestie lorem.', 2, '2023-09-09', '2023-09-09');
INSERT INTO "Posts" (title, content, userId, createdAt, updatedAt) VALUES ('some dummy title', 'Maecenas tincidunt lacus at velit.', 3, '2023-09-09', '2023-09-09');

-- Insert into Comments
INSERT INTO "Comments" (postId, userId, comment, createdAt, updatedAt) VALUES (1, 1, 'worth article', '2023-09-09', '2023-09-09');
INSERT INTO "Comments" (postId, userId, comment, createdAt, updatedAt) VALUES (2, 2, 'curabitur gravida nisi at nibh', '2023-09-09', '2023-09-09');
INSERT INTO "Comments" (postId, userId, comment, createdAt, updatedAt) VALUES (3, 3, 'vivamus vel nulla eget eros elementum pellentesque', '2023-09-09', '2023-09-09');

COMMIT;