import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      msg: 'Logged in successfully',
    };
  }
  signup() {
    return {
      msg: 'Signed up successfully',
    };
  }
}
