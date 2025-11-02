

import { cn } from '@/lib/utils';
import Image from 'next/image'
//import { useState } from 'react';


 
enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}


const Agent = ({ userName }: AgentProps) => {
    const isSpeaking = true;
    const callStatus = CallStatus.FINISHED;
    const messages=[
        'whats your name?',
        'my name is kavita'  
    ];
    const lastMessage = messages[messages.length - 1] ;

  return (

    <> 
    <div className="call-view">
        <div className="card-interviewer">
            <div className="avatar"> 
                <img src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover"/>
                {isSpeaking && <span className="animate-speaker"></span>}
            </div>
            <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
            <div className="card-content">
                <Image
                 src="/user-avatar.png"
                alt="profile-image"
                width={539}
                height={539}
                className="rounded-full object-cover size-[120px]"
                />
                <h3>{userName}</h3>
            </div>
        </div>
    </div>
        {messages.length > 0 && (
            <div className="transcript-border">
                <div className="transcript">
                    <p key={lastMessage} className ={cn(
                        "transition-opacity duration-500 opacity-0",
                        "animate-fadeIn opacity-100"
                    )}>
                        {lastMessage}
                    </p>
                </div>
            </div>
        )}
       

        <div className='w-full flex justify-center'>
            {callStatus !== "ACTIVE" ? (
                <button className ="relative btn-call" >
                    <span className ={cn('absolute animate-ping rounded-full opacity-75',
                    callStatus !== "CONNECTING" && "hidden"
                    )} />
                        <span>
                        {callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Call" : "Connecting..."}
                        </span>

                    
                </button>
            ) : (
                <button className="disconnect-button" >
                    End
                </button>
            )}
        </div>
       
    </>
  )
          
}

export default Agent;