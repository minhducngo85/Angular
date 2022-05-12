package com.minhduc.tuto.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.minhduc.tuto.ecommerce.model.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

}
