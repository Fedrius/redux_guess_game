import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRanNum, userInput, makeGuess} from '../actions';
import HistoryLog from './historyLog';

class Game extends Component {

    componentDidMount(){
        this.props.getRanNum();
    }

    render(){
        return (
            <div>
                <h1>GUEZZ GAME?!</h1>
                <p>Random Number: {this.props.ranNum}</p>
                <input onChange={this.props.userInput} value={this.props.userGuess} type="number"/>
                <p>{this.props.msg}</p>
                <br/>
                <button onClick={this.props.makeGuess}>MAKE THE GUEZZZ</button>
                {/*<button onClick={this.props.getRanNum}>get random num</button>*/}
                <HistoryLog data={this.props.hist}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        ranNum: state.game.randomNumber,
        userGuess: state.game.userGuess,
        msg: state.game.message,
        hist: state.game.history
    }
}

export default connect(mapStateToProps, {getRanNum, userInput, makeGuess})(Game);