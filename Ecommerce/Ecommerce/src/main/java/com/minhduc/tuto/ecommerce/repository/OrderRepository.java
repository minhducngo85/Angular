package com.minhduc.tuto.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.minhduc.tuto.ecommerce.model.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

}
