package com.toothfinder.api.resource;

import java.util.List;

import jdk.nashorn.internal.objects.annotations.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public void inserirConsultorio(@RequestBody consultorio consultorioInserido){
		consultorioRepository.save(consultorioInserido);

	}


}
