import React from 'react'
import { H2 } from '../../style/GlobalStyle'
import CommentImg from '../../assets/shared/icon-comments.svg'
import './Suggestion.css'
import { Link } from 'react-router-dom'

function Suggestion({ sortedList, post, key }) {

    const [mappedPost, setMappedPost] = React.useState()

    const upvoteClick = e => {
        e.stopPropagation()
    }

    const clickSuggestion = () => {
        sortedList.map(item => {
            if(item.id === post.id) {
                setMappedPost(item)
                console.log(mappedPost)
            }  
        })
       // console.log(post.id)
    }

    const { comments } = post
    let commentsCount = comments ? comments.length : 0 
    //console.log(post.id)
    return (
        <Link to="/postmodal">
            <div key={key} className='suggestion_box_container'onClick={clickSuggestion}>
            <div className='feedback_left'>
                <div onClick={upvoteClick}>
                    {post.upvotes}
                </div>
            </div>
            <div className='feedback_center'>
                {post.id}
                <H2>{post.title}</H2>
                <p>{post.description}</p>
                <p>{post.category}</p>
            </div>
            <div className="feedback_right">
                <img src={CommentImg} alt="comment icon" />
                <p>{commentsCount}</p>
            </div>
            </div>
            </Link>
    )
}

export default Suggestion
