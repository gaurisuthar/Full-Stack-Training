import React from 'react'

const StatusMessage = ({status}) => {
  return (
    <div>
        {status==="success"?(
            <p>Operation was succesful</p>
        ) :status==="error"?(
            <p>There was an error</p>
        ) : (
            <p>Status unknown</p>
        )
    }
    </div>
  )
}

export default StatusMessage