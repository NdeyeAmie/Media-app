import   MoreHorizSharp  from '@mui/icons-material/MoreHoriz'
import './post.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import { format } from "timeago.js"
import {Link} from "react-router-dom"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { AuthContext } from '../../context/AuthContext'
import Comments from '../commentaire/Comments'

export default function Post({post}) {
  console.log({post});
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext);

  const [commentOpen, setCommentOpen] = useState(false);

useEffect(() =>{
  setIsLiked(post.likes.includes(currentUser._id))
}, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
     const res = await axios.get(`https://social-mediabackend.onrender.com/api/users?userId=${post.userId}`);
    setUser(res.data)
        }; 
        fetchUser();
      },[post.userId]);

  const likeHandler = () => {
    try {
      axios.put("https://social-mediabackend.onrender.com/api/posts/"+post._id+"/like",{userId:currentUser._id});
    } catch (err) {}
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
    <div className='postWrapper'>
      <div className='postTop'>
        <div className='postTopLeft'>
          <Link to={`profile/${user.username}`}>
    <img className='postProfileImg'
     src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} 
     alt=''/>
     </Link>
    <span className='postUsername'>
      {user.username}</span>
    <span className='postDate'>{post.createdAt}</span>
    {/* {format(post.createdAt)} */}
        </div>
            <div className='postTopRight'>
              <MoreHorizSharp/>  
            </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>{post?.desc}</span>
            <img className='postImg' src={PF+post.img} alt=''/>
        </div>
        <div className='postBottom'>
        <div className='postBottomLeft'>
            <img className='likeIcon' src={`${PF}like.png`}onClick={likeHandler} alt=''/>
            <img className='likeIcon' src={`${PF}hear.png`} onClick={likeHandler} alt=''/>
            <span className='postLikeCounter'>{like} people like it</span>
        </div>
        <div className='postBottomRight'>
        <span className='postCommentText' onClick={() => setCommentOpen(!commentOpen)}>
        <TextsmsOutlinedIcon />
      See comments</span>
        </div>
        
      </div>
      {commentOpen && <Comments postId={post._id}/>}
    </div>  
    </div>
  )
}
