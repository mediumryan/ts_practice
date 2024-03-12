import axios from 'axios';

export const getPopularMovie = async () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        params: { language: 'ko-KR', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTdhNjc5OTE0Yjc4NWU5MzdlODI3M2VkZjEzYmFjYiIsInN1YiI6IjYzNzYyNWZlZmFiM2ZhMDBiNGQwMjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GviGW3SOtq4sot8aJp8to7nRlL2iZ5H38FbBcElfYik',
        },
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        throw new Error('Failed to fetch movies');
    }
};

export const getTopRatedMovie = async () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: { language: 'ko-KR', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTdhNjc5OTE0Yjc4NWU5MzdlODI3M2VkZjEzYmFjYiIsInN1YiI6IjYzNzYyNWZlZmFiM2ZhMDBiNGQwMjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GviGW3SOtq4sot8aJp8to7nRlL2iZ5H38FbBcElfYik',
        },
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        throw new Error('Failed to fetch movies');
    }
};
