import axios from 'axios';
import { BASE_URL } from '../utils/Constances/Constance';
import api from '../utils/api'

export const fetchMovies = async (query) => {
    try {
        const { data } = await api.get(`/search/movie`, {
            params: {
                language: "en-US",
                page: 1,
                query
            }
        })
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchMovieDetails = async (id) => {
    try {
        const { data } = await api.get(`/movie/${id}`, {
            language: "en-US",
        });
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
