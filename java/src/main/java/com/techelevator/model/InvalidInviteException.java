package com.techelevator.model;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus( value = HttpStatus.BAD_REQUEST, reason = "You can't invite yourself to dinner.")
public class InvalidInviteException extends RuntimeException {

}
