import { Interface } from 'readline';
import { styled } from 'styled-components';
import Triangle from './Triangle';

interface SquareProps {
    sqColor: string;
}

const SquareWrapper = styled.div<SquareProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.sqColor};
    margin: 4px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Square({ sqColor }: SquareProps) {
    return (
        <SquareWrapper sqColor={sqColor}>
            <Triangle trColor="black" />
        </SquareWrapper>
    );
}
