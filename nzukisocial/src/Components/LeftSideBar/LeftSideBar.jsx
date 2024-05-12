import './LeftSideBar.scss';
import ProfileImage from '../../images/profile-1.jpg'
import Friends from '../../images/1.png'
import Groups from '../../images/2.png'
import Market from '../../images/3.png'
import Watch from '../../images/4.png'
import Memories from '../../images/5.png'
import Events from '../../images/6.png'
import Gaming from '../../images/7.png'
import Gallery from '../../images/8.png'
import Videos from '../../images/9.png'
import Messages from '../../images/10.png'
import Tutorials from '../../images/11.png'
import Fundraisers from '../../images/13.png'
import Courses from '../../images/12.png'


const LeftSideBar = () => {
    return <>
        <div className="leftSideBar">
            <div className="top">
                <div className>
                    <img className='profileimg' src={ProfileImage} alt="" />
                    <span>John Doe</span>
                </div>
                <div>
                    <img src={Friends} alt="" />
                    <span>Friends</span>

                </div>
                <div>
                    <img src={Groups} alt="" />
                    <span>Groups</span>

                </div>
                <div>
                    <img src={Watch} alt="" />
                    <span>Watch</span>

                </div>
                <div>
                    <img src={Market} alt="" />
                    <span>Marketplace</span>

                </div>
                <div>
                    <img src={Memories} alt="" />
                    <span>Memories</span>

                </div>
            </div>
            <hr className='line'></hr>
            <div className="center">
                <h4>Your shortcuts</h4>

                <div>
                    <img src={Events} alt="" />
                    <span>Events</span>

                </div>
                <div>
                    <img src={Gaming} alt="" />
                    <span>Gaming</span>

                </div>
                <div>
                    <img src={Gallery} alt="" />
                    <span>Gallery</span>

                </div>
                <div>
                    <img src={Videos} alt="" />
                    <span>Videos</span>

                </div>
                <div>
                    <img src={Messages} alt="" />
                    <span>Messages</span>

                </div>
            </div>
            <hr className='line'></hr>
            <div className="bottom">
                <h4>
                    Others
                </h4>

                <div>
                    <img src={Fundraisers} alt="" />
                    <span>Fundraiers</span>

                </div>
                <div>
                    <img src={Tutorials} alt="" />
                    <span>Tutrials</span>

                </div>
                <div>
                    <img src={Courses} alt="" />
                    <span>Courses</span>

                </div>
            </div>
        </div>
    </>
}

export default LeftSideBar