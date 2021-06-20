import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                    src="/images/br3.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with
                    this stunning penthouse."
                    price="$150/night"
                />
                <Card 
                    src="/images/br10.jpg"
                    title="cozy studio room with kitchen and wifi"
                    description="3 guests · Studio · 1 bed · 1 bathroom"
                    price="$50/night"
                />
                <Card 
                    src="/images/br6.jpg"
                    title="Beautiful small studio wid kitchen,wifi in JPNagar"
                    description="1 guest · Studio · 1 bed · 1 bathroom"
                    price="$35/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    src="/images/br7.jpg"
                    title="Explore Your Home ( 5G Internet )"
                    description="3 guests · 1 bedroom · 2 bed · 1 bathroom"
                    price="$85/night"
                />
                <Card 
                    src="/images/br8.jpg"
                    title="Aesthetically done up, clean farm house with pool"
                    description="4 guests · 2 bedroom · 3 bed · 2 bathroom"
                    price="$172/night"
                />
                <Card 
                    src="/images/br9.jpg"
                    title="The Countryside Farm & Kamshet , LONAVALA"
                    description="10 guests · 2 bedrooms · 2 beds · 2 bathrooms"
                    price="$250/night"
                />
 
            </div>
        </div>
    )
}

export default Home
