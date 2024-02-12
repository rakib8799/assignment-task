import { useEffect, useState } from "react";

export const Sort = (apiUsers) => {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('');

    useEffect(() => {
        apiUsers && apiUsers.map((users) => {
            const sortArray = type => {
                const types = {
                    sort_by_name: users?.firstName,
                    sort_by_email: users?.email,
                    sort_by_company_name: users?.company
                };
                const sortProperty = types[type];
                const sorted = [...apiUsers].sort((a, b) => {
                    if (sortProperty === users?.company) {
                        if (a.company.name) return a.company.name.localeCompare(b.company.name);
                        else return a.company.localeCompare(b.company?.name);
                    }
                    else if (sortProperty === users?.firstName) {
                        return a.firstName.localeCompare(b.firstName);
                    }
                    else if (sortProperty === users?.email) {
                        return a.email.localeCompare(b.email);
                    }
                });
                setData(sorted);
            };

            sortArray(sortType);
        }
        )
    }, [apiUsers, sortType]);

    return { data, setSortType };
}


export const Search = (apiUsers, filteredUsers, setFilteredUsers) => {

    const filterItems = (searchTerm) => {
        const filteredItems = apiUsers.filter((user) => {
            const name = `${user.firstName} ${user.lastName}`;
            return name.toLowerCase().includes(searchTerm.toLowerCase())
        });

        setFilteredUsers(filteredItems);
    }

    return { filterItems, filteredUsers };
}