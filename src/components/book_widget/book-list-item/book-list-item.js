import React from 'react';
import './book-list-item.css';
import { connect } from 'react-redux'
import { addToProgress, addToDone, addToRead } from '../../../actions/filter'



const BookListItem = ({book, filter, addToProgress, addToDone, addToRead}) => {
    const {id, author, title, description, tags, status} = book;

    return(
        <div className="book-list-item">
            <div className="book-details">
                <div className="book-author">{author}</div>
                <div className="book-line">
                    <span className="book-title">{title}</span>
                    <span className="book-status" 
                          onClick={() => {
                              switch(filter) {
                                    case "toRead":
                                        return addToProgress(id)
                                    case "inProgress":
                                        return addToDone(id)
                                    case "done":
                                        return addToRead(id)
                                    default: return
                              }
                            }}
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
                                        className="tag-item">
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



export default connect(null, {addToProgress, addToDone, addToRead})(BookListItem)