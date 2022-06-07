import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { IUser } from "./models/IUser";
import { fncCount } from "./Util";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function fncSend(num1: number) {
        console.log("fncSend Call", num1);
    }

    // Arrow functions
    const fncArrowSend = (num1: number) => {
        console.log("Send Data", num1);
        const count = fncCount("ReactApp");
        console.log(count);
        fncCall();
    };

    const user : IUser = {
        name: "Ali",
        surname: "Bilsin",
        age: 30,
    };

    const fncCall = () => {
        if (user.age) {
            const dt = user.age.toFixed();
            console.log(dt.charAt(0));
        }
    }

    const arr = [ "İstanbul", "İzmir", "Ankara", "Bursa", "Adana" ];

    const [search, setSearch] = useState("");

    // useEffect => uygulama çalışmaya başladığında otomatik olarak çalışır.
    // }) bitiş eğer [] yazılmazsa her state değişiminde bu fonksiyon tetiklenir.
    useEffect(() => {
        if (search !== "") {
            console.log("useEffect Call - 1");
        }
    }, [search]); // [] uygulamada çalışırken bir kez çalış ve hiçbir state'ten etkilenme!
    
    useEffect(() => {
        console.log("useEffect Call - 2");
    }, [])
    

    return (
        <>
            <NavMenu title="App - Title" fncSearch={setSearch} />
            <h2> { user.name } { user.surname } </h2>
            <h2> { user.age?.toFixed() } </h2>
            <div>
                <h3> { search } </h3>
                <h1> Welcome App </h1>
                <input type="email" onChange={(evt) => setEmail(evt.target.value)} placeholder="E-Mail" />
                <input type="password" onChange={(evt) => setPassword(evt.target.value)} placeholder="Password" />
                <button onClick={ (evt) => fncArrowSend(100) } >Send</button>
                <h4> { email } </h4>
                <hr />
                { arr.map((item, index) => 
                    <div key={index}>
                        <li><NavLink to={"/detail/" + item}> { item } </NavLink></li>
                    </div>
                )}
            </div>
            <hr />
            <div>Alt Bilgi</div>
        </>
    );
}

export default App;
