package com.blog.technical.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HomeController {

    @GetMapping("hello")
    public List<String> hello() {
        return Arrays.asList("시작 페이지", "hi react");
    }
}
