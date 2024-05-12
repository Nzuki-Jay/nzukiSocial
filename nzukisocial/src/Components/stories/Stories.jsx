import { FaPlus } from 'react-icons/fa';
import img1 from '../../images/profile-1.jpg';
import img2 from '../../images/profile-2.jpeg';
import img3 from '../../images/profile-2.webp';
import './Stories.scss';


const Stories = () => {

    const stories = [
        {
            id: 1,
            name: 'John Doe',
            img: img1
        },

        {
            id: 2,
            name: 'Mueni Doe',
            img: img3
        },

        {
            id: 3,
            name: 'Sandra Doe',
            img: img2
        },

        {
            id: 4,
            name: 'Taylor Doe',
            img: img3
        },

    ];


    return <>
        <div className='stories'>
            <div className='story'>
                <img src={stories[0].img} alt="" />
                <div className="icon">
                    <FaPlus />
                </div>
                
            </div>
            {stories.map((story) => (
                <div className='story'>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
            
        </div>
    </>
}

export default Stories