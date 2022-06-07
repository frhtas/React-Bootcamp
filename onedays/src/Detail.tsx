import React from "react";
import { useParams } from "react-router-dom";
import NavMenu from "./components/NavMenu";

function Detail() {
    // useParams
    const { idData } = useParams();

    return (
        <>
            <NavMenu />
            <div>Detail - { idData }</div>
        </>
    );
}

export default Detail;
