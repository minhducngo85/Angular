package com.minhduc.tuto.ecommerce;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.minhduc.tuto.ecommerce.model.Product;
import com.minhduc.tuto.ecommerce.service.ProductService;

@SpringBootApplication
public class EcommerceBackendApplication {

    public static void main(String[] args) {
	SpringApplication.run(EcommerceBackendApplication.class, args);
    }
    
    @Bean
    CommandLineRunner runner(ProductService productService) {
	return args -> {
            productService.save(new Product(11L, "TV Set 2", 300.00, "http://placehold.it/200x100"));
            productService.save(new Product(12L, "Game Console 2", 200.00, "http://placehold.it/200x100"));
            productService.save(new Product(13L, "Sofa 2", 100.00, "http://placehold.it/200x100"));
            productService.save(new Product(14L, "Icecream 2", 5.00, "http://placehold.it/200x100"));
            productService.save(new Product(15L, "Beer 2", 3.00, "http://placehold.it/200x100"));
            productService.save(new Product(16L, "Phone 2", 500.00, "http://placehold.it/200x100"));
            productService.save(new Product(17L, "Watch 2", 30.00, "http://placehold.it/200x100"));
        };
    }
}
