import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type Props = {
    service: {
        name: string;
        description: string;
        icon: IconDefinition;
    };
    onClose: () => void;
};

const Modal = ({ service, onClose }: Props) => {
    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-[#0c7cd14d] flex justify-center items-center z-[999]" onClick={onClose}>
            <div
                className="bg-white p-8 rounded-lg shadow-lg max-w-[90%] max-h-[90%] overflow-y-auto text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
                    &times;
                </button>
                <FontAwesomeIcon icon={service.icon} className="text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p>{service.description}</p>
            </div>
        </div>,
        document.body // <- sem sa vloží modal
    );
};

export default Modal;