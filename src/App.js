import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //Implement a state
  state = {
    person: {
      fullName: "Martin Olivier",
      bio: "World renowned chef",
      imgSrc: "./Chef.jpg",
      profession: "Chef",
    },
    shows: false,
    seconds: 0,
  };

  // handleClick function
  handleClick = () => {
    this.setState({ shows: !this.state.shows });
  };

  // Update the timer every second

   componentDidMount() { setInterval(() => {
      this.setState(()=> ({ seconds: this.state.seconds + 1, }));
    }, 1000);
  }

  // Clear the interval when the component is unmounted

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows , seconds} = this.state;
  

    return (
      <div className='App'>

        {/* Add Button */}  
        <button onClick={this.handleClick} > Show profile </button>

        {/* Conditional rendering based on the 'shows' state */}
        
        {shows && (
          <div>

             {/* Displaying person's profile information */}

            <img src={imgSrc} alt="img" style={{ width: '250px', height: '250px', border: '3px solid black' }} />
            <h3>FullName: {fullName}</h3>
            <h3>Bio: {bio}</h3>
            <h3>Profession: {profession}</h3>
            <h3 style={{color:'red'}}>Time Interval: {seconds} </h3>
          </div>
        )}
      </div>
    );
  }
}
export default App;