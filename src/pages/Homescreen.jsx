import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Row from "../components/Row";
import { fetchNowPlayingMovies, selectNowPlayingMovies } from "../features/movie/movieSlice";
import { fetchNetflixOriginals, selectNetflixOrginals } from "../features/tv/tvSlice";

function Homescreen(props) {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectNetflixOrginals);

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>
            {
                status === "success" ?
                    <Header video={data.results[Math.floor(Math.random() * data.results.length)]} />
                    : status === "loading" ? <p>... loading</p>
                        : <p>Something went wrong</p>
            }

            <div className="container-fluid">
                <Row title="Now Playing" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} />

                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={selectNetflixOrginals} />
            </div>
        </>
    );
}

export default Homescreen;