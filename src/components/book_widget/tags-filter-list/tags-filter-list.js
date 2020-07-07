import React from 'react';

import { connect } from 'react-redux'
import { removeTagFilter, removeAllTagFilter } from '../../../actions/filter'

import './tags-filter-list.css';

const TagsFilterList = ({filterTags, removeTagFilter, removeAllTagFilter}) => {

    return(
        <div className="tags-filter-list">
            <span>Filtred by tags: </span>
            <ul className="book-list-tags">
                {
                    filterTags.map((tag, index) => {
                        return (
                            <li key={index}
                                className="tag-item"
                                onClick={() => removeTagFilter(index)}>
                            #{tag}
                            </li>
                        )
                    })
                }
            </ul>
            (<span onClick={() => removeAllTagFilter()}
                  className="tags-filter-list-clear">
                clear
            </span>)
        </div>
    )

}

export default connect(null, { removeTagFilter, removeAllTagFilter })(TagsFilterList)