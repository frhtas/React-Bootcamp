import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "./components/Modal";
import ProductItem from "./components/ProductItem";
import { ProBilgiler } from "./models/IProduct";
import { Bilgiler } from "./models/IUser";
import { allProduct } from "./Services";

function Dashboard() {
    const loc = useLocation();
    const navigate = useNavigate();

    const [bilgiler, setBilgiler] = useState<Bilgiler>({});
    const [proArr, setProArr] = useState<ProBilgiler[]>([]);
    const [single, setSingle] = useState<ProBilgiler>({})

    useEffect(() => {
        if (loc.state) {
            const yeniBilgiler = loc.state as Bilgiler;
            setBilgiler(yeniBilgiler);
        } else {
            navigate("/");
        }

        toast.loading("Loading...");

        allProduct()
            .then((res) => {
                const products = res.data.Products[0];
                console.log(products);
                setProArr(products.bilgiler);
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                toast.dismiss();
            });
    }, []);

    return (
        <>
            <h3>
                {bilgiler.userName} {bilgiler.userSurname}
            </h3>
            <hr></hr>
            <div className="row">
                {proArr.map((item, index) => (
                    <ProductItem key={index} pro={item} singleClick={setSingle} />
                ))}
            </div>
            <Modal pro={single} />
        </>
    );
}

export default Dashboard;
