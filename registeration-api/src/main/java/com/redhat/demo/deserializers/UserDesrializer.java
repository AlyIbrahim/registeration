package com.redhat.demo.deserializers;

import com.redhat.demo.entities.User;
import io.quarkus.kafka.client.serialization.JsonbDeserializer;

public class UserDesrializer extends JsonbDeserializer<User> {
    public UserDesrializer(){
        super(User.class);
    }
}