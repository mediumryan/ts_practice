import { styled } from 'styled-components';
// import css
import './CSS/index.css';
import Counter from './Counter';
// import components

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
            <Counter />
        </MainWrapper>
    );
}

export default App;
