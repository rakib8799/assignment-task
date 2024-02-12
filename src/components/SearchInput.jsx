/* eslint-disable react/prop-types */

import { useState } from "react";

const SearchInput = ({ filterItems }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue)
        filterItems && filterItems(inputValue)
    }

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder='Type to search'
            className="form-control w-25"
        />
    )
}

export default SearchInput