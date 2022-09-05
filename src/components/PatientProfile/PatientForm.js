import React, { useState } from "react";

export default function PatientForm() {
  
    const [patient, setPatient] = useState(
        {
            id: '',
            name: '',
            gender: '',
            age: '',
            height: '',
            blood: '',
            note: ''
        }
    )
  
    return (
        <>
            <div className="row justify-content-center">
                <form className="col-6">
                    <div className="row">
                        <div className="mb-3 col-2">
                            <label htmlFor="name" className="form-label">ID:</label>
                            <input type="text" className="form-control" id="name" placeholder="..." disabled/>
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="gender" className="form-label">Gender:</label>
                            <select className="form-select">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label htmlFor="age" className="form-label">Age:</label>
                            <input type="text" className="form-control" id="age"/>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="height" className="form-label">Height:</label>
                            <input type="text" className="form-control" id="height"/>
                        </div>
                        <div className="mb-3 col">
                            <label htmlFor="blood" className="form-label">Blood:</label>
                            <select className="form-select">
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="ab">AB</option>
                                <option value="o">O</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-12">
                                <label htmlFor="notes" className="form-label">Patient notes:</label>
                                <textarea className="form-control" id="notes" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div>{patient.name}</div>
            </div>
        </>

    );
}
