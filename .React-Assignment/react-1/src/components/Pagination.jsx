import React, { useState } from 'react'

const Pagination = (props) => {

    let pageNumbers = 1;
    if (props.nPages >= 2) {
        pageNumbers = Array.from(Array(props.nPages + 1).keys()).slice(1)
    } else {
        pageNumbers = 1;
    }

    const nextPage = () => {
        if (props.currentPage !== props.nPages)
            props.setCurrentPage(props.currentPage + 1)
    }
    const prevPage = () => {
        if (props.currentPage !== 1)
            props.setCurrentPage(props.currentPage - 1)
    }

    const visible = {
        visiblity: 'visible'
    }
    const hidden = {
        visibility: 'hidden',
    }


    return (
        <div className='d-flex justify-content-center' style={(props.newEmployee.length > 2 ? visible : hidden)}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" onClick={prevPage} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    { props.newEmployee.length > 2 &&
                     (pageNumbers.map(pgNumber => (
                        <li key={pgNumber}
                            className={`page-item ${props.currentPage == pgNumber ? 'active' : ''} `} >

                            <a onClick={() => props.setCurrentPage(pgNumber)}
                                className='page-link' >
                                {pgNumber}
                            </a>
                        </li>
                    )))}

                    <li className="page-item">
                        <a className="page-link" onClick={nextPage} aria-label="Next"  >
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
    
}

export default Pagination