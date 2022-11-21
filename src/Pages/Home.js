import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import NeedHelp from '../Components/NeedHelp'
import  Card  from '../Components/Card'

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Banner />
                <NeedHelp/>
                <Card/>
            </div>
        </div>
    )
}

export default Home