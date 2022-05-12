package com.minhduc.tuto.ecommerce.controller;

import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.minhduc.tuto.ecommerce.exception.ResourceNotFoundException;
import com.minhduc.tuto.ecommerce.model.Product;
import com.minhduc.tuto.ecommerce.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class.getName());

    @Autowired
    private ProductService productService;

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
	LOGGER.info("get products");
	return productService.getAllProducts();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getProduct(@PathVariable("id") long id) {
	LOGGER.info("delete product");
	Product aProduct = productService.getProduct(id);
	if (aProduct != null) {
	    return new ResponseEntity<>(aProduct, HttpStatus.OK);
	} else {
	    throw new ResourceNotFoundException("Product id " + id + "not found");
	}
    }
}
