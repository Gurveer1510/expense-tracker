
import Navbar from '../navbar/Navbar'
import Main from '@/components/hero/Main'
// import { GridBackground } from '../ui/GridBackGround'

const Hero = () => {
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <div>
                <Navbar />
            </div>
            <div className="h-full">
                <Main />
            </div>
        </div>

    )
}

export default Hero