import "dotenv/config"
import Jwt, { JwtPayload } from "jsonwebtoken"  

class JWT{
    private jwt_secrate:string
    constructor(){
        this.jwt_secrate = process.env.jwt_secrate!
    }

    generateAccessToken(payload:JwtPayload){

    }
    generateRefreshToken(payload:JwtPayload){

    }
    decodeAccessToken(payload:JwtPayload){

    }
    decodeRefreshToken(payload:JwtPayload){

    }
}

export const jwt = new JWT()