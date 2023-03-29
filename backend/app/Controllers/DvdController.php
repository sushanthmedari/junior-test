<?php

namespace Controllers;

class DvdController extends Controller
{


    public function __construct($sku, $name, $price, $product_type, $height, $width, $lenght, $weight, $size, $pdo)
    {
        $this->name = $name;
        $this->sku = $sku;
        $this->price = $price;
        $this->product_type = $product_type;
        $this->height = $height;
        $this->width = $width;
        $this->lenght = $lenght;
        $this->size = $size;
        $this->weight = $weight;

        $this->save($pdo);
    }

    public function save($pdo): bool
    {

        $sku = $this->__get('sku');
        $name = $this->__get('name');
        $price = $this->__get('price');
        $product_type = $this->__get('product_type');
        $size = $this->__get('size');

        if ($product_type !== 'dvd') {
            return false;
        }

        $query = "INSERT INTO products (sku,name, price,product_type,size) 
        VALUES (:sku,:name, :price,:product_type,:size)";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':sku', $sku);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':product_type', $product_type);
        $stmt->bindParam(':size', $size);
        $stmt->execute();
        return $stmt->rowCount() > 0;
    }
}
