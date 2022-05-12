package com.minhduc.tuto.ecommerce.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.minhduc.tuto.ecommerce.dto.OrderProductDto;
import com.minhduc.tuto.ecommerce.exception.ResourceNotFoundException;
import com.minhduc.tuto.ecommerce.model.Order;
import com.minhduc.tuto.ecommerce.model.OrderProduct;
import com.minhduc.tuto.ecommerce.model.OrderStatus;
import com.minhduc.tuto.ecommerce.service.OrderProductService;
import com.minhduc.tuto.ecommerce.service.OrderService;
import com.minhduc.tuto.ecommerce.service.ProductService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    ProductService productService;

    @Autowired
    OrderService orderService;

    @Autowired
    OrderProductService orderProductService;

    @Operation(summary = "Get all orders")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Order> list() {
	return this.orderService.getAllOrders();
    }

    /**
     * First of all, we accept a list of products with their corresponding
     * quantities. After that, we check if all products exist in the database
     * and then create and save a new order. We're keeping a reference to the
     * newly created object so we can add order details to it.
     * 
     * 
     * Finally, we create a “Location” header.
     * 
     * The detailed implementation is in the repository – the link to it is
     * mentioned at the end of this article.
     * 
     * @param form
     * @return
     */
    @PostMapping
    public ResponseEntity<Order> create(@RequestBody OrderForm form) {
	List<OrderProductDto> formDtos = form.getProductOrders();
	validateProductsExistence(formDtos);
	Order order = new Order();
	order.setStatus(OrderStatus.PAID.name());
	order = this.orderService.create(order);

	List<OrderProduct> orderProducts = new ArrayList<>();
	for (OrderProductDto dto : formDtos) {
	    orderProducts
	            .add(orderProductService.create(new OrderProduct(order, productService.getProduct(dto.getProduct().getId()), dto.getQuantity())));
	}

	order.setOrderProducts(orderProducts);

	this.orderService.update(order);

	/** send location uri of create dorder in header */
	String uri = ServletUriComponentsBuilder.fromCurrentServletMapping().path("/orders/{id}").buildAndExpand(order.getId()).toString();
	HttpHeaders headers = new HttpHeaders();
	headers.add("Location", uri);

	return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
    }

    private void validateProductsExistence(List<OrderProductDto> orderProducts) {
	List<OrderProductDto> list = orderProducts.stream().filter(op -> Objects.isNull(productService.getProduct(op.getProduct().getId())))
	        .collect(Collectors.toList());

	if (!CollectionUtils.isEmpty(list)) {
	    new ResourceNotFoundException("Product not found");
	}
    }

    public static class OrderForm {
	private List<OrderProductDto> productOrders;

	public List<OrderProductDto> getProductOrders() {
	    return productOrders;
	}

	public void setProductOrders(List<OrderProductDto> productOrders) {
	    this.productOrders = productOrders;
	}
    }
}
