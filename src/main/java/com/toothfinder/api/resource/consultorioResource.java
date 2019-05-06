package com.toothfinder.api.resource;

import java.util.List;

import jdk.nashorn.internal.objects.annotations.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.toothfinder.api.model.consultorio;
import com.toothfinder.api.repository.ConsultorioRepository;

@RestController
@RequestMapping("/consultorios")
public class consultorioResource {
	
	@Autowired
	private ConsultorioRepository consultorioRepository;
	
	@GetMapping
	public List<consultorio> listar () {
		return consultorioRepository.findAll();
	}


}
