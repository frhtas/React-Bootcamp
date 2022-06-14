import axios from "axios";
import { IUser } from "./models/IUser";

// https://www.jsonbulut.com/json/userLogin.php?ref=74430d47fa16b4c53c0fe59510752c70&userEmail=zehra@mail.com&userPass=12345&face=no
export const baseURL = "https://www.jsonbulut.com/json/";
const ref = "74430d47fa16b4c53c0fe59510752c70";

const config = axios.create({
    baseURL: baseURL,
    params: { ref: ref },
    // headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // }
});

// User Login
export const userLogin = (userEmail: string, userPassword: string) => {
    const sendParams = {
        userEmail,
        userPass: userPassword,
        face: "no",
    };
    return config.get<IUser>("userLogin.php", { params: sendParams });
};
