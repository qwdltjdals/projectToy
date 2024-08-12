package com.study.todolist.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) { // 백엔드랑 프론트랑 연결해주는거
        registry.addMapping("/**") // 어떠한 요청이 와도 허용
                .allowedOriginPatterns("*") // 어떠한 곳에서 오든지 허용
                .allowedMethods("*") // 어떠한 메소드든 허용(put, delete등)
                .allowedHeaders("*") // 어떠한 헤더도 허용
                .allowCredentials(true);// 자격증명 사용
    }
}
