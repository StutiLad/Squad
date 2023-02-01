import React from 'react'

const Pagination = (props) => {

    // const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const pageNumbers = 10;

    const nextPage = () => {
        if (props.currentPage !== props.nPages) props.setCurrentPage(props.currentPage + 1)
    }
    const prevPage = () => {
        if (props.currentPage !== 1) props.setCurrentPage(props.currentPage - 1)
    }

    const visible = {
        visiblity: 'visible'
    }
    const hidden = {
        visibility: 'hidden',
    }


    return (
        <div className='d-flex justify-content-center' style={(props.newEmployee.length > 0 ? visible : hidden)}>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <p class="page-link" onClick={prevPage} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </p>
                    </li>

                    {/* {pageNumbers(pgNumber => (
                        <li key={pgNumber}
                            className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                            <p onClick={() => setCurrentPage(pgNumber)}
                                className='page-link' >
                                {pgNumber}
                            </p>
                        </li>
                    ))} */}

                    <li class="page-item">
                        <p class="page-link" >
                            1
                        </p>
                    </li>
                    <li class="page-item">
                        <p class="page-link" onClick={nextPage} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination