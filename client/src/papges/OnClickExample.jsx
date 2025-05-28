import React, { useState } from 'react';
function OnClickExample() {
    const [name, setName] = useState("");

    const submitClick = async (type, e) => {
        e.preventDefault();          //이 문장이 없으면 버튼 클릭시 새로고침되어서 데이터가 날라갈수 있음
        if (type === 'save') {
           // setName('홍길동');
            console.log(name);
        }

        /*
          const response = await fetch(`http://localhost:5000/api/Swtool?type=${type}`, {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ username: name }),
         });
        */
    }
    return (
        <div>
            <form name="frm">
                <input type="text" name='username' onChange={(e) => setName(e.target.value)}/>
                <button onClick={(e) => submitClick('save', e)} > 저장 </button>
                <p>당신의 이름은 {name} 입니다.</p>
            </form>
        </div>
    );
}
export default OnClickExample;