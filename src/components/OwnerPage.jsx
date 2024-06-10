import React from 'react'

const OwnerPage = () => {
    return (
        <div className ="bg-fuchsia-200">
            <div className="flex justify-center font-bold text-4xl mb-6">
                <h1>07_Chatchanan(Lek/เล็ก) - Genmate A</h1>
            </div>
            <div className="flex justify-center">
                <img className="rounded-full size-96"
                src="../src/assets/Lek_pic10.jpg" alt="Owner Image" />
            </div>
            <div className="flex justify-center font-bold text-2xl mt-4 mb-2">
                <h2>Short Biography:</h2>
            </div>
            <div className="flex justify-center py-4 px-96 font-semibold text-xl">
                <p>
                Hello, Sawasdee ka. My name is Chatchanan Mankhetwit, nickname is Lek.
                Currently I am studying in program “Junior Software Developer” #7 of GenKX-Bootcamp.
                I have learned a lot of new various things of Technical skills, Behavioral skills & Mindsets and Career pathways preparation.
                This is an opportunity to expand my knowledges.
                As my goal is to become a quality elderly person who can take care of myself physically, mentally, and financially without being a burden to others,
                I hope that my experience from this bootcamp, combined with my past working experiences, will give me the chance to get a job again.
                My slogan is "No one is too old to learn and be employed".
                </p>
            </div>
         </div>
    );
};

export default OwnerPage;