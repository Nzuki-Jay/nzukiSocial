import './Home.scss';
import Stories from '../../Components/stories/Stories';
import Posts from '../../Components/Posts/Posts';
import Share from '../../Components/share/Share';

const Home = () => {
    return <>
        <div className='home'>
            <div className='wrapper'>
                <Stories />
                <Share />
                <Posts />
            </div>          
        </div>   
    </>
}

export default Home