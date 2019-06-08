import React, { Component } from 'react';
import Try from './Try';
// const React = require('react');
// const { Component } = React;

function getNumber() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumber(),
        tries: [],
    };
    
    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    fruits = [
        { fruit: '사과', taste: '맛있다'},
        { fruit: '딸기', taste: '상큼하다'},
        { fruit: '수박', taste: '달다'},
        { fruit: '참외', taste: '별로다'},
        { fruit: '복숭아', taste: '최애'},
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => {
                        return (
                            <Try key={v.fruit + v.taste} value={v} index={i} />
                            /*
                            key안에는 고유한 값을 넣어야한다. 위와 같은 경우 fruit가 중복값이 발생할수 있으므로 taste를 합쳐주었다.
                            고민이 필요한 부분. 인덱스 i가 고유값이긴하나 key값에 i를 넣지않도록한다. 이유는 성능최적화 문제 + react에서 key
                            를 기준으로 엘리멘트를 추가하거나 수정 삭제 판단하기 때문에 배열의 순서가 바뀌면 문제가 생긴다 
                            */
                        );
                    })}
                </ul>
            </>
        );
    };
}

export default NumberBaseball;
//module.exports = NumberBaseball;