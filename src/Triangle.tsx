import { styled } from 'styled-components';

interface TriangleProps {
    trColor: string;
    trText: string;
}

const TriangleWrapper = styled.div<TriangleProps>`
    width: 0;
    height: 0;
    border-left: 50px solid transparent; /* 왼쪽 삼각형 변 */
    border-right: 50px solid transparent; /* 오른쪽 삼각형 변 */
    border-bottom: 100px solid ${(props) => props.trColor}; /* 아래쪽 삼각형 변 */
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`;

export default function Triangle({ trColor, trText }: TriangleProps) {
    return (
        <TriangleWrapper trColor={trColor} trText={trText}>
            {trText}
        </TriangleWrapper>
    );
}
