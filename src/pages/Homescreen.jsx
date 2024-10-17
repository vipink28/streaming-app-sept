import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
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
        </>
    );
}

export default Homescreen;