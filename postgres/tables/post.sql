BEGIN TRANSACTION; -- we use transactions to make sure that if a query fails or part of a query fails then stop that operations, it also provides it an atomic structure, transactions are comman when we have multiple SQL commands
-- Connect to the "dev" database
\c dev

-- Create your user Posts
CREATE TABLE "Posts"(
    id serial PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL,
    content TEXT,
    userId INTEGER NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
    updatedAt DATE NOT NULL DEFAULT CURRENT_DATE
);

COMMIT;