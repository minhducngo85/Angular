package com.minhduc.tuto.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.minhduc.tuto.ecommerce.model.OrderProduct;
import com.minhduc.tuto.ecommerce.repository.OrderProductRepository;

@Service
@Transactional
public class OrderProductServiceImpl implements OrderProductService {

    @Autowired
    private OrderProductRepository orderProductRepository;

    @Override
    public OrderProduct create(OrderProduct orderProduct) {
	return this.orderProductRepository.save(orderProduct);
    }
}
