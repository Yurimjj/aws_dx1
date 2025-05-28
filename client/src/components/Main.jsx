import React from "react";

function Main() {
    return (
        <div>
            <div className="section1">
                <b>여기는_개발_연습장_입니다</b>
                <p> 연습하고_있는_기술을_소개합니다 </p>

                <div className="container">
                    <div className="quick">
                        <a href="webpage_layout2.html">
                            <h3>FRONT</h3>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                        </a>
                    </div>
                    <div className="quick">
                        <a href="remove.html">
                            <h3>BACK</h3>
                            <p>Java</p>
                            <p>Spring</p>
                        </a>
                    </div>
                    <div className="quick">
                        <a href="#">
                            <h3>DATABASE</h3>
                            <p>MySQL</p>
                            <p>MariaDB</p>
                        </a>
                    </div>
                    <div className="quick last">
                        <a href="#">
                            <h3>Loading......</h3>
                            <p>...</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="intro1">
                    <a href="#">
                        <h3>교육장소</h3>
                        <p>윤성컴퓨터디자인DX아카데미<br /></p>
                    </a>
                </div>

                <div className="intro2">
                    <a href="#">
                        <h3>학원 위치</h3>
                        <p>서울특별시 **구 **동 **-*<br />
                            Open - 10:00 , Close - 17:00 </p>
                    </a>
                </div>
            </div>

            <div className="section3">

            </div>
        </div>
    );
}

export default Main;