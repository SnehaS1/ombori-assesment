import React from 'react'
import { LoaderContainer } from '../styles'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <LoaderContainer className=' flex justify-center items-center h-screen z-100'>
            <Spinner animation="grow" style={{ background: "radial-gradient(#7FB900, #E5F1CC)", height: '100px', width: '100px' }} />
        </LoaderContainer>
    )
}

export default Loader