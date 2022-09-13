import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalItem } from "../values/Utilitas";

const App = () => {
    const saved = getLocalItem("auth")
    let navigate = useNavigate();
    useEffect(() => {
        if (saved === "true") {
            navigate("/main", {reflace: true})
        } else {
            navigate("/login", {reflace: true})
        }
    })
}
 
export default App;