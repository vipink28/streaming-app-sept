const API_KEY = 'b1afec16ca29a99de834626942f6d05d' //add your api key here;
export const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const apirequests = {
    getNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getCollection: (platform, endpoint) => { return `${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1` },
    getDetails: (platform, id) => { return `${platform}/${id}?api_key=${API_KEY}&append_to_response=videos,recommendations,similar,credits` },
    getGenres: (platform) => { return `/genre/${platform}/list?api_key=${API_KEY}` },
    getVideosByGenre: (platform, genreid) => { return `/discover/${platform}?api_key=${API_KEY}&with_genres=${genreid}` },
}


export const platformTypes = {
    tv: "tv",
    movie: "movie"
}


export const endpoints = {
    popular: "popular",
    topRated: "top_rated",
    upcoming: "upcoming",
    nowPlaying: "now_playing",
    onTheAir: "on_the_air",
    airingToday: "airing_today"
} 
