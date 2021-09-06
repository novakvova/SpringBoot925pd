package com.example.springboot;

import com.example.springboot.storage.FilesStorageService;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
//@SecurityScheme(name = "authAPI", scheme = "bearer", type = SecuritySchemeType.HTTP, in = SecuritySchemeIn.HEADER)
public class Application {

	public static void main(String[] args) {
		//ApplicationContext ctx =
				SpringApplication.run(Application.class, args);

//		System.out.println("Let's inspect the beans provided by Spring Boot:");
//
//		String[] beanNames = ctx.getBeanDefinitionNames();
//		Arrays.sort(beanNames);
//		for (String beanName : beanNames) {
//			System.out.println(beanName);
//		}
	}
	@Bean
	CommandLineRunner init(FilesStorageService storageService) {
		return(args) -> {
			try {
				//storageService.deleteAll();
				storageService.init();
				//storageService.init();
			}
			catch(Exception ex) {
				System.out.println("-----Problem---");
			}
		};
	}
	
}
