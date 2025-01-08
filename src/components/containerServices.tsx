import React, { useEffect, useState } from "react"
import "../assets/style/styleProjet.css"
import Carousel from "./carrousel"

interface Props{
    title:string
    content:string
    details:string
    imgs: string[]
}

const ContainerServices:React.FC<Props> = ({title,content,details,imgs}) => {
    const [modalOpen, setModalOpen] = useState(false);
    let txtLinl = <p></p>


    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target instanceof HTMLElement && e.target.classList.contains('modal-background')) {
            closeModal();
        }
    };

    // Fermeture du modal avec la touche Échap
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (modalOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [modalOpen]);

    return (
        <>
            <div className="service-card" onClick={openModal} key={title}>
               <h2>{title}</h2>
               <div dangerouslySetInnerHTML={{ __html: content }} />
                        {txtLinl}
               <button>Détails</button>
            </div>
            {modalOpen && (
                <div className="modal-background active" onClick={handleBackgroundClick}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        {/*<Carousel images={imgs} />*/}
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: details }} />
                        {txtLinl}
                    </div>
                </div>
            )}
        </>
    );
};


export default ContainerServices