import './RightSideBar.scss';
import Profileimage from '../../images/profile-2.jpeg';

const RightSideBar = () => {
    return <>
        <div className='rightSideBar'>
            <div className='wrapper'>

                <div className='top'>
                    <span>Suggested for you</span>
                    <div className='suggestedFriends'>
                        <div className='suggestedFriend'>
                            <div>
                                <img src={Profileimage} alt="" />
                                <p>Sandra Doe</p>
                            </div>
                            
                            <div>
                                <button className='btn1'>Follow</button>
                                <button className='btn2'>Unfollow</button>
                            </div>

                        </div>
                        <div className='suggestedFriend'>
                            <div>
                                <img src={Profileimage} alt="" />
                                <p>Sandra Doe</p>
                            </div>
                            
                            <div>
                                <button className='btn1'>Follow</button>
                                <button className='btn2'>Unfollow</button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="center">
                    <span>Recent activites</span>
                    <div className='activities'>
                        <div className='activity'>
                            <div>
                                <img src={Profileimage} alt="" />
                                <p><b>Sandra Doe</b> changed cover photo.</p>
                            </div>         
                            <span>1min ago</span>

                        </div>
                        <div className='activity'>
                            <div>
                                <img src={Profileimage} alt="" />
                                <p><b>Leornad Doe</b> liked your photo.</p>
                            </div>         
                            <span>1min ago</span>

                        </div>
                        <div className='activity'>
                            <div>
                                <img src={Profileimage} alt="" />
                                <p><b>Barbar Doe</b> liked a comment.</p>
                            </div>         
                            <span>1min ago</span>

                        </div>
                        
                        <div className='activity'>
                            <div>
                                <img src={Profileimage} alt="" />
                                <p><b>Ivory Doe</b> added a photo.</p>
                            </div>         
                            <span>1min ago</span>

                        </div>

                    </div>
                </div>

                <div className="bottom">
                    <span>Online friends</span>
                    <ul className='onlineFriends'>
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>
                        
                        <li className='friend'>
                            <div className='img'>
                                <img src={Profileimage} alt="" />
                                <div></div>
                            </div>
                            <span>Sandra Doe</span>
                        </li>

                    </ul>
                    
                </div>

            </div>
        </div>
    </>
}

export default RightSideBar