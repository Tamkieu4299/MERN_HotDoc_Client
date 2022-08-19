import React from "react";

export default function PatientShow() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="row g-5 justify-content-center">

                        <div className="col-4 patientshow-leftcard me-5">
                            <h1 className="mb-5">Patient</h1>
                            <div className="text-center mb-3"><i className="fa-solid fa-user-large fa-10x"></i></div>
                            <div className="mb-3">Name: John Green</div>
                            <div className="mb-3">Gender: Male</div>
                            <div className="mb-3">Age: 30</div>
                            <div className="mb-3">Height: 1.70m</div>
                            <div className="mb-3">Blood: A</div>
                            <button className="btn btn-secondary">Edit</button>
                        </div>
                        <div className="col-6 patientshow-rightcard">
                            <h1 className="mb-5">Patient notes</h1>
                            <p className="mb-3">
                                - 1
                                - 2
                                - 3
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi suscipit illo possimus. Dolorum nemo laborum asperiores non atque velit ab quidem, eum, rerum voluptates quod et. Aut earum reiciendis modi tempore est fuga rerum vitae necessitatibus natus amet quas delectus, animi sint tenetur voluptas corporis dolorum fugiat, velit asperiores. Similique deleniti autem aliquam eveniet a aut placeat facere voluptatum, nulla sint pariatur optio modi quaerat nobis illo recusandae, id hic excepturi voluptatem temporibus? Omnis minima ab doloribus vel magnam molestias mollitia quasi necessitatibus inventore aliquid dolore, similique unde, id hic, quidem minus officiis laborum aut eius quo! Sit, quaerat!
                            </p>
                            <button className="btn btn-secondary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
