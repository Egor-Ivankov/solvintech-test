import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { fetchData } from "../redux/getData";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const data = useSelector(state => state.getData);

    return (
        <>
        asdasd
            {console.log(data)}
        </>
    )
}

export default App
