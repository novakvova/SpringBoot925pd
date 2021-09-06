package com.example.springboot.controllers.api;

import com.example.springboot.configure.security.JwtTokenUtil;
import com.example.springboot.dto.AuthRequest;
import com.example.springboot.dto.BadAuthResponce;
import com.example.springboot.dto.RegisterRequest;
import com.example.springboot.dto.UserView;
import com.example.springboot.repositories.UserRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Tag(name = "Authentication")
@RestController
@RequestMapping(path = "api/public")
@RequiredArgsConstructor
public class AuthApi {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("login")
    public ResponseEntity<UserView> login(@RequestBody @Valid AuthRequest request) {
        try {
            UserView userView = AuthUser(request.getUsername(), request.getPassword());
            return ResponseEntity.ok()
                    .header(HttpHeaders.AUTHORIZATION, userView.getToken())
                    .body(userView);
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("register")
    public ResponseEntity<Object> register(@RequestBody @Valid RegisterRequest request) {
        try {
            com.example.springboot.entities.User  register = userRepository.findByUsername(request.getUsername());
            if(register!=null)
            {
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(new BadAuthResponce("Користувач уже зареєстровано!"));
            }
            register = new com.example.springboot.entities.User();
            register.setUsername(request.getUsername());
            register.setPassword(passwordEncoder.encode(request.getPassword()));
            register.setFullName(request.getFullName());
            userRepository.save(register);
            UserView userView = AuthUser(request.getUsername(), request.getPassword());

            return ResponseEntity.ok()
                    .header(HttpHeaders.AUTHORIZATION, userView.getToken())
                    .body(userView);
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    private UserView AuthUser(String username, String password) {
        Authentication authenticate = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        username,
                        password));
        User user = (User) authenticate.getPrincipal();
        com.example.springboot.entities.User dbUser = userRepository
                .findByUsername(user.getUsername());
        UserView userView = new UserView();
        String token = jwtTokenUtil.generateAccessToken(dbUser);
        userView.setUsername(dbUser.getUsername());
        userView.setToken(token);
        userView.setFullName(dbUser.getFullName());
        return userView;
    }

}
