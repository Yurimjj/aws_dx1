//my-fullstack-app/client/pages/Test.jsx
import React, { useEffect } from 'react';

function Testest() {
    // const [data, setData] = useState(null);
    // const [err, setErr] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mapper: 'SwToolsMapper',
                mapper_id: 'selectSwToolsList'
                // mapper_id: 'selectCount'
            }),
            credentials: 'include' // 인증 정보 포함
        })
            .then(response => response.json())
            .then(data => {
                // setData(data);
                console.log('서버 응답:', data);
            })
            .catch(error => {
                // setErr(err);
                console.error('에러 발생:', error);
            });


    }, []);

    return (
        <div>
            <h1>My Test</h1>
            {/* {data ? (<p>{JSON.stringify(data)}</p>): (<p>로딩중...</p>)}
            {err ? (<p> 에러있음</p>) : (<p>에러없음</p>)} */}
        </div>
    );
}

export default Testest;