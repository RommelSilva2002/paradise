import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import '../App.css';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    return(
        <div>
            <button class="e10_48" onClick={openModal1}>Login</button>
            <Modal isOpen={isOpenModal1}>
            <h3>Ingresar</h3>
                <form action="">
                        <div class="contenedor-inputs">
                            <input type="text" placeholder="Nombre"></input>
                            <input type="password" placeholder="Contraseña"></input>
                            <input type="email" placeholder="Correo"></input>
                        </div>
                        <input type="submit" class="btn-submit" value="Login"></input>
                </form>
                <button class="modal-close" onClick={closeModal1}><i class="fas fa-times"></i></button>
            </Modal>
        </div>
    )
}
export default Modals