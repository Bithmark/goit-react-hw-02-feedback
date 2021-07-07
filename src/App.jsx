import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import {Component} from "react"


class App extends Component {
  state = {
    good: 0,
    bad:0,
    neutral:0
  }

handleChangeStatistics = (e) => {
  this.setState(prev => {
    return {[e.target.name]:prev[e.target.name]+1}
  })
}

countPositiveFeedbackPercentage = () => {
  const { good, neutral, bad } = this.state;
  return neutral + bad + good !== 0
    ? Math.round((good / (neutral + bad + good)) * 100)
    : 0;
};

render() {
  const { good, neutral, bad } = this.state;
    return (
    <div className="App">
       <Section>
       <FeedbackOptions onChangeStatistics={this.handleChangeStatistics}/>
     {(good+neutral+bad) > 0 ?  <Statistics positivePercentage={this.countPositiveFeedbackPercentage()
       }
       good={this.state.good} 
       bad={this.state.bad} 
       neutral={this.state.neutral}/> : <p>No feedback given</p>}
       </Section>
    </div>
  );
  }
}

export default App;
