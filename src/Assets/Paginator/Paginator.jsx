import React from 'react';
import './Paginator.css';

const Paginator = ({currentPage, totalCount, pageSize, changePage}) => {

        let pagesCount = Math.ceil( totalCount / pageSize );
        let pages = [];
    
        for ( let i = 1; i <= pagesCount; i++ ) {
            if ( i > pagesCount - 10 ) {
                pages.push(i);
            }
            // else {
            //     break
            // }
        }
        
        return (
            <div>
                <div className="pagination">
                    {
                        pages.map( p => {
                            return <span key={p} className={ currentPage === p ? "pagination__item pagination__item_active" : "pagination__item" } onClick={ () => changePage(p)}>{p}</span>
                        })
                    }
                </div>
            </div>
        )
}

export default Paginator;