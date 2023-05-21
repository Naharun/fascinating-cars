import { useContext } from "react";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../Providers/AuthProviders";


const AddAToys = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add A Toy');
    const handleAddAToys = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller =form.seller.value; 
        const toyName =form.toyName.value;
        const seller_email =form. seller_email.value;
        const subCategory =form.subCategory.value;
        const price =form.price.value;
        const availableQuantity =form.availableQuantity.value;
        const details =form.details.value;
        const rating =form.rating.value;
        const add = {
            photo, name, seller, toyName, seller_email, subCategory, price, availableQuantity, details, rating
        }
            fetch('' ,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(add)
            })
            .then(res => res.json())
                Swal.fire({
                    title: 'Success!',
                    text: 'User Created Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                .then(data =>{
                    form.reset();
                    console.log(data)
                })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Add A Toy</h2>
                        <form onSubmit={handleAddAToys}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller</span>
                                </label>
                                <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name=" seller_email" placeholder="Seller Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Category</span>
                                </label>
                                <input type="password" name="subCategory" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="password" name="price" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Rating</span>
                                </label>
                                <input type="password" name=" rating" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Available Quantity</span>
                                </label>
                                <input type="password" name="availableQuantity" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Details</span>
                                </label>
                                <input type="password" name="details" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn-btn-warning">Add A Toy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddAToys;