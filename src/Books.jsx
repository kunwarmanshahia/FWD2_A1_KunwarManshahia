import { useEffect, useState } from "react";

function Books({isbn}) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch (`https://api.itbook.store/1.0/books/${isbn}`)
      .then (res => res.json())
      .then (data => setBook (data));
  }, [isbn]);
  
  if (!book) return null;

  return (
    <a
    className="books"
    href={book.url}
    target="_blank"
    rel="noreferrer"
    >
      <img className="book-img" src={book.image} alt={book.title} />
      <h4   className="book-title"
      dangerouslySetInnerHTML={{ __html: book.title }}/>
      <p>{book.authors}</p>
    </a>
  );

}

export default Books;