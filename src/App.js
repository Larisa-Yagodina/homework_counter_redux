import React from "react";
import './App.css';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap'
import CreateModal from "./CreateModal";
import Counter from "./Counter";

function App(props) {

    const {counters, modal, changeCreateModal} = props

    return (
        <div>
            <h1> Counter with Redux </h1>
            <div className='container-fluid'>
                <Button outline color="secondary" onClick={() => changeCreateModal(true)}> Add counter </Button>
                {modal.createModal &&
                <CreateModal/>}
                <hr/>
                <div className='row'>
                    {counters.map(el =>
                        <Counter counter={el} key={el.id}/>
                    )}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    counters: state.counters,
    modal: state.modals,
})

const mapDispatchToProps = (dispatch) => ({
    changeCounter: (id, value) => dispatch({
        type: 'CHANGE', payload: {
            id: id,
            value: value,
        }
    }),
    changeCreateModal: (value) => dispatch({
        type: 'CHANGE_CREATE_MODAL', payload: {
            value: value
        }
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);