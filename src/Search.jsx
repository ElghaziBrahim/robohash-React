import { useState } from "react"
const Search = ({ handleSearchApp }) => {
    const handleSearchSearch = (e) => {
        handleSearchApp(e.target.value)
    }

    return (
        <>
            <div className="search">
                <h4>find a user : </h4>
                <input type="text" onChange={handleSearchSearch} />

            </div>

        </>
    )
}

export default Search