import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const Card = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> <CommentDetail author="Eishta"  time="Today at 5:00 am" content="Nyc post!" /></ApprovalCard>
            <ApprovalCard> <CommentDetail author="Ayan" time="Today at 6:00 am" content="HaaaaaHaaaa!"/></ApprovalCard>
            <ApprovalCard> <CommentDetail author="Ayush" time="Today at 3:30 am" content="Loved it!"/></ApprovalCard>
Hello
        </div>);
}

export default Card;