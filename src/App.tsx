import { styled } from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
// import css
import './CSS/index.css';
// import components
import PopularMovies from './Components/PopularMovies';
import TopRatedMovies from './Components/TopRatedMovies';
import NotFound from './Components/NotFound';
import Home from './Components/Home';

const MainWrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    nav {
        width: 100%;
        ul {
            display: flex;
            justify-content: center;
            width: 75%;
            margin: 0 auto;
            padding: 0.5rem 1rem;
            li {
                margin: 0.5rem;
                padding: 0.25rem 0.5rem;
                font-size: 1.25rem;
                font-weight: 700;
                a {
                    color: #000;
                    text-decoration: none;
                    &:hover {
                        color: #577;
                    }
                }
            }
        }
    }
`;

function App() {
    return (
        <MainWrapper>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/popular-movies">Popular Movies</Link>
                    </li>
                    <li>
                        <Link to="/top-rated-movies">Top Rated Movies</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/popular-movies" element={<PopularMovies />} />
                <Route path="/top-rated-movies" element={<TopRatedMovies />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainWrapper>
    );
}

export default App;
