// import { useState } from "react";


export default function Main() {
  const articleslist = ["Articolo 1", "Articolo 2", "Articolo 3"];

  return(
    <main>
      <div className="container">
        <ul>
            {articleslist.map((article, index) => (
              <li key={index}> {article}</li>
            ))}
        </ul>
      </div>
    </main>
  )
}