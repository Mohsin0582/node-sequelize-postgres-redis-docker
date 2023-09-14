BEGIN TRANSACTION; -- we use transactions to make sure that if a query fails or part of a query fails then stop that operations, it also provides it an atomic structure, transactions are comman when we have multiple SQL commands
-- Connect to the "dev" database
\c dev

-- Create your user Comments
CREATE TABLE "Comments"(
    id serial PRIMARY KEY,
    postId INTEGER NOT NULL,
    comment TEXT,
    userId INTEGER NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
    updatedAt DATE NOT NULL DEFAULT CURRENT_DATE
);

COMMIT;