import { Interface } from 'readline';
import { styled } from 'styled-components';
import Triangle from './Triangle';

interface SquareProps {
    sqColor: string;
    sqBorder?: string;
}

const SquareWrapper = styled.div<SquareProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.sqColor};
    border: 5px solid ${(props) => props.sqBorder};
    margin: 4px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Square({ sqColor, sqBorder }: SquareProps) {
    return (
        <SquareWrapper sqColor={sqColor} sqBorder={sqBorder ?? 'black'}>
            <Triangle trColor="black" trText="Text is..." />
        </SquareWrapper>
    );
}
