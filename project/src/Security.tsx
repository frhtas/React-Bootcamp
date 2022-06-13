import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import MenuAppBar from "./components/MenuAppBar";
import { Bilgiler } from "./models/IUser";
import { decrypt } from "./Util";

function Security(item: { component: JSX.Element }) {
    const control = (): Bilgiler | null => {
        const localStBilgiler = localStorage.getItem("user"); // remember control
        if (localStBilgiler) {
            sessionStorage.setItem("user", localStBilgiler);
        }

        const stBilgiler = sessionStorage.getItem("user");

        if (stBilgiler) {
            try {
                const bilgiler: Bilgiler = JSON.parse(decrypt(stBilgiler));
                return bilgiler;
            } catch (error) {
                sessionStorage.removeItem("user");
                return null;
            }
        }
        return null;
    };

    const bilgi = control();

    return bilgi === null ? (
        <Navigate to="/" />
    ) : (
        <Container>
            <MenuAppBar userItem={bilgi} />
            {item.component}
        </Container>
    );
}

export default Security;
