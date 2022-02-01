import React from 'react';

const SignUp = () => {
    return (
        <form id="signUp">
            <h3>Sign Up</h3>

            <div class="control-group">
                <label class="control-label" for="inputNickName">NickName</label>
                <div class="controls">
                <input type="text" id="inputNickName" placeholder="NickName"/>
                </div>
            </div>

            <div class="control-group">
                <label class="control-label" for="inputEmail">Email</label>
                <div class="controls">
                <input type="text" id="inputEmail" placeholder="Email"/>
                </div>
            </div>

            <div class="control-group">
                <label class="control-label" for="inputPassword">Password</label>
                <div class="controls">
                <input type="text" id="inputPassword" placeholder="Password"/>
                </div>
            </div>
            <br/>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            {/* <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p> */}
            </form>
        );
    };
export default SignUp;