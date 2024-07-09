const clickHandler = () => {
  const name = document.getElementById("search-box").value;
  const year = document.getElementById("year-box").value;
  fetch(
    `https://www.omdbapi.com/?apikey=8569808c&type=movie&s=${name}&y=${year}`
  )
    .then((Response) => {
      return Response.json();
    })
    .then((Response) => {
      document.getElementById("movies").innerHTML = "";
      Response?.Search.map((element) => {
        document.getElementById("movies").insertAdjacentHTML(
          "afterbegin",
          `<div>
          <img src="${element.Poster}" alt="">
         <p>Title: ${element.Title}</p>
           <p>Year: ${element.Year}</p>
        </div>`
        );
      });
    });
};
