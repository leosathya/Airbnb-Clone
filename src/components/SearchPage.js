import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 Stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Types of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            
            <SearchResult 
              img="/images/br2.jpg"
              location="Private room in center of London"
              title="Stay at this spacious Edwardian House"
              description="1 guest . 1.5 shared bedroom . 1 bed . Kitchen . Free parking . Washing Machine"
              star={4.73}
              price="$30 / night"
              total="$117 total"
            />
            <SearchResult 
              img="/images/br3.jpg"
              location="
              Near Majestic Railway station, Lalbagh, Bangalore
              "
              title="SPOT ON 65593 Yatra Inn"
              description="2 guest . 2 shared bedroom . 1 bed . Kitchen . Free parking . Washing Machine"
              star={4.50}
              price="$33 / night"
              total="$121 total"
            />
             <SearchResult 
              img="/images/br4.jpg"
              location="Private room in center of London"
              title="Aesthetically done up, clean farm house"
              description="4 guest . 2 shared bedroom . 4 bed . Kitchen . Free parking . Washing Machine"
              star={4.91}
              price="$55 / night"
              total="$201 total"
            />
            <SearchResult 
              img="/images/br5.jpg"
              location="
              Near Majestic Railway station, Lalbagh, Bangalore
              "
              title="Beautiful small studio wid kitchen,wifi in JPNagar"
              description="2 guest . 1 shared bedroom . 2 bed . Kitchen . Free parking . Washing Machine"
              star={4.33}
              price="$40 / night"
              total="$120 total"
            />
        </div>
    )
}

export default SearchPage
