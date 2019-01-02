import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    return (
        <div>
            <NumberOfStudents />
        </div>
    )
}

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 33,
            addEnrolledStudents: 0,
            waitlistStudents: 66,
            addWaitlistStudents: 0
        };
    }

    increment() {
        this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addEnrolledStudents)
        });
    }
    incrementOne() {
        this.setState({
            enrolledStudents: this.state.enrolledStudents + 1
        });
    }

    incrementW() {
        this.setState({
            waitlistStudents: this.state.waitlistStudents + parseInt(this.state.addWaitlistStudents)
        });
    }
    incrementOneW() {
        this.setState({
            waitlistStudents: this.state.waitlistStudents + 1
        });
    }

    render() {
        return (
            <div>

                <button>hjkhkhkjhkj</button>

                <br />


                <h3>Enrolled Students: {this.state.enrolledStudents}</h3>

                <button onClick={this.incrementOne.bind(this)}>Add 1 Enrolled Student</button>

                <p>Add Multiple Enrolled Students:</p>

                <input
                    type="number"
                    onChange={event => this.setState({ addEnrolledStudents: event.target.value })}
                    value={this.state.addEnrolledStudents}
                />

                <button onClick={this.increment.bind(this)}>Increase Students</button>

                <hr/>

                <h3>Waitlist Students: {this.state.waitlistStudents}</h3>

                <button onClick={this.incrementOneW.bind(this)}>Add 1 Enrolled Student</button>

                <p>Add Multiple Waitlist Students:</p>

                <input
                    type="number"
                    onChange={event => this.setState({ addWaitlistStudents: event.target.value })}
                    value={this.state.addWaitlistStudents}
                />

                <button onClick={this.incrementW.bind(this)}>Increase Students</button>

          
            </div>

      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
