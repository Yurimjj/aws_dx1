//my-fullstack-app\client\src\components\SoftwareList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function SoftwareList() {
    const [swToolList, setSwToolList] = useState([]);
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');


    useEffect(() => {
        callSwToolListApi();
    }, []);

    // DB 목록 보기 api 
    const callSwToolListApi = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/Swtool?type=list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            });

            if (!response.ok) throw new Error('서버 응답 실패');

            const data = await response.json();

            if (Array.isArray(data)) {
                setSwToolList(data);
            } else if (data?.json) {
                setSwToolList(data.json);
            } else {
                alert('데이터를 불러오지 못했습니다.');
            }
        } catch (error) {
            alert('작업 중 오류가 발생하였습니다: ' + error.message);
            console.error('API 호출 에러:', error);
        }
    };

    // 입력값
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    // 검색버튼
    const searchSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }

    //DB 삭제 api
    const deleteSwtool = (toolCode) => {
        sweetalertDelete('정말 삭제하시겠습니까?', async () => {
            try {
                const response = await fetch('http://localhost:5000/api/Swtool?type=delete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ is_SwtCd: toolCode })
                });

                if (!response.ok) throw new Error('삭제 요청 실패');

                await callSwToolListApi();
            } catch (error) {
                alert('작업 중 오류가 발생하였습니다.');
                console.error('삭제 에러:', error);
            }
        });
    };


    //sweetalert 경고창
    const sweetalertDelete = (title, callbackFunc) => {
        Swal.fire({
            title: title,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', '삭제되었습니다.', 'success');
                callbackFunc();
            }
        });
    };

    // html -> SwToolListAppend() 호출되어 실제 DB 레코드 출력
    const SwToolListAppend = () => {
        const filteredList = swToolList.filter((tool) =>
            tool.swt_toolname.toLowerCase().includes(search.toLowerCase())
        );
        return filteredList.map((data, idx) => {
            const date = data.reg_date || '';
            const reg_date = date.length >= 8
                ? `${date.substr(0, 4)}년${date.substr(4, 2)}월${date.substr(6, 2)}일`
                : date;

            return (
                <tr className="hidden_type" key={data.swt_code || idx}>
                    <td>{data.swt_toolname}</td>
                    <td>{data.swt_function}</td>
                    <td>{reg_date}</td>
                    <td>
                        <Link to={`/SoftwareView/${data.swt_code}`} className="bt_c1 bt_c2 w50_b">수정</Link>
                        <a href="#n" className="bt_c1 w50_b" onClick={() => deleteSwtool(data.swt_code)}>삭제</a>
                    </td>
                </tr>
            );
        });
    };

    // 브라우저에 출력 될 태그
    return (
        <section className="sub_wrap">
            <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                <div className="li_top">
                    <h2 className="s_tit1">Software Tools 목록</h2>
                    <div className="li_top_sch af">
                        <form onSubmit={searchSubmit}>
                            <input type="text" name="swt_toolname" placeholder='툴 이름을 입력하세요' value={input} onChange={handleChange} className='search_bar' />
                            <button type='submit' className='input_button'>검색</button>
                        </form>
                        <Link to="/SoftwareView/register" className="sch_bt2 wi_au">Tool 등록</Link>
                    </div>
                </div>

                <div className="list_cont list_cont_admin">
                    <table className="table_ty1 ad_tlist">
                        <thead>
                            <tr>
                                <th>툴 이름</th>
                                <th>기능</th>
                                <th>등록일</th>
                                <th>기능</th>
                            </tr>
                        </thead>
                    </table>
                    <table className="table_ty2 ad_tlist">
                        <tbody>{SwToolListAppend()}</tbody>
                    </table>
                </div>
            </article>
        </section>
    );
}

export default SoftwareList;