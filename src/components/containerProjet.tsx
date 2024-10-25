import React, { useEffect, useState } from "react"
import "../assets/style/styleContainerProjet.css"

interface Props{
    title:string
    content:string
    img:string
    link:string
}

const ContainerProjet:React.FC<Props> = ({title,content,img,link}) => {
    const [modalOpen, setModalOpen] = useState(false);

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
        <div className="project" onClick={openModal}>
                <img src={img} alt={title} />
                <div className="overlay">{title}</div>
            </div>
            {modalOpen && (
                <div className="modal-background active" onClick={handleBackgroundClick}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <img src={img} alt={title} />
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        <a href={link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                    </div>
                </div>
            )}
        </>
    );
};


export default ContainerProjet