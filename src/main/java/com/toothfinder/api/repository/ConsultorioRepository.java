package com.toothfinder.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.toothfinder.api.model.consultorio;

public interface ConsultorioRepository extends JpaRepository<consultorio, Long> {

}
