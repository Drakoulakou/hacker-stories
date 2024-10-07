const StoryItem = ({
  title,
  points,
  author,
  comments,
  deleteButton,
  deleteHandler,
  index,
  showDeleteButton,
  suggestionHandler,
  suggestionItem,
}) => {
  return (
    <div className="selected-stories">
      <li
        key={index}
        onClick={suggestionItem && suggestionHandler}
        className={`${suggestionItem ? "suggestion-item" : ""}`}
      >
        <div>
          <h4>{title}</h4>
          <p className="selected-stories-content">
            <span>{points} points</span> | <span>{author}</span> |{" "}
            <span> {comments} comments</span>
          </p>
        </div>
        {showDeleteButton && (
          <p className="delete-button" onClick={deleteHandler}>
            Delete
          </p>
        )}
      </li>
    </div>
  );
};

export default StoryItem;
