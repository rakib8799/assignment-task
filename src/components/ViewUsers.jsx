import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AddUser from "./AddUser";
import Loader from "./Loader";
import SearchSort from "./SearchSort";

const ViewUsers = () => {
    const { loading, error } = useContext(UserContext);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <AddUser />
                    </div>
                    <div className="col-md-9">
                        {!loading && <p className="d-flex justify-content-center align-items-center h-100"><Loader /></p>}
                        {error && <p>There was an error loading the users</p>}
                        {loading && !error && <SearchSort />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUsers