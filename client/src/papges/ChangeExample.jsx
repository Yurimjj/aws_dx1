import React, {useState} from "react";

function ChangeExample(){

 const [toolName, setToolName] = useState("");
    const [id, setId] = useState("");

    return(
        <div>
            <input type="text" placeholder="이름을 입력하세요" onChange={(e) => setToolName(e.target.value)} /> <br />
            <input type="text" placeholder="아이디를 입력하세요" onChange={(e) => setId(e.target.value)} /> <br />
            <p>입력된 값: 당신의 이름은 {toolName}이고, 아이디는 {id}입니다.</p>
        </div>
    );
}


export default ChangeExample;