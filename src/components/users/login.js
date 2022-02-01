import React from 'react';

const Login = () => {
  return (

    <form id="login" class="form-horizontal">
        <h3>Sign In</h3>

        <div class="control-group">
            <label class="control-label" for="inputEmail">Email</label>
            <div class="controls">
            <input type="text" id="inputEmail" placeholder="Email"/>
            </div>
        </div>
    
        <div class="control-group">
            <label class="control-label" for="inputPassword">Password</label>
            <div class="controls">
            <input type="password" id="inputPassword" placeholder="Password"/>
            </div>
        </div>

        <div class="control-group">
            <div class="controls">
            <label class="checkbox">
            <input type="checkbox"/> Remember me </label>
            </div>
        </div>
        <br/>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
    </form>
    );
};
export default Login;
