import React from 'react';
import { connect } from 'react-redux'
import { changeFilter } from '../../../actions/filter'
// import { VisibilityFilters } from '../../../actions/filter'
import './panel-tabs.css';

import { Link } from 'react-router-dom'
// import { compose } from '../../../utils'

const FILTER_BTN = [
    {
        text: 'To read',
        id: 'toRead',
    },
    {
        text: 'In progress',
        id: 'inProgress',
    },
    {
        text: 'Done',
        id: 'done'
    }
]




const PanelTabs = ({activeFilter, changeFilter, toRead, inProgress, done}) => {

    return(
    <div className="panel-tabs">
        <div className="btn-group">
            {
                FILTER_BTN.map(({text, id}) => (
                    <Link to={`/?tab=${id}`}
                          key={id}
                          onClick={() => (changeFilter(id))}
                          className={id === activeFilter ? 'filter-btn active' : 'filter-btn'}
                    >
                        {id === 'toRead' ? `${text} (${toRead})` : null}
                        {id === 'inProgress' ? `${text} (${inProgress})` : null}
                        {id === 'done' ? `${text} (${done})` : null}
                    </Link>
                ))
            }
        </div>
    </div>
    )
}

export default connect(null, {changeFilter})(PanelTabs)
