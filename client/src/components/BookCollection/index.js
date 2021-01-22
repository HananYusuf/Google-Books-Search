import React from 'react'

const BookCollection = ({bookarr}) => {

    let parsedArr = JSON.parse(bookarr);
    const handleSave = event => {
        console.log(this)
    }
    return (
        <div>
            {parsedArr.length ?
            <div>
                {parsedArr.map(element => (
                    <>
                    <h1>title: {element.volumeInfo.title}</h1>
                    <button className="btn btn-success" onClick={handleSave}>Save</button>
                    </>
                ))}
            </div> :
            <div>
                No Books To Show
            </div>
            }
        </div>
    )
}

export default BookCollection
