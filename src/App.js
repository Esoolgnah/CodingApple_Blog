/* eslint-disable */
import './App.css';
import React, { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        
        글제목.map((글, idx) =>{
          return(
            <div className="list" key={idx}>
              <h3 onClick = {() => {누른제목변경(idx)}}>{글}<span onClick = { () => {따봉변경(따봉+1)} }>👍🏻
              </span>{따봉}</h3>
              <p>2월 18일 발행</p>
              <hr/>
            </div>
          )
        })
      }
      
      <div className = 'publish'>
        <input onChange={ (e)=>{입력값변경(e.target.value) } }></input>
        <button onClick={ ()=>{
          let 글제목복사 = 글제목.slice();
          글제목복사.unshift(입력값);
          글제목변경(글제목복사);
        }}>저장</button>
      </div>

      <Profile />

      <button onClick = {() => {modal변경(!modal)}}>열고 닫기</button>
      {
        modal === true
        ?<Modal 글제목 = {글제목} 누른제목 = {누른제목}></Modal>
        :null
      }
    </div>
  ) 
}


function Modal(props){
  return (
    <div className = "modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {name:'Kim', age: 30}

  }
  changeName = () =>{
    this.setState( {name: 'Park'} )
  }
  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick = { this.changeName }>버튼</button>
      </div>
    )
  }

}

export default App;