import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9baaa261b5ad6092cde6231e59ab2521',
    language: 'ko-KR'
  }
});

export const moviesAPI = {
  popular: () => api.get('/movie/popular'),
  nowPlaying: () => api.get('/movie/now_playing'),
  upcoming: () => api.get('/movie/upcoming'),
  detail: id =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    })
};

export const tvsAPI = {
  popular: () => api.get('/tv/popular'),
  topRated: () => api.get('/tv/top_rated'),
  airingToday: () => api.get('/tv/airing_today'),
  detail: id =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: 'videos',
        include_video_language: 'en'
      }
    })
};
