import { useEffect, useState } from 'react'

import face from './assets/face.jpg'
import back from './assets/back.jpg'

import './App.css'

const App = () => {
    const images = { face, back }

    const [image, setImage] = useState(images.face)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('test')
            setImage((prevState) => prevState === images.face ? images.back : images.face)
        }, 1000 * 60)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='wrapper'>
            <img className='image' src={image} alt=""/>
        </div>
    )
}

export default App
