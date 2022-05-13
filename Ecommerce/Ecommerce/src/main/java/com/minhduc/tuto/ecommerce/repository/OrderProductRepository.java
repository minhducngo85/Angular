package com.minhduc.tuto.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.minhduc.tuto.ecommerce.model.OrderProduct;
import com.minhduc.tuto.ecommerce.model.OrderProductPK;

/**
 * JpaRepository extends PagingAndSortingRepository which in turn extends
 * CrudRepository.
 * 
 * Their main functions are:
 * 
 * CrudRepository mainly provides CRUD functions.<br/>
 * 
 * PagingAndSortingRepository provides methods to do pagination and sorting
 * records.<br/>
 * 
 * JpaRepository provides some JPA-related methods such as flushing the
 * persistence context and deleting records in a batch.
 * 
 * @author Berry
 *
 */
@Repository
public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
