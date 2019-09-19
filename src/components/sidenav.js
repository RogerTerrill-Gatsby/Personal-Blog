import React from 'react'
import Helmet from 'react-helmet'

const sidenav = () => {
  return (
    <div>
      <ul class="sidenav" id="mobile-links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <Helmet>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
        <script>
          $(document).ready(function(){
            $('.sidenav').sidenav();
          });
        </script>
      </Helmet>
    </div>
  )
}

export default sidenav
