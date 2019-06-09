import React, { useState }from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => {
                return [...prevTries, {try: value, result: '홈런!'}]
            })
            alert('홈런! 게임을 다시 시작합니다');
            setValue('');
            setAnswer(getNumbers())
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다`);
                alert('게임을 다시 시작합니다')
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i =0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}])
                setValue('');
            }
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return(
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
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
    )
}


export default NumberBaseball;
