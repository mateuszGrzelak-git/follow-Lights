-- Sprawdzenie, czy baza danych istnieje, i jej utworzenie
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'your_database_name')
BEGIN
    CREATE DATABASE your_database_name;
END;
GO

-- Użycie bazy danych
USE your_database_name;
GO

-- Sprawdzenie, czy tabela istnieje, i jej utworzenie
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'Users' AND xtype = 'U')
BEGIN
    CREATE TABLE Users (
        Id UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
        Username NVARCHAR(255) NOT NULL,
        Email NVARCHAR(255) NOT NULL,
        Password NVARCHAR(255) NOT NULL,
        --PId UNIQUEIDENTIFIER, -- Kolumna dla klucza obcego
        --CONSTRAINT FK_UserProgress FOREIGN KEY (PId) REFERENCES UserProgress(Id)
    );
END;
GO

