import { useState } from 'react';
import { styled } from 'styled-components';

const CounterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    button {
        font-size: 2.5rem;
        padding: 0.5rem;
        margin: 0.5rem;
    }
`;

export default function Counter() {
    const [count, setCount] = useState(0);

    const plusCnt = () => {
        setCount((prev) => prev + 1);
    };

    const minusCnt = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <CounterWrapper>
            <span>{count}</span>
            <div>
                <button onClick={minusCnt}>-</button>
                <button onClick={plusCnt}>+</button>
            </div>
        </CounterWrapper>
    );
}

// 해당 코드는 기존의 JS 코드와 변함이 없음.
// TS의 타입 추론으로 useState(0) 이라는 값을 토대로 count, setCount 함수가 모두 number 값을 가질 것이라는 것을 추론함.
