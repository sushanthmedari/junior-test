<?php

namespace Controllers;

use Database\Connection;

use PDO;

abstract class Controller
{
  private $sku;
  private $name;
  private $price;
  private $product_type;
  private $height;
  private $width;
  private $lenght;
  private $size;
  private $weight;


  public function __get($property)
  {
    if (property_exists($this, $property)) {
      return $this->$property;
    }
  }

  public function __set($property, $value)
  {
    if (property_exists($this, $property)) {
      $this->$property = $value;
    }
    return $this;
  }

  public function getPdo()
  {
    $pdo = new Connection();
    return $pdo::getPdo();
  }

  public function deleteProducts($ids)
  {
    $ids = array_map('intval', $ids);
    $IDs = implode(',', array_fill(0, count($ids), '?'));
    $query = "DELETE FROM products WHERE id IN ($IDs)";
    $stmt = $this->getPdo()->prepare($query);
    $stmt->execute($ids);
    return $stmt->rowCount() > 0;
  }

  public function getProducts()
  {
    $stmt = $this->getPdo()->query('SELECT * FROM products');
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products);
  }

  abstract public function save($pdo);
}
