import React from 'react'

export const IndividualProduct = ({individualProduct}) => {
    console.log(individualProduct);
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.Itemname}</div>
            <div className='product-text description'>{individualProduct.Itemprice}</div>
            <div className='btn btn-danger btn-md cart-btn'>ADD TO CART</div>
        </div> 
    )
}

// import React from 'react';

// const IndividualProduct = () => {
//     const IndividualProduct = {
//         url: './img/img1.jpg',  // Image URL placeholder
//         Itemname: 'Sample Product',
//         Itemprice: '$20.00'
//     };

//     return (
//         <div>
//             <IndividualProduct individualProduct={IndividualProduct} />
//         </div>
//     );
// };

// export default IndividualProduct;
