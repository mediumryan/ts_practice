import { styled } from 'styled-components';
// import css
import './CSS/index.css';
// import components
import Calculator from './Project/Calculator';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const MainOuter = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainInner = styled.div`
    width: 85%;
    height: 85%;
    background-color: #ddd;
    border: 5px solid #aaa;
    border-radius: 20px;
    overflow: hidden;
`;

function App() {
    return (
        <MainOuter>
            <MainInner>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calculator" element={<Calculator />} />
                </Routes>
            </MainInner>
        </MainOuter>
    );
}

export default App;
