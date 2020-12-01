import React from 'react'

const SearchBar = ({ valueSearch, onChangeSearch, onClickSearch }) => (
    <div>
        <input type='search' placeholder='Rechercher les etudiants par nom' value={valueSearch} onChange={onChangeSearch} />
        <button type='submit' onClick={onClickSearch}>Rechercher</button>
    </div>
)

export default SearchBar
