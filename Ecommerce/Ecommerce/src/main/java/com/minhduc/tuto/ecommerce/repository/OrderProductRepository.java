package com.minhduc.tuto.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.minhduc.tuto.ecommerce.model.OrderProduct;
import com.minhduc.tuto.ecommerce.model.OrderProductPK;

@Repository
public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
