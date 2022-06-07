import React from "react";
import { ProBilgiler } from "../models/IProduct";

function ProductItem(item: { pro: ProBilgiler, singleClick: React.Dispatch<React.SetStateAction<ProBilgiler>> }) {
    return (
        <>
            <div className="col-sm-4">
                <div className="card">
                    <img src={item.pro.images ? item.pro.images[0].normal : ""} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.pro.productName}</h5>
                        <p className="card-text">{item.pro.brief}</p>
                        <a onClick={() => item.singleClick(item.pro)} href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {item.pro.price}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
