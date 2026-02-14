import React, { Fragment } from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <Fragment>
            <div style={{ marginBottom: 24 }} className='flex items-center'>
                <h1 className="text-3xl">Workflow Builder Lite</h1>
                <div className='ml-auto'>
                    <Link to={'/health'}>
                        <p className='text-green-900 text-[20px] hover:underline'> Status Page</p>
                    </Link>
                </div>
            </div>

        </Fragment>
    )
}

export default Header