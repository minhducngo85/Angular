package com.minhduc.tuto.ecommerce.service;


import javax.validation.constraints.Min;

import org.springframework.validation.annotation.Validated;

import com.minhduc.tuto.ecommerce.model.Product;

@Validated
public interface ProductService {
    Iterable<Product> getAllProducts();
    
    Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    Product save(Product product);
    
}
