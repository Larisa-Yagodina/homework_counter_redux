import React from "react";
import {connect} from 'react-redux'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';


function DeleteModal(props) {

    const {deleteCounter, counter, setOpenDeleteModal, openDeleteModal} = props;

    const deleteButtonHandler = () => {
        deleteCounter(counter.id);
        setOpenDeleteModal(false)
    }

    return (
        <div>
            <Modal isOpen={openDeleteModal}>
                <ModalBody><h2>Delete counter</h2>
                    {counter.name}
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => deleteButtonHandler(counter.id)}
                        outline color="secondary"
                    >Delete</Button>
                    <Button
                        onClick={() => setOpenDeleteModal(false)} color="earning"
                    >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    deleteCounter: (id) => dispatch({
        type: 'DELETE_COUNTER', payload: {
            id: id
        }
    }),
})

export default connect(null, mapDispatchToProps)(DeleteModal);