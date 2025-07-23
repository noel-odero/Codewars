const React = require('react')
// let us know who your three favorite codewarriors are!
// mantain this format, but choose any three users you want:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>;
var CodewarsLink = React.createClass({
  render: function() {
    var user = this.props.user;
    return (
      <a href={"http://www.codewars.com/users/" + user}>{user}</a>
    );
  }
});
var Leaderboard = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.leaders.map(function(user, index) {
          return (
            <a href={"http://www.codewars.com/users/" + user} key={user}>
              {user}
            </a>
          );
        })}
      </div>
    );
  }
});
​
​
​
​