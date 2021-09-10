import React from 'react'

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const saveUserData = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      console.log('no username');
      return;
    }
    if (!password.trim()) {
      console.log('no password');
      return;
    }
    console.log('processing data...' + username + ' ' + password);
    e.target.reset();
    setUsername('');
    setPassword('');
  }
  return (
    <div>
      <form onSubmit={ saveUserData }>
        <input type="text" placeholder="Username" className="form-control mb-2" onChange={ (e) => setUsername(e.target.value)}></input>
        <input type="text" placeholder="Password" className="form-control mb-2" onChange={ (e) => setPassword(e.target.value)}></input>
        <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default LoginForm
