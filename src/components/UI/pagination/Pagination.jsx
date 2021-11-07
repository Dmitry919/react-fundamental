import React from 'react';
import {getPagesArray} from "../../../util/pages";

const Pagination = ({totalPages, changePages, page}) => {

    const pagesArray = getPagesArray(totalPages)

    return (
        <div className='page__wrapper' >
            {pagesArray.map(p =>
                <span key={p} onClick={() => changePages(p)} className={page === p ? 'page page__current' : 'page' }>
                        {p}
                    </span>)}
        </div>
    );
};

export default Pagination;