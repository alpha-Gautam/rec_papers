import React from 'react'

const sidebar2 =  ()=>{
  return (
    <div className='h-screen  '>
        {/* <div className='h-10'></div> */}
        <aside className="sidebar h-full ">
            <div className='flex h-full flex-col justify-between'>


                    <div>
                    <h3>OPTIONS</h3>
                    </div>

                    <div className='w-[200px]'>
                        <ul>
                            <li><button onClick={() => window.location.href = '/create-project'} className='text-nowrap'>Create Project</button></li>
                            <li><button onClick={() => window.location.href = '/project-status'} className='text-nowrap'>Ongoing Projects</button></li>
                            <li><button onClick={() => window.location.href = '/choose-mentor'} className='text-nowrap'>Choose Mentor</button></li>
                            <li><button onClick={() => window.location.href = '/view-projects'} className='text-nowrap'>View Project Reports</button></li>
                        </ul>
                    </div>


                    <div>
                        <h>this is botom part</h>
                    </div>
                </div>

            </aside>
      
    </div>
  )
}

export default sidebar2
