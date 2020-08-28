package com.redhat.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
public class User extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
	public Long id;

    @Column(name="FIRST_NAME")
    public String firstname;

    @Column(name="LAST_NAME")
    public String lastname;

    @Column(name="TITLE")
    public String title;
}