
export default function Filter({ filteredTodos, setStatus, handleClick }) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  let itemLength = "";
  if (filteredTodos.length === 1) {
    itemLength = "item left";
  } else {
    itemLength = "items left";
  }
  return (
    <div className="filter active-filter">
      <div className="filters filter-top">
        <div className="items-left">
          {filteredTodos.length + " " + itemLength}
        </div>
        <button
          value="clear-complete"
          className="clear-complete"
          onClick={handleClick}
        >
          Clear Completed
        </button>
      </div>
      <div className="filters filter-bottom">
        <button onClick={statusHandler} value="all">
          All
        </button>
        <button onClick={statusHandler} value="active">
          Active
        </button>
        <button onClick={statusHandler} value="completed">
          Completed
        </button>
      </div>
    </div>
  );
}
