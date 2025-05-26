import { useState } from "react";


export default function Main() {
  const [articleslist, setArticleList] = useState(["Articolo 1", "Articolo 2", "Articolo 3"]);
  const [newArticole, setNewArticle] = useState("")
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newArticleList = [...articleslist, newArticole];
    setArticleList(newArticleList)
     

  }
  return(
    <main>
      <div className="container mt-5">
        <form onSubmit={handleFormSubmit} className="d-flex">
          <input 
          value={newArticole}
          onChange={(event) => setNewArticle(event.target.value)}

          className="form-control" type="text" />
          <button className="btn btn-primary">Aggiungi</button>

        </form>



        <ul>
            {articleslist.map((article, index) => (
              <li key={index}> {article}</li>
            ))}
        </ul>
      </div>
    </main>
  )
}