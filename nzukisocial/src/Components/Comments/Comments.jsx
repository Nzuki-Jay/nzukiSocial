import './Comments.scss';

const Comments = ({comments, userImage}) => {
    return <>
        <div className='comments'>
            <div className='top'>
                <img src={userImage} alt="" />
                <form>
                    <input type="text" placeholder='Comment...' />
                    <button type="submit">Post</button>
                </form>
            </div>

            <div className="bottom">
               {comments.map((comment, id) => {
                    return <div key={id} className='comment'>
                        <div className='left'>
                            <img src={comment.img} alt="" />
                            <div>
                                <span>{comment.user}</span>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                        <span>
                            1 min ago
                        </span>
                        
                    </div>
               })}
            </div>
        </div>
    </>
}

export default Comments