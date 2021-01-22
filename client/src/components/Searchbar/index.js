import React, {useState} from 'react'
import API from '../../utils/API'
import BookCollection from '../BookCollection';

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [resArr, setResArr] = useState([]);

    const handleInput = event => {
        setSearch(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        API.getBooks(search)
            .then(res => setResArr(res.data.items))
    }

    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" onChange={handleInput} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSubmit} type="submit">Search</button>
            </form>
        </nav>
        <BookCollection bookarr= {JSON.stringify(resArr)} />
        </>
    )
}

export default Searchbar
