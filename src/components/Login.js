import React from 'react'
import './login.css'

export const Login = () => {
    return (
        <div>
            <div className='login'>
           <div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <h2>Sign in</h2>       
        <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" required="required"/>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" required="required"/>
        </div>
        <div class="form-group clearfix">
            <button type="submit" class="btn btn-primary pull-left">Sign in</button>
            <label class="checkbox-inline pull-left remember-me"><input type="checkbox"/> Remember me</label>
        </div>
        <div><a href="#">Can't access your account?</a></div>        
    </form>
</div>

</div>
        </div>
    )
}
