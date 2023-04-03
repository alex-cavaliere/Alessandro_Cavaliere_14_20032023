import Header from "../components/Header"
import Form from "../components/Form"
import Modal from "react-modal"
import { useState } from "react"

function CreateEmployee() {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }
    }
    const saveEmployee = () => {
        console.log('save successfully')
    }
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='container'>
            <Header />
            <Form />
            <button onClick={openModal} id="submit">save</button>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}>
                    <button className="close" onClick={closeModal}>X</button>
                    <h2 id="confirmation" className="modal">Employee Created!</h2>
                </Modal>
            </div>
        </div>
    )
}

export default CreateEmployee