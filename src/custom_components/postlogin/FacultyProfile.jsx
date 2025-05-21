import React from 'react';

const FacultyProfile = () => {
    return (
        <div className=" text-white ">
            <div className='h-[200px] m-2'>
                <h2>Faculty Profile</h2>
                <p>Welcome, [Faculty Name]!</p>
                <p>Email: faculty@example.com</p>
                <p>Registered Papers: 3</p>
            </div>
            <div className='flex bg-white h-[470px]'>
                this
                <div className='bg-gray-300 h-full w-[50%] border-2'>this is also a dive</div>
                <div className='bg-gray-300 h-full w-[50%] border-2'>this is also a dive</div>
            </div>
        </div>
    );
};

export default FacultyProfile;
