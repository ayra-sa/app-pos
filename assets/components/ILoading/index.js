import Modal from 'react-modal';
import React from 'react'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent !important',
        border: 'none !important',
    },
};

function ILoading({
    isModalUp,
    setisModalUp,
}) {
    return (
        <Modal
            isOpen={isModalUp}
            onRequestClose={() => setisModalUp(false)}
            style={customStyles}
        >
            <ILoadingAss />
        </Modal>
    )
}

const ILoadingAss = () => {
    return (
        <svg xmlnsSvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xmlSpace="preserve"><g><path d="M64 128a64 64 0 1 1 64-64 64 64 0 0 1-64 64zm0-115.75A51.75 51.75 0 1 0 115.75 64 51.75 51.75 0 0 0 64 12.25z" fill="#000000" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#000000" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#bcbcbc" transform="rotate(45 64 64)" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#a7a7a7" transform="rotate(90 64 64)" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#909090" transform="rotate(135 64 64)" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#7a7a7a" transform="rotate(180 64 64)" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#646464" transform="rotate(225 64 64)" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#4e4e4e" transform="rotate(270 64 64)" /><path d="M64 14.75a6.73 6.73 0 0 1 6.75 6.7V38.8a6.75 6.75 0 0 1-13.5 0V21.45a6.73 6.73 0 0 1 6.75-6.7z" fill="#383838" transform="rotate(315 64 64)" /><animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g></svg>
    )
}
export default ILoading