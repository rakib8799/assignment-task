import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const SingleUser = () => {
    const { id } = useParams();
    const { fetchSingleUser, singleUserData } = useContext(UserContext);

    useEffect(() => {
        fetchSingleUser(id);
    }, [fetchSingleUser, id]);

    const { image, firstName, lastName, email, address, company } = singleUserData;
    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center" style={{ height: '90vh' }}>
                    <div className="col-md-6">
                        <img src={image} className="img-fluid" alt={firstName} />
                    </div>
                    <div className="col-md-6">
                        <div className="shadow-lg p-5 mb-5">
                            <p><strong>Full Name: <span className="text-muted">{firstName} {lastName}</span></strong></p>
                            <p><strong>Email Address: <span className="text-muted">{email}</span></strong></p>
                            <p><strong>Address: <span className="text-muted">{address?.address}</span></strong></p>
                            <p><strong>Company Name: <span className="text-muted">{company?.name}</span></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleUser