const baseUrl = 'https://api.themoviedb.org/3';
const API_KEY = 'b1afec16ca29a99de834626942f6d05d' //add your api key here;
export const apirequests = {
    getNetflixOrginals: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getPopularTv: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}
