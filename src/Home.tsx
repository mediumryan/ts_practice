import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ProjectOuter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ProjectTitle = styled.div`
    flex-basis: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > h2 {
        font-size: 2.5rem;
        color: var(--accent-200);
        font-weight: 700;
    }
`;

export const ProjectInner = styled.div`
    width: 100%;
    flex-basis: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeButtons = styled(Link)`
    color: var(--accent-200);
    padding: 1rem 2rem;
    border: 2px solid var(--accent-200);
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.5rem;
    transition: 300ms all;
    &:hover {
        color: var(--white-100);
        background-color: var(--accent-200);
    }
`;

export default function Home() {
    return (
        <ProjectOuter>
            <ProjectTitle>
                <h2>Home</h2>
            </ProjectTitle>
            <ProjectInner>
                <HomeButtons to="/calculator">Calculator</HomeButtons>
            </ProjectInner>
        </ProjectOuter>
    );
}
