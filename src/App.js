import './App.css';
import UserList from './components/UserList';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { darkMode: false };
  }
  darkModeHandler = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  darkModeStyle = {
    backgroundColor: "#202a2a",
  };
  render() {
    return (
      <div className="App" style={this.state.darkMode ? this.darkModeStyle : null}>
        <UserList darkMode={this.state.darkMode} darkModeStyle={this.darkModeStyle}
          darkModeHandler={this.darkModeHandler} />
      </div>
    );
  }

}
export default App;
