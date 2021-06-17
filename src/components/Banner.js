import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Date from './Datepiker'

function Banner() {
    const [showSearch, setshowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Date />}
                <Button onClick={() => setshowSearch(!showSearch)}
                className="banner__searchButton" variant="outlined">
                    {showSearch ? "Hide" : "Search Dates"}
                    </Button>
            </div>

            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getway
                     to uncover the hidden gems near you.</h5>
                <Button variant="outline">Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner
