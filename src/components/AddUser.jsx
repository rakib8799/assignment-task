import axios from "axios";
import { useContext, useState } from "react";
import { cloudinaryAPI } from "../constants/APINames";
import { UserContext } from "../context/UserContext";

const AddUser = () => {
    const { apiUsers, addAPIUser } = useContext(UserContext);
    const [uploadImage, setUploadImage] = useState("");

    const [userValue, setUserValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        company: ""
    });
    const handleFileUpload = (e) => {
        if (e.target.files.length !== 0) {
            setUploadImage(e.target.files[0]);
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserValue((currentFormData) => {
            const nextFormData = {
                ...currentFormData,
                [name]: value,
            }
            return nextFormData;
        })
    }
    const { firstName, lastName, email, address, company } = userValue;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', uploadImage);
        formData.append('upload_preset', import.meta.env.VITE_PRESET_KEY);
        let data = {};
        try {
            const res = await axios.post(`${cloudinaryAPI}/${import.meta.env.VITE_CLOUD_NAME}/upload`, formData);
            data = { ...userValue, id: apiUsers.length + 1, image: res.data.secure_url };
        }
        catch (err) {
            console.log(err);
        }

        addAPIUser(data);
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <h2 className="text-center">Add a User</h2>
                    <div className="col shadow-lg p-3 mb-5">
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your First Name" required value={firstName} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your Last Name" required value={lastName} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your Email Address" required value={email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" name="address" placeholder="Enter your Address" required value={address} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label">Company Name</label>
                                <input type="text" className="form-control" id="company" name="company" placeholder="Enter your Company Name" required value={company} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Upload Image</label>
                                <input type="file" className="form-control" id="image" name="image" required onChange={handleFileUpload} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser