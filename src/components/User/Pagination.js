import React from 'react'

const Pagination = ({productPerPage, totalProduct, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalProduct/productPerPage);i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
  return (
    <div>
         {
            pageNumbers.map((number) => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href='!#'>
                        {number}
                    </a>
                </li>
            ))
         }
    </div>
  )
}

export default Pagination