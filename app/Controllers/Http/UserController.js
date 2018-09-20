'use strict'

class UserController {
  async users({ view }) {
   return view.render('users.index', {
    title: 'User Data'
   })
  }
}

module.exports = UserController
