import { styled } from 'styled-components';
// import css
import './CSS/index.css';
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
    return <MainWrapper></MainWrapper>;
}

export default App;
