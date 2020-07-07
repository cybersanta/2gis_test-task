import React from 'react';
import './book-list-item.css';


const BookListItem = ({book, addTagFilter, action}) => {
    const {id, author, title, description, tags, status} = book;


    return(
        <div className="book-list-item">
            <div className="book-details">
                <div className="book-author">{author}</div>
                <div className="book-line">
                    <span className="book-title">{title}</span>
                    <span className="book-status" 
                          onClick={() => action(id)}
                    >
                            {status === 'toRead' ? `start reading ->` : null}
                            {status === 'inProgress' ? `finish reading ->` : null}
                            {status === 'done' ? `return in "to read" ->` : null}
                    </span>
                </div>
                <div className="book-description">{description}</div>
                <div className="book-tags">
                    <ul className="book-list-tags">
                        {
                            tags.map((tag, index) => {
                                return (
                                    <li key={index}
                                        className="tag-item"
                                        onClick={() => addTagFilter(tag)}>
                                    #{tag}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default BookListItem