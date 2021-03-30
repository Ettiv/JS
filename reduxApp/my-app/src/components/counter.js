import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const Counter = ({counter,ink,dec,rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={ink} className="btn btn-primary">INK</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);