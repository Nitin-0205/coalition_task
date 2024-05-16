import React from 'react'
import '../styles/PatientProfile.css'
import PhoneIcon from '../assets/PhoneIcon.png'
import FemaleIcon from '../assets/FemaleIcon.png'
import InsuranceIcon from '../assets/InsuranceIcon.png'
import BirthIcon from '../assets/BirthIcon.png'

function PatientProfile(prop) {
    return (
        <div className="patient-profile">
            <div className="patient-profile-header">
                <div className="patient-profile-header-left">
                    <img src={prop?.patient?.profile_picture || 'https://via.placeholder.com/150'} alt="Patient" />
                </div>
                <h3>{prop?.patient?.name}</h3>
            </div>
            <div className="patient-profile-body">
                <div className="patient-profile-body-left">
                    <div className="patient-profile-body-left-info">
                        <div className="patient-profile-body-left-info-row-icon">
                            <img src={BirthIcon} alt="icon" />
                        </div>
                        <div className="patient-profile-body-left-info-row">
                            <h5 className='body_key'>Date Of Birth</h5>
                            <h5 className='body_value'>{prop?.patient?.date_of_birth}</h5>
                        </div>
                    </div>
                    <div className="patient-profile-body-left-info">

                        <div className="patient-profile-body-left-info-row-icon">
                            <img src={FemaleIcon} alt="icon" />
                        </div>
                        <div className="patient-profile-body-left-info-row">
                            <h5 className='body_key'>Gender</h5>
                            <h5 className='body_value'>{prop?.patient?.gender}</h5>
                        </div>
                    </div>

                    <div className="patient-profile-body-left-info">
                        <div className="patient-profile-body-left-info-row-icon">
                            <img src={PhoneIcon} alt="icon" />
                        </div>
                        <div className="patient-profile-body-left-info-row">
                            <h5 className='body_key'>Contact Info</h5>
                            <h5 className='body_value'>{prop?.patient?.phone_number}</h5>
                        </div>
                    </div>
                    <div className="patient-profile-body-left-info">
                        <div className="patient-profile-body-left-info-row-icon">
                            <img src={PhoneIcon} alt="icon" />
                        </div>
                        <div className="patient-profile-body-left-info-row">
                            <h5 className='body_key'>Emergency Contacts</h5>
                            <h5 className='body_value'>{prop?.patient?.emergency_contact}</h5>
                        </div>
                    </div>
                    <div className="patient-profile-body-left-info">

                        <div className="patient-profile-body-left-info-row-icon">
                            <img src={InsuranceIcon} alt="icon" />
                        </div>
                        <div className="patient-profile-body-left-info-row">
                            <h5 className='body_key'>Insurance Provider</h5>
                            <h5 className='body_value'>{prop?.patient?.insurance_type}</h5>
                        </div>
                    </div>

                    <button className="patient-profile-body-left-button">Show All Information</button>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile