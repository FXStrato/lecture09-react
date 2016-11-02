'use strict';

//message to show
var message = <header id="hello" className="well"><h1>Hello JSX</h1></header>;

//define a JS variable
var imgUrl = 'http://goo.gl/n1tBtn';

//include the URL in the JSX
var pic = <img src={imgUrl} alt="A picture" />;

//include an element variable inside JSX
var main = <main>{pic}</main>;

class HelloMessage extends React.Component {
  render() {
     return <h1>Hello World!</h1>;
  }
}

class GoodbyeMessage extends React.Component {
  render() {
     return <h1>See ya later!</h1>;
  }
}

class MessageItem extends React.Component {
  render() {
    return <li>{this.props.message}</li>;
  }
}

class MessageList extends React.Component {
  render() {

    let theMessages = this.props.messages.map(function(msgStr) {
      return <MessageItem message={msgStr} />; //pass prop down!
    });

     return (
        <ul>
          {theMessages}
        </ul>
     );

     //<div>
     //    <HelloMessage />
     //    <GoodbyeMessage />
     //    <HelloMessage message={calledMsg} />
     //  </div>
  }
}

function makeHello() {
  return "Hello World are you listening";
}

let messagesArray = [
  "Hello World",
  "Half Life 3",
  "Spaghetti"
];

//show the content in the web page (inside #root)
ReactDOM.render(<MessageList messages={messagesArray}/>, document.querySelector('#root'));
