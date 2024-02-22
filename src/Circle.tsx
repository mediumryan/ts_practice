import { styled } from 'styled-components';
import Square from './Square';

const CircleWrapper = styled.div<CircleProps>`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    border: 5px solid ${(props) => props.borderColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

export default function Circle({ bgColor, borderColor }: CircleProps) {
    return (
        <CircleWrapper bgColor={bgColor} borderColor={borderColor ?? 'black'}>
            <Square sqColor="yellow" sqBorder="teal" />
            <Square sqColor="teal" />
            <Square sqColor="aliceblue" sqBorder="yellow" />
        </CircleWrapper>
    );
}
