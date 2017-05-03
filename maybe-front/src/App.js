import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 로딩뷰를 만들고
    }
  }
  componentWillMount() {
    //컴포넌트가 마운트 되기 전에 실행
    //AJAX콜 해서 데이터 가져오기
    axios.get('localhost:4000/book/'+this.props.bid , (result) => {
      this.setState({book:result});
    })

  }
  componentWillUpdate() {
    //컴포넌트가 업데이트 되기 전에 실행
  }
  componentDidMount() {
    //컴포너트가 마운트 된 직후에 실행
  }
  componentDidUpdate() {
    //컴포넌트가 업데이트 된 직후에 실행
  }
  render() {
    return (
      <div className="book-info-background">
          <div className="container">
              <div className="book-info-inner">
                  <img src={logo} className="book-info-thumbnail"/>
              </div>
              <div className="book-info-inner">
                  <h3>책 제목</h3>
                  <div className="book-info-list">
                      <span>저자</span>
                      <a href="#">{this.state.book.author.name}</a>
                  </div>
                  <div className="book-info-list">
                      <span>출판사</span>
                      <span>출판사명</span>
                  </div>
                  <div className="book-info-list">
                      <span>출간일</span>
                      <span>출판사명</span>
                  </div>
                  <div className="book-info-list">
                      <span>정가</span>
                      <span>출판사명</span>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
