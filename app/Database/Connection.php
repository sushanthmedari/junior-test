<?php 

namespace Database;

use PDO;

class Connection
{
    private static $Pdo_instance;
    private static array $params = [
        'host' => 'db',
        'db' => 'docker-php',
        'username' => 'user',
        'password' => 'secret'
    ];

    public static function getPdo(): PDO
    {
        if (is_null(self::$Pdo_instance))
        {
            self::$Pdo_instance = new PDO(
                'mysql:host=' . self::getParams('host') . ';dbname=' . self::getParams('db'),
                self::getParams('username'),
                self::getParams('password'),
                [
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                ]
            );
        }

        return self::$Pdo_instance;
    }


    private static function getParams(string $key): ?string
    {
        return self::$params[$key] ?? null;
    }
}