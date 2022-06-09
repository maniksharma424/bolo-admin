import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
// import { API } from "../../data";
import { isAutheticated } from "../../auth";
import ClipLoader from "react-spinners/ClipLoader";
import { Country, State, City } from "country-state-city";
import swal from 'sweetalert';
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const EditBisuness = () => {
    const [categoryName, setCategoryName] = useState([]);
    const { token } = isAutheticated();

    let history = useHistory();
    const [state, setState] = useState({
        name: "",
        phone: "",
        email: "",
        Building_Name: "",
        Street_Name: "",
        country: "",
        city: "",
        loading: false,
        description: "",
        category: "",
        status: "",
        Glocation: "",
        LinkedinUrl: "",
        FacebookUrl: "",
        InstagramUrl: ""
    });

    const { id } = useParams();
    // console.log(id)

    const { description, loading } = state;


    const changeState = (newState) =>
        setState((prevState) => ({ ...prevState, ...newState }));



    const handleChange = (e) => {
        changeState({ ...state, [e.target.name]: e.target.value })

    };


    //category
    const fetchCategory = useCallback(async () => {
        const res = await axios.get(`/api/category/getAll`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // console.log(res.data.category);
        setCategoryName(res.data.category)
        if (res.status === 200) changeState({ ...res.data });
    }, [token]);

    useEffect(async () => {

        fetchCategory();

    }, [fetchCategory]);






    const fetchDirectory = useCallback(async () => {
        const res = await axios.get(`/api/directory/getOne/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });


        setState(res.data.directory)
        changeState({ loading: false });
        if (res.status === 200) changeState({ ...res.data });
    }, [token]);

    useEffect(() => {
        fetchDirectory();
    }, [fetchDirectory]);




    const handleSubmit = async () => {
        if (!(name || description || phone || email || Bname || Sname || city)) {
            alert("Please fill required field ");
            return;
        }
        changeState({ loading: true });

        let res = await axios.put(
            `/api/directory/update/${id}`,
            {
                state,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (res.status == 200) {
            changeState({ loading: false });
            swal("Edit Business successfully!");
            history.goBack()
        }
    };
    const onCancel = () => {
        history.goBack()

    };




    // console.log(state)
    return (
        <>
            <div className=" main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group text-right">
                                    <span className=" fs-2 text-xl-start font-weight-bold float-start">Edit Bisuness</span>
                                    <button
                                        onClick={handleSubmit}
                                        type="button"
                                        className="btn btn-success  mt-1  mb-0 my-1 btn btn-success btn-login waves-effect waves-light mr-1"
                                    >
                                        <ClipLoader loading={loading} size={18} />
                                        {!loading && "Save"}
                                    </button>
                                    <button
                                        onClick={onCancel}
                                        type="button"
                                        className=" mt-1 ml-2 btn btn-warning btn-cancel waves-effect waves-light mr-3"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Save options Ends-->             */}

                        {/* <!-- Row 1 Begins -->                */}
                        <div className="row">
                            {/* <!--Left Column Begins--> */}
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor=" basicpill-phoneno-input"
                                                                    className=" label-100"
                                                                >
                                                                    Name*
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={state.name}
                                                                    className="mt-0 my-3 form-control input-field"
                                                                    onChange={handleChange}
                                                                    placeholder="Name"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor=" basicpill-phoneno-input"
                                                                    className=" label-100"
                                                                >
                                                                    phone*
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    name="phone"
                                                                    value={state.phone}
                                                                    className="mt-0 my-3 form-control input-field"
                                                                    onChange={handleChange}
                                                                    placeholder="Phone"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor=" basicpill-phoneno-input"
                                                                    className=" label-100"
                                                                >
                                                                    Email*
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    value={state.email}
                                                                    className="mt-0 my-3 form-control input-field"
                                                                    onChange={handleChange}
                                                                    placeholder="Email"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor=" basicpill-phoneno-input"
                                                                    className=" label-100"
                                                                >
                                                                    Address*
                                                                </label>
                                                                <div className=" d-flex">
                                                                    <div><input
                                                                        type="text"
                                                                        name="Building_Name"
                                                                        value={state.Building_Name}
                                                                        className="mt-0 my-3 w-100 form-control input-field"
                                                                        onChange={handleChange}
                                                                        placeholder="Building Name*"
                                                                    /></div>
                                                                    <div> <input
                                                                        type="text"
                                                                        name="Street_Name"
                                                                        value={state.Street_Name}
                                                                        className="mt-0 ml-4 my-3 form-control input-field"
                                                                        onChange={handleChange}
                                                                        placeholder="Street Name*"
                                                                    /></div>


                                                                </div>

                                                                <div>

                                                                    <select
                                                                        className="mt-0  my-3 form-control input-field"
                                                                        required
                                                                        name="country"
                                                                        value={state.country}
                                                                        // onChange={(e) => setCountry(e.target.value)}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <option value="">Country*</option>
                                                                        {Country &&
                                                                            Country.getAllCountries().map((item) => (
                                                                                <option key={item.isoCode} value={item.isoCode}>
                                                                                    {item.name}
                                                                                </option>
                                                                            ))}


                                                                    </select>
                                                                    <select
                                                                        className="mt-0  my-3 form-control input-field"
                                                                        requiredname='city'
                                                                        name="city"
                                                                        value={state.city}
                                                                        // onChange={(e) => setCity(e.target.value)}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <option value="">City*</option>
                                                                        {City &&

                                                                            City.getCitiesOfCountry(state.country).map((item) => (
                                                                                <option key={item.isoCode} value={item.isoCode}>
                                                                                    {item.name}
                                                                                    {/* {console.log(item)} */}
                                                                                </option>
                                                                            ))}
                                                                    </select>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-30 width-100 row">
                                                                <label className="my-3  col-md-4 control-label">
                                                                    Description
                                                                </label>
                                                                <div className="mt-0 col-md-10">
                                                                    <textarea
                                                                        value={state.description}
                                                                        onChange={handleChange}
                                                                        name="description"
                                                                        className="form-control input-field"
                                                                        rows="5"
                                                                        placeholder="Add description"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Left Column Ends --> */}

                            {/* <!--Right Column Begins --> */}
                            <div className=" col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <form>

                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="basicpill-phoneno-input"
                                                                    className="label-100"
                                                                >
                                                                    Category*
                                                                </label>
                                                                <select
                                                                    name="category"
                                                                    value={state.category}
                                                                    onChange={handleChange}
                                                                    className="form-control  input-field"
                                                                >
                                                                    <option value="">--select--</option>
                                                                    {categoryName && categoryName.map(item =>
                                                                        <option>{item?.name}</option>

                                                                    )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="basicpill-phoneno-input"
                                                                    className="label-100"
                                                                >
                                                                    Status*
                                                                </label>
                                                                <select
                                                                    name="status"
                                                                    value={state.status}
                                                                    onChange={handleChange}
                                                                    className="form-control  input-field"
                                                                >
                                                                    <option value="">--select--</option>
                                                                    <option value={true}>Active</option>
                                                                    <option value={false}>Inactive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="basicpill-phoneno-input"
                                                                    className="label-100"
                                                                >
                                                                    Google Location
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="Glocation"
                                                                    value={state.Glocation}
                                                                    className="mt-0 my-3 form-control input-field"
                                                                    onChange={handleChange}
                                                                    placeholder="Google Location(Optional)"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="basicpill-phoneno-input"
                                                                    className="label-100"
                                                                >
                                                                    Linkedin URL
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="LinkedinUrl"
                                                                    value={state.LinkedinUrl}
                                                                    className="mt-0 my-3 form-control input-field"
                                                                    onChange={handleChange}
                                                                    placeholder="Linkedin URL (Optional)"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="basicpill-phoneno-input"
                                                                    className="label-100"
                                                                >
                                                                    Facebook URL
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="FacebookUrl"
                                                                    value={state.FacebookUrl}
                                                                    className="mt-0 my-3 form-control input-field"
                                                                    onChange={handleChange}
                                                                    placeholder="Facebook URL (Optional)"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="basicpill-phoneno-input"
                                                                    className="label-100"
                                                                >
                                                                    Instagram URL
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="InstagramUrl"
                                                                    value={state.InstagramUrl}
                                                                    className="mt-0 my-3 form-control input-field"
                                                                    onChange={handleChange}
                                                                    placeholder="Instagram URL (Optional)"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Right Column Ends --> */}
                        </div>
                        <div className=" mt-4 row">
                            {/* <!--Left Column Begins--> */}
                            {/* <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <form className="">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className=" form-group">
                                                                <label
                                                                    htmlFor="  basicpill-phoneno-input"
                                                                    className=" label-100"
                                                                >
                                                                    Price*
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="price"
                                                                    value={price}
                                                                    onChange={handleChange}
                                                                    className="form-control input-field"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Left Column Ends --> */}
                        </div>
                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default EditBisuness