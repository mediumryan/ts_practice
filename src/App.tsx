import { styled } from 'styled-components';
// import css
import './CSS/index.css';
// import components
import Circle from './Circle';

const MainWrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    return (
        <MainWrapper>
            <Circle bgColor="red" />
            <Circle bgColor="blue" />
        </MainWrapper>
    );
}

export default App;
