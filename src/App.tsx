import { styled } from 'styled-components';
// import css
import './CSS/index.css';
import ToDo from './ToDo';
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
            <ToDo />
        </MainWrapper>
    );
}

export default App;
