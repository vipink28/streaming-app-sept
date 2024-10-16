import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNetflixOriginals, selectNetflixOrginals } from "../features/tv/tvSlice";

function Homescreen(props) {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectNetflixOrginals);
    console.log(data);

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <div>

        </div>
    );
}

export default Homescreen;