import React, {useState} from "react";
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'reactstrap'
import DeleteModal from "./DeleteModal";

function Counter(props) {

    const { counter, changeCounter } = props

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    return (
        <div className='col-sm' key={counter.id}>
            <Button outline color="secondary" onClick={() => changeCounter(counter.id, -1)}> -1 </Button>
            {' '}{counter.name}{' '}
            <Button outline color="secondary" onClick={() => changeCounter(counter.id, 1)}> +1 </Button>
            <Button outline color="danger" onClick={() => setOpenDeleteModal(true)}> del </Button>
            {openDeleteModal &&
            <DeleteModal
                counter={counter}
                setOpenDeleteModal={setOpenDeleteModal}
                openDeleteModal={openDeleteModal}
            />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    modal: state.modals,
})

const mapDispatchToProps = (dispatch) => ({
    changeCounter: (id, value) => dispatch({
        type: 'CHANGE', payload: {
            id: id,
            value: value,
        }
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);