import './Posts.scss';
import img1 from '../../images/profile-1.jpg';
import img3 from '../../images/profile-2.webp';
import Comments from '../Comments/Comments';
import { FaComment, FaEllipsisH, FaHeart, FaShare } from 'react-icons/fa';
import { useState } from 'react';

const Posts = () => {

    const postData = [
        {
            id: 1,
            img: img3,
            desc: "Feeling like a million bucks",
            time: '1 min ago',
            user: 'Landon Joe',
            likes: 8,
            comments: [
                {
                    user: 'Sue Joe',
                    img: img1,
                    comment:  "Wow, the scenery is absolutely breathtaking! I wish I could be there right now. 😍",
                },

                {
                    user: 'Sue Joe',
                    img: img1,
                    comment:   "What a stunning capture! The composition and lighting are perfect. Great job! 📸",
                },

                {
                    user: 'David Joe',
                    img: img3,
                    comment:   "This adventure looks like it was filled with unforgettable moments and incredible experiences. 🌟",
                },
               
            ]
        },

        {
            id: 2,
            img: img1,
            desc: "Feeling like a million bucks",
            time: '1 hr ago',
            user: 'Mandela Joe',
            likes: 26,
            comments: [
                {
                    user: 'Sue Joe',
                    img: img1,
                    comment:  "Wow, the scenery is absolutely breathtaking! I wish I could be there right now. 😍",
                },

                {
                    user: 'Sue Joe',
                    img: img1,
                    comment:   "What a stunning capture! The composition and lighting are perfect. Great job! 📸",
                },

                {
                    user: 'David Joe',
                    img: img3,
                    comment:   "This adventure looks like it was filled with unforgettable moments and incredible experiences. 🌟",
                },
               
            ]
        },

        {
            id: 3,
            img: img1,
            desc: "Feeling like a million bucks",
            time: '3 days ago',
            user: 'Bruno Joe',
            likes: 89,
            comments: [
                {
                    user: 'Sue Joe',
                    img: img1,
                    comment:  "Wow, the scenery is absolutely breathtaking! I wish I could be there right now. 😍",
                },

                {
                    user: 'Sue Joe',
                    img: img1,
                    comment:   "What a stunning capture! The composition and lighting are perfect. Great job! 📸",
                },

                {
                    user: 'David Joe',
                    img: img3,
                    comment:   "This adventure looks like it was filled with unforgettable moments and incredible experiences. 🌟",
                },
               
            ]
        },
    ]

    const postCommentStatus = postData.reduce((acc, post) => {
        acc[post.id] = false;
        return acc;
    }, {});

    const [openComments, setOpenComments] = useState(postCommentStatus);

    const toggleComments = (postId) => {
        setOpenComments((prevState) => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
    };


    return <>
            {postData.map((post) => {
               return <div className='post' key={post.id}>
                    <div className='top'>
                       <div className='userInfo'>
                            <img src={post.img} alt='' />
                            <div className='userName'>
                                <span>
                                    {post.user}
                                </span>
                                <span>
                                    {post.time}
                                </span>
                            </div>
                       </div>

                       <FaEllipsisH className='icon' />
                    </div>

                    <div className='center'>
                        <p>{post.desc}</p>
                        <img src={post.img} alt='' />
                    </div>

                    <div className="bottom">
                        <div className="icons">
                            <FaHeart />
                            <span>{post.likes} Likes</span>
                        </div>

                        <div onClick={() => {toggleComments(post.id)}} className="icons">
                            <FaComment />
                            <span>{post.comments.length} Comments</span>
                        </div>
                        <div className="icons">
                            <FaShare />
                            <span>Share</span>
                        </div>
                    </div>
                    <div className={openComments[post.id] ? 'active' : ''}>
                        <Comments comments={post.comments} userImage={post.img} />
                    </div>
                    
                </div>
            })} 
        
    </>
}

export default Posts