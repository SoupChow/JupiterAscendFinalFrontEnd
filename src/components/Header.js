import React from 'react'

export default function Header(props) {
  return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(12, 12, 98)"}}>
          
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CertiVerify</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Help</a>
        </li>

      </ul>
      <form class="d-flex" role="search">
        {props.children}
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

//<button class="btn btn-outline-danger" type="submit">Search</button>