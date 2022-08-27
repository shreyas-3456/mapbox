const Search = ({ value, setValue, handleClick }) => {
  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="" className="label">
          Search
        </label>
        <input
          type="text"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" onClick={handleClick} className="btn">
          Search
        </button>
      </form>
    </>
  );
};
export default Search;
