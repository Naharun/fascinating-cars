

const ForAllToys = ({ allToy }) => {
    const { img, seller, toyName, subCategory, price, availableQuantity } = allToy;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <ul className="list-none font-semibold">
                    <li>Seller: {seller}</li>
                    <li>Toy Name: {toyName}</li>
                    <li>Sub-category: {subCategory}</li>
                    <li>Price: ${price}</li>
                    <li>Available Quantity: {availableQuantity}</li>
                </ul>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ForAllToys;