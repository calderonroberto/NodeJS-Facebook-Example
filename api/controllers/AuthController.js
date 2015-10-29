/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

	login: function (req, res) {
		res.view();
	},

	logout: function (req, res) {
		res.redirect('/');
	},

	facebook: function(req, res){
		req.logIn(user, function(err){
			if (err) {
				console.log(err);
				res.view('500');
				return;
			}
			res.redirect('/');
			return;
		})(req, res);
	}

};
