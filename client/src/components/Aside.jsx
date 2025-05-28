
import React, { useState } from "react";
import { Link } from "react-router-dom";
import btnClose from "../img/aside/btn_close.png";
import btnOpen from "../img/aside/btn_open.png";

function Aside() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside
            className={isOpen ? 'open' : ''}
            style={{
                right: isOpen ? 0 : '-220px',
                transition: 'right 0.5s ease-in-out',
                position: 'fixed'
            }}
        >
            <Link to={'#'}>
                <img src={require("../img/aside/photo_review.jpg")} alt="" />

            </Link>
            <nav id="asidenav">
                <ul>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">상품문의</a></li>
                    <li><a href="#">배송조회</a></li>
                    <li><a href="#">장바구니</a></li>
                    <li><a href="#">관심상품</a></li>
                </ul>
            </nav>
            <button onClick={() => setIsOpen(!isOpen)}>
                <img
                    src={isOpen ? btnClose : btnOpen} alt={isOpen ? 'close' : 'open'}
                />
            </button>
        </aside>

    );
}

export default Aside;