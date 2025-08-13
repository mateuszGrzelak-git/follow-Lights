-- Check if the database exists, and create it if not
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'your_database_name')
BEGIN
    CREATE DATABASE your_database_name;
END;
GO

-- Switch to the newly created or existing database
USE your_database_name;
GO

-- Check if the 'Users' table exists, and create it if not
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Users')
BEGIN
    CREATE TABLE Users (
        Id UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
        Username NVARCHAR(255) NOT NULL,
        Email NVARCHAR(255) NOT NULL,
        Password NVARCHAR(255) NOT NULL
    );
END;
GO

-- Check if the 'UserProgress' table exists, and create it if not
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'UserProgress')
BEGIN
    CREATE TABLE UserProgress (
        Id UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
        Results INT NOT NULL,
        Rank INT NOT NULL,
        UpdateTime DATE NOT NULL,
        UserId UNIQUEIDENTIFIER,
        CONSTRAINT FK_User FOREIGN KEY (UserId) REFERENCES Users(Id)
    );
END;
GO