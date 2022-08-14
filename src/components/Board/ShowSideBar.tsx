import React from 'react'

interface props {
    isSidebar: boolean,
    setIsSidebar: (val: boolean) => void;
}

const ShowSidebar = ({ isSidebar, setIsSidebar }: props) => {
    return (
        !isSidebar ? (
            <button
                onClick={() => setIsSidebar(!isSidebar)}
                className={'fixed bottom-14 cursor-pointer flex items-end -ml-1 mt-4 pl-6 transition w-16 hover:bg-opacity-50 text-mediumGrey bg-mainPurple py-5 rounded-r-3xl'}
            >
                <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z" fill="#fff" />
                </svg>
            </button>
        ) : null

    )
}

export default ShowSidebar;