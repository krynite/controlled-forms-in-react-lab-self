import { useState } from 'react';


const Bookshelf = () =>{
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '', author: ''
    })

    const handleInputChange = (event) => {
        console.log(`Test handleInputChange`)
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Test handleSubmit`)
        setBooks([...books, newBook])
        setNewBook({title: '', author:''})
    }

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label>Title :</label>
                    <input id="title" name="title" value={newBook.title} onChange={handleInputChange}></input>
                    <label>Author: </label>
                    <input id="author" name="author" value={newBook.author} onChange={handleInputChange}></input>
                    <button type="submit" >Add book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((el,index) => (
                    <div key={index}>
                        <h3>Title: {el.title}</h3>
                        <div>Author: {el.author}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf;