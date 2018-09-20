'use strict'

class UserController {
  async users({ view }) {

   const users = [ 
     {id: 1, name: 'Fred'},
     {id: 2, name: 'Sandy'}
    ]

   return view.render('users.index', {
    title: 'User Data',
    users
   })
  }
}

module.exports = UserController
