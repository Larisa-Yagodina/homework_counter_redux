import React, {useState} from "react";
import {connect} from 'react-redux'
import {Input, Button, Modal, ModalBody, ModalFooter} from 'reactstrap';


function CreateModal(props) {

    const {modal, changeCreateModal, addCounter} = props;

    const [newCounter, setCounter] = useState('');

    return (
        <div>
            <Modal isOpen={modal.createModal}>
                <ModalBody>
                    <h2>Create new counter</h2>
                </ModalBody>
                <Input
                    value={newCounter}
                    onChange={(e) => setCounter(e.target.value)}
                    type="number"
                    placeholder="input new counter"
                />
                <ModalFooter>
                    <Button
                        onClick={() => addCounter(newCounter, Math.random())}
                        outline color="secondary"
                    >Save</Button>
                    <Button
                        onClick={() => changeCreateModal(false)} color="earning"
                    >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => ({
    modal: state.modals,
})

const mapDispatchToProps = (dispatch) => ({
    changeCreateModal: (value) => dispatch({
        type: 'CHANGE_CREATE_MODAL', payload: {
            value: value
        }
    }),
    addCounter: (value, id) => dispatch({
        type: 'ADD_COUNTER', payload: {
            name: +value,
            id: id,
        }
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);