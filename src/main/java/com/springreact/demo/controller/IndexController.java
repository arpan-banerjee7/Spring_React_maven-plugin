package com.springreact.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@CrossOrigin
public class IndexController {

	@GetMapping("/hello")
	public String sayHello(Model theModel) {
		theModel.addAttribute("theDate", new java.util.Date());
		return "helloworld";
	}
	
	@GetMapping("")
	public ModelAndView home() {
		ModelAndView mav=new ModelAndView("index");
		return mav;
	}
	
}
