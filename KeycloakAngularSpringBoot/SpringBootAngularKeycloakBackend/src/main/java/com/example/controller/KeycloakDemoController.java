package com.example.controller;

import javax.annotation.security.RolesAllowed;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.MessageResponse;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api")
public class KeycloakDemoController {
    
    @GetMapping(value = "/admin")
    @RolesAllowed("ROLE_ADMIN")
    public MessageResponse adminEndPoint() {
	System.out.println("Admin endpoint!");
	return new MessageResponse("Hello From Admin! Msg was sent from backend!");
    }

    @GetMapping(value = "/manager")
    @RolesAllowed("ROLE_MANAGER")
    public MessageResponse managerEndPoint() {
	System.out.println("Manager endpoint!");
	return new MessageResponse("Hello From Manager! Msg was sent from backend!");
    }
}
