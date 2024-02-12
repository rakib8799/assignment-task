/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { addUsers, allUsers } from '../constants/APINames';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [apiUsers, setApiUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [singleUserData, setSingleUserData] = useState({});
    const [singleValue, setSingleValue] = useState({});

    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(allUsers)
                setApiUsers(res.data.users);
                setFilteredUsers(res.data.users);
                setLoading(true);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchUsers();
    }, []);


    const fetchSingleUser = async (id) => {
        try {
            const res = await axios.get(`${allUsers}/${id}`)
            setSingleUserData(res.data);
            setLoading(true);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        const storedState = localStorage.getItem('usersData');
        if (storedState) {
            setApiUsers(JSON.parse(storedState));
        }
    }, []);

    useEffect(() => {
        const storedState = localStorage.getItem('singleUserData');
        if (storedState) {
            setSingleUserData(JSON.parse(storedState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('usersData', JSON.stringify(singleValue));
    }, [singleValue]);

    useEffect(() => {
        localStorage.setItem('singleUserData', JSON.stringify(singleUserData));
    }, [singleUserData]);

    const addAPIUser = async (formData) => {
        try {
            const res = await axios.post(addUsers, formData);
            setSingleValue(res.data);
            setApiUsers([...apiUsers, res.data]);
            setFilteredUsers([...apiUsers, res.data]);
            setLoading(true);
        } catch (err) {
            setError(err);
        }
    }

    return (
        <UserContext.Provider value={{ loading, setLoading, error, setError, filteredUsers, setFilteredUsers, apiUsers, fetchSingleUser, addAPIUser, singleUserData, setSingleUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;


