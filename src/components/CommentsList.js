import Comment from "./Comment";

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => <div key={index}>
        <div className="py-2">
          <Comment data={comment} />
        </div>
        <div className="pl-5 ml-5 border-l-2 border-l-gray-200">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
      );
}

export default CommentsList;
