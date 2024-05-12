import './Share.scss';
import image from '../../images/profile-1.jpg';
import ImageIcon from '../../images/img.png';
import MapIcon from '../../images/map.png';
import FriendIcon from '../../images/friend.png';



const Share = () => {

    return <>
        <div className='share'>
            <div className='top'>
                <img src={image} alt="" />
                <input type="text" placeholder="What's on your mind?" />
            </div>

            <hr></hr>

            <div className='bottom'>
                <div className='bottomBtns'>
                    <div>
                        <img src={ImageIcon} alt="" />
                        <span>Add Image</span>
                    </div>

                    <div>
                        <img src={MapIcon} alt="" />
                        <span>Add Location</span>
                    </div>

                    <div>
                        <img src={FriendIcon} alt="" />
                        <span>Tag Friend</span>
                    </div>

                </div>

                <button>Share</button>
            </div>

        </div>
    </>
}

export default Share