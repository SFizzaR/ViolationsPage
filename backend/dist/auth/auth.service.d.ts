import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtservice;
    constructor(jwtservice: JwtService);
    login(user: any): Promise<{
        access_token: string;
    }>;
}
