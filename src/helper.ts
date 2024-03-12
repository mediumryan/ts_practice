const BASE_URL = 'https://image.tmdb.org/t/p/';

export const getImages = (poster_path: string, size: string) => {
    return `${BASE_URL}${size ? size : 'original'}/${poster_path}`;
};
