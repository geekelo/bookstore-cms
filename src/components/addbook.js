function AddBook() {
  return (
    <form>
      <input type="text" placeholder="Fill book title" />
      <select>
        <option>Category</option>
        <option>Category A</option>
        <option>Category B</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  );
}

export default AddBook;
