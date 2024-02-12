import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Search, Sort } from "../functions/SearchSortFunction";
import SearchInput from "./SearchInput";
import Select from "./Select";
import UsersList from "./UsersList";

const SearchSort = () => {
    const { apiUsers, filteredUsers, setFilteredUsers } = useContext(UserContext);

    const searchItems = Search(apiUsers, filteredUsers, setFilteredUsers);
    const sortItems = Sort(apiUsers);
    return (
        <>
            <div className="row">
                <h2 className="text-center">View all Users</h2>

                <div className="d-flex justify-content-between">
                    <SearchInput filterItems={searchItems?.filterItems} />
                    <Select setSortType={sortItems?.setSortType} />
                </div>
                <UsersList user={(searchItems?.filteredUsers.length < apiUsers.length) ? searchItems?.filteredUsers : sortItems?.data} />
            </div>
        </>
    )
}

export default SearchSort