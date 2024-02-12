/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const UsersList = ({ user }) => {
    return (
        <>
            {user.length === 0
                ? (<p>No users found</p>)
                :
                (user.map((item, index) => (<div className="card col-lg-4 col-md-6 col-xs-12 g-4 shadow-lg p-3" key={index}>
                    <img src={item.image} className="card-img-top" alt={item?.firstName} style={{ height: '30vh', objectFit: 'contain' }} />
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/user/${item?.id}`} className="card-link text-decoration-none">{item?.firstName} {item.lastName}</Link></h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{item.email}</li>
                        <li className="list-group-item">{item.address.address ? item.address.address : item.address}</li>
                        <li className="list-group-item">{item.company.name ? item.company.name : item.company}</li>
                    </ul>
                </div>
                ))
                )}
        </>
    )
}

export default UsersList