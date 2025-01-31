package com.hotel.booking.system.api.service;

import java.util.List;

public interface GenericService<T> {
	T saveEntity(T entity);
	List<T> getAllEntities();
	T getEntityById(long id);
	T updateEntity(T entity, long id);
	void deleteEntity(long id);
}
