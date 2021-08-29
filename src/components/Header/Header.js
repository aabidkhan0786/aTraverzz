import React from 'react'

const Header = () => {
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">aTraverzz</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">

      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0 " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header
