import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
// get api data
import { getPopularMovie } from '../api';
// get images
import { getImages } from '../helper';

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    div.cards {
        cursor: pointer;
        position: relative;
        width: 250px;
        height: 300px;
        margin: 0.5rem;
        border-radius: 10px;
        overflow: hidden;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: 300ms opacity;
            &:hover {
                opacity: 0.1;
            }
        }
    }
    div.card_description {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.95);
        color: #fff;
    }
`;

interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export default function PopularMovies() {
    const { data, isLoading, isError } = useQuery<MovieType[]>({
        queryKey: ['movie-popular'],
        queryFn: getPopularMovie,
    });

    return (
        <PageWrapper>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error occurred while fetching data</div>
            ) : (
                data &&
                data.map((item) => {
                    return (
                        <div className="cards" key={item.id}>
                            <img
                                src={getImages(item.poster_path, 'original')}
                                alt={item.title}
                            />
                            <div className="card_description">
                                <p>{item.title}</p>
                                <p>{item.original_title}</p>
                                <p>{item.release_date}</p>
                            </div>
                        </div>
                    );
                })
            )}
        </PageWrapper>
    );
}
