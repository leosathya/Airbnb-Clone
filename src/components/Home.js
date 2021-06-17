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
                    price="$350/night"
                />
                <Card 
                    src="/images/br3.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with
                    this stunning penthouse."
                    price="$350/night"
                />
                <Card 
                    src="/images/br3.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with
                    this stunning penthouse."
                    price="$350/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    src="/images/br3.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with
                    this stunning penthouse."
                    price="$350/night"
                />
                <Card 
                    src="/images/br3.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with
                    this stunning penthouse."
                    price="$350/night"
                />
                <Card 
                    src="/images/br3.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with
                    this stunning penthouse."
                    price="$350/night"
                />
 
            </div>
        </div>
    )
}

export default Home
