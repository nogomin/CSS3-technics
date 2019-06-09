import React, { Component } from 'react';
import Try from './Try';

// const React = require('react');
// const { Component } = React;

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };
    
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, { try: this.state.value, result: '홈런!'}]
                /* 
                this.state.tries.push하면 기존 배열에서 달라지는것을 react에서 알아차리지 못함
                그래서 기존 꺼를 ...this.state.tries로 복사하고 새로운 값을 더해준다. 그럼 기존 배열과 새로생긴배열이 false가 되어
                리액트가 기존 배열이 달라졌음을 알수 있음
                */
            })
            alert('홈런! 게임을 다시 시작합니다');
            this.setState({
                value:'',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다`,
                });
                alert('게임을 다시 시작합니다')
                this.setState({
                    value:'',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i =0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                    value: '',
                })
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        })
    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
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