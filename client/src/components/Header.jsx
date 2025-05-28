import React, { useEffect, useState, useCallback, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';
import Swal from 'sweetalert2';

const Header = () => {

    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showMyInfo, setShowMyInfo] = useState(false);
    const navigate = useNavigate();

    const sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({ title, text: contents, icon, confirmButtonText });
    };


    useEffect(() => {
        const cookie_useremail = cookie.load('useremail');
        const cookie_username = cookie.load('username');
        const cookie_password = cookie.load('userpassword');
        console.log("Header cookie_useremail=" + cookie_useremail);
        console.log("Header cookie_username=" + cookie_username);
        if (cookie_useremail && cookie_username) {

            setUsername(cookie_username); // ← 이 줄이 반드시 있어야 username 표시됨
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 60);

            cookie.save('useremail', cookie_useremail, { path: '/', expires });
            cookie.save('username', cookie_username, { path: '/', expires });
            cookie.save('userpassword', cookie_password, { path: '/', expires });
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const logout = () => {
        Swal.fire({
            title: '로그아웃 하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
        }).then((result) => {
            if (result.isConfirmed) {
                cookie.remove('useremail', { path: '/' });
                cookie.remove('username', { path: '/' });
                cookie.remove('userpassword', { path: '/' });
                setIsLoggedIn(false);
                navigate('/');
            }
        });
    };

    return (
        <header className="gnb_box">
            <div className="hd_top">
                <div className="top_wrap ct1 af">
                    <ul className="hd_left af">
                        <li
                            className="my1"
                            onMouseEnter={() => setShowMyInfo(true)}
                            onMouseLeave={() => setShowMyInfo(false)}
                        >
                            <b>내정보</b>
                            {isLoggedIn && (
                                <div className="box0 box1">
                                    <ul>
                                        <li><Link to="/MyInfoEdit">내 정보 수정</Link></li>
                                        <li> <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>로그아웃</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="my2"><b><span>0</span>알림</b></li>
                    </ul>
                    {isLoggedIn && (
                        <div className="hd_right">
                            <p><span>{username}</span>님 반갑습니다.</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="h_nav ct1 af">
                <div className="logo">
                    <Link to={'/'}>
                        <img src={require("../img/layout/logo-logo.png")} alt="logo" />
                    </Link>
                </div>
                <nav className="gnb gnb_admin">
                    <ul className="af">
                        <li className="menulist"><Link to={'/'}>FRONT</Link></li>
                        <li className="menulist"><Link to={'/AdminResearchProject'}>BACK</Link></li>
                        <li className="menulist"><Link to={'/Testest'}>DATABASE</Link></li>
                        <li className="menulist"><Link to={'/SoftwareList'}>Tool목록</Link></li>
                        <li className="menulist"><Link to={'/SearchMap'}>오시는길</Link></li>
                        {!isLoggedIn && (   //login이 아니면
                            <>
                                <li className="menulist"><Link to={'/Register'}>회원가입</Link></li>
                                <li className="menulist"><Link to={'/LoginForm'}>로그인</Link></li>
                            </>
                        )}
                        {isLoggedIn && (    //login이면
                            <>
                                <li> <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>로그아웃</a></li>
                            </>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;