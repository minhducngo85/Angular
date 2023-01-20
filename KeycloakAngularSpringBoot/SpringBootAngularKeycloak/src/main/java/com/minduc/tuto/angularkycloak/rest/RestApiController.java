package com.minduc.tuto.angularkycloak.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/api")
public class RestApiController {

	@RequestMapping(method = RequestMethod.GET, value="/admin")
	public SenderResponse adminEndPoint() {
	    	System.out.println("Admin endepoint");
		return new SenderResponse("Hello From Admin! Spring Boot Backend!");
	}

	@RequestMapping(method = RequestMethod.GET, value="/manager")
	public SenderResponse managerEndPoint() {
	    System.out.println("Manager endepoint");
		return new SenderResponse("Hello From Manager! Spring Boot Backend!");
	}
}
