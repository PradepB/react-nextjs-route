import React from 'react'

function ReviewDetails({ params }: {
    params: {
        reviewId: string,
        productId: string
    }
}) {
    return (
        <div>Review {params.reviewId} for product {params.productId}</div>
    )
}

export default ReviewDetails