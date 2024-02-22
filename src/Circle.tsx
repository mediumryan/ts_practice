import { styled } from 'styled-components';

const CircleWrapper = styled.div<CircleProps>`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
    bgColor: string;
}

export default function Circle({ bgColor }: CircleProps) {
    return <CircleWrapper bgColor={bgColor}></CircleWrapper>;
}
