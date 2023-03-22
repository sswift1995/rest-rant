const React = require('react')

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav>
        {html.children}
        <div className="wrapper">
          <header>
            <h1><a href="/places">Rest-rant</a></h1>
          </header>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
          <div className="container">
            {html.children}
          </div>
        </div>
      </body>

    </html>
  )
 

}
module.exports = Def