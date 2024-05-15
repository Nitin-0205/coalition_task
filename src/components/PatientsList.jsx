import React from 'react'
import Search from '../assets/search.png'
import '../styles/PatientList.css'

function PatientsList(props) {

    return (
        <div id='master'>
            <div className='master-header'>
                <h1>Patients</h1>
                <div className='search'>
                    <button>
                        <img src={Search} alt="search" />
                    </button>
                </div>
            </div>
            <ul>
                {
                    props?.patients?.map((patient, index) => {
                        return (
                            <li key={index} className='patient'>
                                <div className='patient-img'>
                                    <img src={patient?.profile_picture} alt="icn" />
                                </div>
                                <div className='patient-info'>

                                    <div className='patient-details'>
                                        <p className='name'>{patient.name}</p>
                                        <p className='age'>{patient.gender}, {patient.age}</p>
                                    </div>
                                </div>
                                <div className='patient-status'>
                                    <p>{patient.status} |</p>
                                </div>
                            </li>
                        )
                    }
                    )
                }

            </ul>

        </div>
    )
}

export default PatientsList