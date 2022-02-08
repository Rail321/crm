const users = [
  {
    login: 'Admin',
    password: 'qbz',
    token: 'admin-token'
  }
]

class AuthenticationServiceTemporary {

  static login(login, password) {
    let identifiedUser

    users.forEach(
      user => {
        if ( user.login === login && user.password === password ) identifiedUser = user
      }
    )
    
    const token = identifiedUser ? identifiedUser.token : undefined

    return token
  }

}

export default AuthenticationServiceTemporary