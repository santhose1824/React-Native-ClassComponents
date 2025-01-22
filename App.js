import React,{Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class App extends Component {
  // --------------------------------------------------------
  // To Create Constructor
  // constructor(props) {
  //   super(props);
  // }
  // ----------------------------------------------------------
  // State and Event Handling
  constructor(props) {
    super(props);
    this.state={name:'World'};
  }
  // -----------------------------------------------------------
  // Life Cycle Methods
  componentDidMount() {
    console.log('Component is Mount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Checking if  component is updated');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Getting snapshot before component update');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component is Updated');
  }

  componentWillUnmount() {
    console.log('Component is UnMount');
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        {/*For State and Event Handling*/}
        <Text onPress={()=>{this.setState({name:'Santhose H.M'})}}>Hello {this.state.name}</Text>
        {/*-------------------------------------------------------------------------------------------*/}
        {/*<Text>Hello World</Text>*/}
      </SafeAreaView>
    );
  }
}

export default App;
