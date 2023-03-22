const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
        </Def>
    )
}
<a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     


 


module.exports = show
