// import components
import { styled } from 'styled-components';
import { ProjectInner, ProjectOuter, ProjectTitle } from '../Home';
// import css
import './../CSS/calculator.css';
import { useState } from 'react';

const CalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input,
    button,
    .result {
        font-size: 1.5rem;
        margin: 1rem;
    }
`;

export default function Calculator() {
    const [num1, setNum1] = useState<number | null>();
    const [num2, setNum2] = useState<number | null>();
    const [result, setResult] = useState<number | null>();

    const getNum1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum1(Number(e.target.value));
    };

    const getNum2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum2(Number(e.target.value));
    };

    const plusNum = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (num1 && num2) {
            setResult(num1 + num2);
        }
        setNum1(null);
        setNum2(null);
    };

    return (
        <ProjectOuter>
            <ProjectTitle>
                <h2>Calculator</h2>
            </ProjectTitle>
            <ProjectInner>
                <CalForm>
                    <div>
                        <input
                            type="number"
                            placeholder="0"
                            value={num1 ? num1 : 0}
                            onChange={getNum1}
                        />
                        <input
                            type="number"
                            placeholder="0"
                            value={num2 ? num2 : 0}
                            onChange={getNum2}
                        />
                    </div>
                    <button onClick={plusNum}>Plus</button>
                    <div>
                        <p className="result">{result}</p>
                    </div>
                </CalForm>
            </ProjectInner>
        </ProjectOuter>
    );
}
