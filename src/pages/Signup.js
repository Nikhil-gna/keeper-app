import React from "react";
class Signup extends React.Component {
  render() {
    return (
      <div>
      <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, 0.1);\n        border: solid rgba(0, 0, 0, 0.15);\n        border-width: 1px 0;\n        box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),\n          inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -0.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    " }} />

        
        <main className="form-signin w-100 m-auto">
     
        <form style={{marginTop:100}} >
  <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/2048px-Google_Keep_icon_%282015-2020%29.svg.png" alt width={72} height={57} style={{height: 72}} />
  <h1 className="h3 mb-3 fw-normal">keeper app</h1>
  <div className="form-floating">
    <input type="text" className="form-control" id="username" placeholder="username" />
    <label htmlFor="floatingPassword">UserName</label>
  </div>
  <div className="form-floating">
    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="password" placeholder="Password" />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <div className="checkbox mb-3">
    <label>
      <input type="checkbox" defaultValue="remember-me" /> Remember me
    </label>
  </div>
  <button className="w-100 btn btn-lg btn-primary" id="signup" type="submit" style={{borderRadius: 30, backgroundColor: '#000000'}}>
    Sign up
  </button>
  <br />
  <br />
  <button className="google-btn form-control btn btn-primary submit px-3" id="googleId">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" width={20} height={20} />
    Sign in with Google
  </button>
  {/* <button class="form-control btn btn-primary submit px-3">singin with google</button> */}
  {/* <button style="background: url('../assets/images/google-logo.png') no-repeat;  border: none;" class="form-control btn btn-primary submit px-3">signin with Google</button> */}
  <style dangerouslySetInnerHTML={{__html: "\n          .google-btn {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background-color: #000000;\n            color: #fff;\n            font-weight: bold;\n            border-radius: 30px;\n            cursor: pointer;\n          }\n\n          .google-btn img {\n            margin-right: 10px;\n          }\n        " }} />
</form>
 </main>

   

      </div>
      
    );
  }
}


export default Signup;