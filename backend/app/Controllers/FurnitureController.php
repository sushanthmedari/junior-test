<?php 

namespace Controllers;

class FurnitureController extends Controller
{

    public function __construct($sku, $name, $price, $product_type,$height, $width, $lenght, $weight, $size, $pdo ) 
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
        $lenght = $this->__get('lenght');
        $width = $this->__get('width');
        $height = $this->__get('height');

        if($product_type !== 'furniture'){
            return false; 
        }

        $query = "INSERT INTO products (sku,name, price,product_type,lenght,width,height) 
        VALUES (:sku,:name, :price,:product_type,:lenght,:width,:height)";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':sku',$sku);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':price',$price);
        $stmt->bindParam(':product_type', $product_type);
        $stmt->bindParam(':lenght',$lenght);
        $stmt->bindParam(':width',$width);
        $stmt->bindParam(':height',$height);
        $stmt->execute();
        return $stmt->rowCount() > 0;

    }

}