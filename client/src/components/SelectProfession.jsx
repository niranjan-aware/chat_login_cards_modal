import React, { Fragment } from 'react';
import './SelectProfession.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import AsCustomer from './AsCustomer';


export default function SelectProfession() {
    const Navigate = useNavigate()
    const asCustomer = () => {
        Navigate('/AsCustomer')
    }

    const asWoker = () => {
        Navigate('/AsWorker')
    }

    return (

        <Fragment>
            {/* <Navbar></Navbar> */}
            <main>
                    <div className="container">
                        <div className="card">
                            <img src="" alt="Image 1" />
                            <h2>Card 1</h2>
                            <p>This is the content for card 1.</p>
                            <button className="btn btn-primary" onClick={asCustomer}>Select Card 1</button>
                        </div>
                        <div className="card">
                            <img src="" alt="Image 2" />
                            <h2>Card 2</h2>
                            <p>This is the content for card 2.</p>
                            <button className="btn btn-primary" onClick={asWoker}>Select Card 2</button>
                        </div>
                    </div>
                    <div className="footer">
                        <p>&copy; 2023 My Website</p>
                    </div>
            </main>
        </Fragment>
    );
}