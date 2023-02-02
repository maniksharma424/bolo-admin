


import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
import { isAutheticated } from 'src/auth'
// import { WebsiteURL } from '../WebsiteURL'

const AddTemple = () => {
    const [WebsiteURL, setWebsiteURL] = useState('https://reinventuniforms.in/')
    const token = isAutheticated()
    const navigate = useNavigate()
    const [data, setData] = useState({
        image: '',
        imageURL: '',
        name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state_name: '',
        short_url: '',
        contact_Number: '',
        contact_Person_Name: ''
        // pan: '',
        // business_name: '',
        // gstin: '',
        // option: '',
    })

    const [cities, setCities] = useState([])

    const [loading, setLoading] = useState(false)
    const [limiter, setLimiter] = useState({
        name: 100,
        nameHas: 100,
    })

    const getRequired = () => {
        axios
            .get(`/api/city`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setCities([...res.data.data])
            })
            .catch((err) => { })
    }

    useEffect(() => {
        getRequired()
    }, [])

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            if (e.target.value.length === limiter[e.target.id] + 1) return
            setLimiter((prev) => ({
                ...prev,
                [e.target.id + 'Has']: prev[e.target.id] - e.target.value.length,
            }))
            setData((prev) => ({ ...prev, short_url: e.target.value.toLowerCase().replace(/\s+/g, '-') }))
        }
        if (e.target.id === 'city') {
            const city = cities.filter((m) => e.target.value === m?._id)
            setData((prev) => ({ ...prev, state_name: city[0]?.state?.state_name || '' }))
        }
        if (e.target.id === 'image') {
            if (
                e.target.files[0]?.type === 'image/jpeg' ||
                e.target.files[0]?.type === 'image/png' ||
                e.target.files[0]?.type === 'image/jpg'
            ) {
                setData((prev) => ({
                    ...prev,
                    imageURL: URL.createObjectURL(e.target.files[0]),
                    image: e.target.files[0],
                }))
                return
            } else {
                swal({
                    title: 'Warning',
                    text: 'Upload jpg, jpeg, png only.',
                    icon: 'error',
                    button: 'Close',
                    dangerMode: true,
                })
                setData((prev) => ({
                    ...prev,
                    imageURL: '',
                    image: '',
                }))
                e.target.value = null
                return
            }
        }
        setData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSubmit = () => {
        if (
            data.name.trim() === '' ||

            // data.pan.trim() === '' ||
            data.contact_Number === '' ||

            data.contact_Person_Name === '' ||
            data.address_line_1.trim() === '' ||
            data.address_line_2.trim() === '' ||
            data.city === '' ||
            data.short_url === '' ||
            data.state_name === '' ||
            data.imageURL.trim() === ''
        ) {
            swal({
                title: 'Warning',
                text: 'Fill all mandatory fields',
                icon: 'error',
                button: 'Close',
                dangerMode: true,
            })
            return
        }
        setLoading(true)
        const formData = new FormData()
        formData.set('name', data.name)
        // formData.set('pan', data.pan)
        // formData.set('business_name', data.business_name)
        // formData.set('gstin', data.gstin)
        // formData.set('option', data.option)
        formData.set('address_line_1', data.address_line_1)
        formData.set('address_line_2', data.address_line_2)
        formData.set('city', data.city)
        formData.set('state_name', data.state_name)
        formData.set('contact_Number', data.contact_Number)
        formData.set('contact_Person_Name', data.contact_Person_Name)

        formData.set('url', WebsiteURL + data.short_url + '/login')
        formData.set('short_url', data.short_url)
        formData.append('image', data.image)
        axios
            .post(`/api/temple`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/formdata',
                    'Access-Control-Allow-Origin': '*',
                },
            })
            .then((res) => {
                swal({
                    title: 'Added',
                    text: 'Temple added successfully!',
                    icon: 'success',
                    button: 'Return',
                })
                setLoading(false)
                navigate('/temples', { replace: true })
            })
            .catch((err) => {
                setLoading(false)
                const message = err.response?.data?.message || 'Something went wrong!'
                swal({
                    title: 'Warning',
                    text: message,
                    icon: 'error',
                    button: 'Retry',
                    dangerMode: true,
                })
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div
                        className="
                    page-title-box
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                        <div style={{ fontSize: '22px' }} className="fw-bold">
                            Add Franchisee
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <h4 className="mb-0"></h4>
                        </div>

                        <div className="page-title-right">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    fontWeight: 'bold',
                                    marginBottom: '1rem',
                                    textTransform: 'capitalize',
                                    marginRight: '5px',
                                }}
                                onClick={() => handleSubmit()}
                                disabled={loading}
                            >
                                {loading ? 'Loading' : 'Save'}
                            </Button>
                            <Link to="/temples">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Back
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 my-1">
                    <div className="card h-100">
                        <div className="card-body px-5">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Franchisee Name*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={data.name}
                                    maxLength={limiter.name}
                                    onChange={(e) => handleChange(e)}
                                />
                                <p className="pt-1 pl-2 text-secondary">Remaining characters : {limiter.nameHas}</p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Address Line 1*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address_line_1"
                                    value={data.address_line_1}
                                    maxLength="50"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Address Line 2*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address_line_2"
                                    value={data.address_line_2}
                                    maxLength="50"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="pageToLink" className="form-label">
                                    City*
                                </label>
                                <select
                                    onChange={(e) => handleChange(e)}
                                    value={data.city}
                                    className="form-control"
                                    id="city"
                                >
                                    <option value="">---select---</option>
                                    {cities[0] ? (
                                        cities.map((c, i) => (
                                            <option key={i} value={c._id}>
                                                {c.city_name + ', ' + c.state?.state_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="" disabled>
                                            Please add a City
                                        </option>
                                    )}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    State*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state_name"
                                    value={data.state_name}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 my-1">
                    <div className="card h-100">
                        <div className="card-body px-5">

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Contact Number*
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="contact_Number"
                                    value={data.contact_Number}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Contact Person Name*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contact_Person_Name"
                                    value={data.contact_Person_Name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    URL*
                                </label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">
                                        {WebsiteURL}
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="short_url"
                                        aria-describedby="basic-addon3"
                                        value={data.short_url}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    Temple Banner*
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    accept="image/*"
                                    onChange={(e) => handleChange(e)}
                                />
                                <p className="pt-1 pl-2 text-secondary">Upload jpg, jpeg and png only*</p>
                            </div>
                            <div className="mb-3" style={{ height: '200px', maxWdth: '100%' }}>
                                <img
                                    src={data.imageURL}
                                    alt="Uploaded Image will be shown here"
                                    style={{ maxHeight: '200px', maxWidth: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTemple
