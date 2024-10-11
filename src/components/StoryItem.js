const StoryItem = ({
  title,
  points,
  author,
  comments,
  deleteHandler,
  suggestionHandler,
  suggestionItem,
}) => {
  return (
    <div className="selected-stories">
      <li
        onClick={suggestionHandler}
        className={`${suggestionItem ? "suggestion-item" : ""}`}
      >
        <div>
          <h4>{title}</h4>
          <p className="selected-stories-content">
            <span>{points} points</span> | <span>{author}</span> |{" "}
            <span> {comments} comments</span>
          </p>
        </div>
        {!!deleteHandler && (
          <p className="delete-button" onClick={deleteHandler}>
            Delete
          </p>
        )}
      </li>
    </div>
  );
};

export default StoryItem;
