package cz.ivosahlik.repository;

import cz.ivosahlik.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}