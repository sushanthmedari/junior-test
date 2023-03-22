<?php

use Controllers\ProductController;

require '../vendor/autoload.php';

$api = new ProductController();

$api->handleRequest();

// echo "Hello monde";