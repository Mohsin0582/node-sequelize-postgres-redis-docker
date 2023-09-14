BEGIN TRANSACTION; -- we use transactions to make sure that if a query fails or part of a query fails then stop that operations, it also provides it an atomic structure, transactions are comman when we have multiple SQL commands
-- Connect to the "dev" database
\c dev

-- Create your user Users
CREATE TABLE "Users"(
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email TEXT UNIQUE NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
    updatedAt DATE NOT NULL DEFAULT CURRENT_DATE
);

COMMIT;