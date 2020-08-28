package com.redhat.demo;

import com.redhat.demo.entities.User;

import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;

public interface UserResource extends PanacheEntityResource<User, Long> {
}