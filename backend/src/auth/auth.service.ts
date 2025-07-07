import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtservice: JwtService) { }
    async login(user: any) {
        const payload = { email: user.email, sub: user.userId }
        return {
            access_token: this.jwtservice.sign(payload)
        }
    }
}
