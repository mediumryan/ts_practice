import { styled } from 'styled-components';
import Square from './Square';

const CircleWrapper = styled.div<CircleProps>`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

interface CircleProps {
    bgColor: string;
}

export default function Circle({ bgColor }: CircleProps) {
    return (
        <CircleWrapper bgColor={bgColor}>
            <Square sqColor="yellow" />
            <Square sqColor="teal" />
            <Square sqColor="aliceblue" />
        </CircleWrapper>
    );
}
