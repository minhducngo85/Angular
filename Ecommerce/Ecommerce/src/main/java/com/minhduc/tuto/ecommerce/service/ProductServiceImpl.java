package com.minhduc.tuto.ecommerce.service;

import javax.transaction.Transactional;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.minhduc.tuto.ecommerce.exception.ResourceNotFoundException;
import com.minhduc.tuto.ecommerce.model.Product;
import com.minhduc.tuto.ecommerce.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Override
    public Iterable<Product> getAllProducts() {
	return productRepository.findAll();
    }

    @Override
    public Product getProduct(@Min(value = 1, message = "Invalid product ID.") long id) {
	return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product id " +id+ " is not found!"));
    }

    @Override
    public Product save(Product product) {
	return productRepository.save(product);
    }

}
