import React, { useContext, useState } from 'react'
import { useAuth } from '../../components/Context/auth-context'
import './profile.css'
import { SupplyContext } from '../../components/Context/Context';
const Profile = () => {
    const { token, user, logoutUser } = useAuth();
    const [addressOpen, setAddressOpen] = useState(false);
    const { address, setAddress } = useContext(SupplyContext);

    const [addressData, setAddressData] = useState({
        name: '',
        mobile: '',
        pincode: '',
        city: '',
        state: ''
    })

    const submitHandler = (e) => {
        e.preventDefault();
        setAddress([...address, addressData])
        setAddressData({
            name: '',
            mobile: '',
            pincode: '',
            city: '',
            state: ''
        })
    }
    console.log(address);
    return (
        <div className="profile__container">
            <div className='profile'>
                <h1>Profile</h1>
                <p>Username: {user?.firstName} {user?.lastName}</p>
                <p>email: {user?.email}</p>
            </div>
            <div className='address'>
                <button
                    onClick={() => setAddressOpen(true)}
                >Add new address</button>
                <>
                    {
                        address?.map(({ name, mobile, pincode, city, state }) => (
                            <div className='address__card'>
                                <p>Name: {name}</p>
                                <p>Mobile: {mobile}</p>
                                <p>Pincode: {pincode}</p>
                                <p>City: {city}</p>
                                <p>State: {state}</p>
                            </div>
                        ))
                    }
                </>
                {
                    addressOpen && (
                        <form className='address__form' onSubmit={submitHandler}>
                            <label>
                                Name:
                                <input type="text" placeholder='Enter name'
                                value={addressData.name}
                                    onChange={(e) => setAddressData({ ...addressData, name: e.target.value })}
                                />
                            </label>
                            <label>
                                Mobile:
                                <input type="number" placeholder='Enter Mobile'
                                value={addressData.mobile}
                                    onChange={(e) => setAddressData({ ...addressData, mobile: e.target.value })}
                                />
                            </label>
                            <label>
                                Pincode:
                                <input type="number" placeholder='Enter Pincode'
                                value={addressData.pincode}
                                    onChange={(e) => setAddressData({ ...addressData, pincode: e.target.value })}
                                />
                            </label>
                            <label>
                                City:
                                <input type="text" placeholder='Enter City' 
                                value={addressData.city}
                                onChange={(e) => setAddressData({...addressData, city: e.target.value })}   
                                />
                            </label>
                            <label>
                                State:
                                <input type="text" placeholder='Enter State' 
                                value={addressData.state}
                                onChange={(e) => setAddressData({...addressData, state: e.target.value })}
                                />
                            </label>
                            <button type='submit'>Submit</button>
                        </form>
                    )
                }
                <button
                    onClick={() => setAddressOpen(false)}
                >Close</button>
            </div>
            <button
                onClick={() => logoutUser()}
            >Logout</button>
        </div>
    )
}

export default Profile