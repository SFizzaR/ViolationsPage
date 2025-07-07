import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1hr' }
        })
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]
})

export class AuthModule { }
