import React from "react";

function App() {
  const greetings = (e) => {
    e.preventDefault();
    alert("Hello World!");
  };

  return (
    <div>
      <form>
        <input type="file" id="file" accept="image/*" />
        {/* 이미지 구간 */}

        <p>문구</p>
        <input type="text" id="Text input" />

        <p>폰트</p>
        <select id="font">
          <option value="hanna">한나체</option>
          <option value="gungSeo">궁서체</option>
          <option value="handle">손글씨</option>
          <option value="barTang">바탕체</option>
        </select>

        <p>글씨색</p>
        <select id="fontColor">
          <option value="white">흰색</option>
          <option value="pink">분홍</option>
          <option value="blue">파랑</option>
          <option value="black">검정</option>
        </select>

        <p>글씨크기</p>
        <div className="fontSize">
          <input type="submit" value="작게"></input>
          <input type="submit" value="크게"></input>
          <input type="submit" value="초기화"></input>
        </div>

        <p>효과</p>
        <select id="effect">
          <option value="noEffect">효과없음</option>
          <option value="right">왼쪽➡오른쪽</option>
          <option value="left">오른쪽➡왼쪽</option>
        </select>
        <p>움직임 속도</p>
        <select id="speed">
          <option value="slow">느리게</option>
          <option value="normal" selected>
            보통
          </option>
          <option value="fast">빠르게</option>
        </select>

        <p>문구 위치를 드래그(손이나 마우스로!)로 수정하실 수 있어요!</p>
        <input type="submit" onClick={greetings} value="만들기"></input>
      </form>
    </div>
  );
}

export default App;
