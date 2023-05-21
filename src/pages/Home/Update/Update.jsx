import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const toyData = useLoaderData();
    const { _id, price,subCategory, availableQuantity, details, toyName } = toyData;
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const details = form.details.value;
        const updatedData = { price, availableQuantity, details };
        console.log(updatedData);

        fetch(`https://fascinating-cars-server.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your toy data Updated Successfully!',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    form.reset();
                }

            })
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center md:pt-5 md:mb-5'>Update A single Toy Data</h1>
            <hr className='md:w-1/2 mx-auto my-2' />
            <form onSubmit={handleUpdate} className=''>
                <div className="card-body md:w-1/2 mx-auto shadow-lg">
                    <h1 className='text-3xl md:mb-6 font-bold'>{toyName}</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Sub Category</span>
                        </label>
                        <input type="text" name="subCategory" placeholder="subCategory" defaultValue={subCategory} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Available Quantity</span>
                        </label>
                        <input type="text" name="availableQuantity" placeholder="quantity" defaultValue={availableQuantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="details" defaultValue={details} className="h-40 input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-1/3 mx-auto">Update</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Update;