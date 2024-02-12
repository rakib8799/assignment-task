/* eslint-disable react/prop-types */
const Select = ({ setSortType }) => {
    return (
        <>
            <select onChange={e => setSortType(e.target.value)} className="form-select w-25">
                <option value="">Choose one option to Sort</option>
                <option value="sort_by_name">Sort by Name</option>
                <option value="sort_by_email">Sort by Email</option>
                <option value="sort_by_company_name">Sort by Company Name</option>
            </select>
        </>
    )
}

export default Select