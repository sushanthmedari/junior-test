<?php

namespace Controllers;

use Controllers\DvdController;
use Controllers\BookController;
use Controllers\FurnitureController;

class ProductController extends Controller
{
    const HTTP_ACCESS_CONTROL_REQUEST_METHOD = 'HTTP_ACCESS_CONTROL_REQUEST_METHOD';
    const HTTP_ACCESS_CONTROL_REQUEST_HEADERS = 'HTTP_ACCESS_CONTROL_REQUEST_HEADERS';

    public static function getHeaders()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            if (isset($_SERVER[self::HTTP_ACCESS_CONTROL_REQUEST_METHOD])) {
                header('Access-Control-Allow-Origin: *');
            }
            if (isset($_SERVER[self::HTTP_ACCESS_CONTROL_REQUEST_HEADERS])) {
                header('Access-Control-Allow-Headers: ' . $_SERVER[self::HTTP_ACCESS_CONTROL_REQUEST_HEADERS]);
            }
            header('Content-Type: application/json; charset=UTF-8');
            exit();
        }
    }



    public function save($pdo): void
    {
    }

    public function handleRequest(): void
    {
        self::getHeaders();
        $requestMethod = $_SERVER["REQUEST_METHOD"];

        switch ($requestMethod) {
            case 'POST':
                $this->handlePostRequest();
                break;

            case 'GET':
                echo $this->getProducts();
                break;

            default:
                http_response_code(405);
                echo json_encode(['message' => 'Method not allowed']);
                break;
        }
    }

    private function handlePostRequest(): void
    {
        $data = json_decode(file_get_contents("php://input"), true);

        if (isset($data['action']) && $data['action'] === 'addProducts') {
            $success = $this->addProducts($data);
            $this->getResponse($success, $data['action']);
        } else if (isset($data['action']) && $data['action'] === 'deleteProducts' && isset($data['ids'])) {
            $ids = $data['ids'];
            $success = $this->deleteProducts((array)$ids);
            $this->getResponse($success, $data['action']);
        } else {
            http_response_code(400);
            echo json_encode(['message' => 'Invalid request parameters']);
        }
    }

    private function addProducts(array $data): bool
    {
        $this->__set('name', $data['name'] ?? '');
        $this->__set('price', $data['price'] ?? '');
        $this->__set('sku', $data['sku'] ?? '');
        $this->__set('product_type', $data['product_type'] ?? '');
        $this->__set('size', isset($data['size']) ? $data['size'] : null);
        $this->__set('weight', isset($data['weight']) ? $data['weight'] : null);
        $this->__set('height', isset($data['height']) ? $data['height'] : null);
        $this->__set('width', isset($data['width']) ? $data['width'] : null);
        $this->__set('lenght', isset($data['lenght']) ? $data['lenght'] : null);

        $dvd = new DvdController($this->sku, $this->name, $this->price, $this->product_type, $this->height, $this->width, $this->lenght, $this->weight, $this->size, $this->getPdo());
        $book = new BookController($this->sku, $this->name, $this->price, $this->product_type, $this->height, $this->width, $this->lenght, $this->weight, $this->size, $this->getPdo());
        $furniture = new FurnitureController($this->sku, $this->name, $this->price, $this->product_type, $this->height, $this->width, $this->lenght, $this->weight, $this->size, $this->getPdo());
        if (($dvd || $furniture || $book) === true) {
            return true;
        }
        return false;
    }


   
}
