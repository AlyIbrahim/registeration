package com.redhat.demo;

import com.redhat.demo.entities.User;

import javax.transaction.Transactional;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import io.smallrye.reactive.messaging.annotations.Blocking;

import org.jboss.logging.Logger;

public class AsyncRegisteration {

    public Logger LOGGER = Logger.getLogger(AsyncRegisteration.class.getName());

    @Blocking
    @Transactional
    @Incoming("registeration")
    public void receiveData(User user){
        LOGGER.info("First Name: " + user.firstname);
        user.persist();
    }    


}