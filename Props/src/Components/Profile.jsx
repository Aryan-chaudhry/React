import React from 'react'

function Profile({ name, profileImg, github, linkedin }) {
  return (
    <div className="border-sky-400 w-[800px] h-[600px] border rounded-3xl opacity-100 flex items-center justify-between">
      
      <div className=" h-full w-80 ">
        <img
          className="overflow-hidden w-[150px] h-[150px] mt-10 ml-10 rounded-3xl"
          src={profileImg}
          alt="Profile"
        />
      </div>

      <div className=" h-full w-[440px] px-10 py-15">
        <h1 className="text-white text-2xl mb-4">Hi, I am {name}</h1>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline block mb-2">
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline block">
          LinkedIn
        </a>
      </div>

    </div>
  )
}

export default Profile
