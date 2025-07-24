import React, { Component } from 'react'

export class ChatDashboard extends Component {
  render() {
    return (
      <div className="flex h-screen min-h-screen bg-gray-400">

        <div className="flex w-[100%] bg-white m-10 flex-col justify-center items-center ">
          <div className="flex w-[100%] h-[10%] mb-1 mt-0 flex-col justifycenter items-center">
          <h1 className="text-2xl font-bold ">Chat Dashboard</h1>
          <p className="text-gray-700 mb-1">Welcome to the chat dashboard. Here you can manage your chats and settings.</p>
          <h4>(Under Development)</h4>
         
          </div>
          <div className="flex w-[100%] h-[90%] mt-4 justify-center items-center">

          <div className='w-[30%] h-[100%] flex border-2'></div>
          <div className='w-[70%] h-[100%] flex border-2'></div>
          </div>
        </div>

      </div>
    )
  }
}

export default ChatDashboard
