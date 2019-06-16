import React, {useState, useRef} from 'react'

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);
    const timeout = useRef(null); //값이 바뀌기기는 하지만 화면에 영향을 주고 싶지 않을때 useRef 사용
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if(state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');
            timeout.current = setTimeout(()=>{
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); //2 ~3초 랜덤
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('이런 성급하셨군요! 초록색이 된 후에 클릭하세요');
        } else if (state === 'now') { // 반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]; //useRef면 무조건 current로 접근
            });
        }
    };
    const onReset = () => {
        setResult([]);
    }
    const renderAverage = () => {
        return result.length === 0
            ? null // jsx에서는 null은 태그가 없음을 의미
            : <>
            <div>평균 시간 : {result.reduce((a,c) => a + c) / result.length}ms</div>
            <button onClick={onReset}>리셋</button>
            </>
    };

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}                
        </>
    );
}

export default ResponseCheck;