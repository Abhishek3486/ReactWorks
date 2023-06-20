import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import arrow from './assets/arrow1.png';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <div class="container">
<div class="row">
<div class="col-md-10 offset=md-1">
<div class="row">
<div class="col-md-5 register-left">
<img src={arrow} alt="" />

<h3> Join Us</h3>
<p>Subscribe Easy Tutorials Youtube Channel to watch more
videos</p>
<button type="button" class="btn btn-primary">About Us</button>
</div>
<div class="col-md-7 register-right">
<div class="wrapper ten">
        <div>
            <h3 class="bounce">
                <span>R</span>
                <span>E</span>
                <span>G</span>
                <span>I</span>
                <span>S</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
            </h3>
        </div>
    </div>
<div class="register-form"></div>
<div class="form-group">
<label for="Name"><input type="text" class="form-control" placeholder="Name" required/> </label>
</div>
<div class="form-group">
<label for="Username"><input type="text" class="form-control" placeholder="Username" pattern="[a-z]{8}" title="only 8 characters allowded" required/></label>
</div>
<div class="form-group">
<label for="Email"><input type="email" class="form-control"  placeholder="Email" required/></label>
</div>
<div class="form-group">
<label for="Password"><input type="password" class="form-control" placeholder="Password" pattern="[A-Za-z0-9]{8}" title="only upto 8 characters with number or alphabets of your choice" required/></label>
</div>
<label for="submit"><input type="submit" class="btn btn-primary" value="Register"/></label>
</div>
</div>
</div>
</div>
</div>
  )
}

export default App
