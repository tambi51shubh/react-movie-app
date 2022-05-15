const API_KEY = "670339e49e32b9c722b485d3858a822a";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w400"
const IMAGE_PATH_BACKGROUND = "https://image.tmdb.org/t/p/original"
const TRENDING_API = (mediaType, page) =>`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${API_KEY}&page=${page}`;
const VIDEO_API = (mediaId, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos?api_key=${API_KEY}&language=en-US`
const DETAIL_API = (mediaId, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${API_KEY}&language=en-US`;
const CREDITS_API = (mediaId, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${API_KEY}&language=en-US`;

export { IMAGE_PATH, IMAGE_PATH_BACKGROUND, TRENDING_API, DETAIL_API, VIDEO_API, CREDITS_API };