import React, { useEffect, useState } from "react"
import "../assets/css/styleContainerSite.css"
import Carousel from "./carrousel"

interface Props{
    title:string
    content:string
    dirImg: string
    len:number
    format:string
    link:string | null
}

const ContainerProjet:React.FC<Props> = ({title,content,len,format,dirImg,link=null}) => {
    const [modalOpen, setModalOpen] = useState(false);
    let imgs: string[] = []
    let txtLinl = <p></p>
    if (link != null){
        txtLinl = <a href={link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
    }

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

    for (let i=1;i<len+1;i++){
        imgs.push(dirImg+"/"+i+"."+format)
    }

    return (
        <>
        <div className="project" onClick={openModal} key={title}>
                <Carousel images={imgs} showControls={false}/>
                <div className="overlay">{title}</div>
            </div>
            {modalOpen && (
                <div className="modal-background active" onClick={handleBackgroundClick}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <Carousel images={imgs} />
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        {txtLinl}
                    </div>
                </div>
            )}
        </>
    );
};


export default ContainerProjet