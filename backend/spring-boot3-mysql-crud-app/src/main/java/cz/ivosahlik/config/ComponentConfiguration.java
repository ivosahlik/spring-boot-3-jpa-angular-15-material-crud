package cz.ivosahlik.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackages = "cz.ivosahlik")
@Import(WebConfiguration.class)
@Slf4j
@SuppressWarnings("static-method")
public class ComponentConfiguration {


}