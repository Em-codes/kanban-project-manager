import React from 'react'
import Image from 'next/image'


const authentication = () => {
    return (
        <section className='flex items-center justify-between min-h-screen'>
            <div className='mw-[600px] border w-full  flex items-center justify-center min-h-screen'>
                <div className='text-center'>
                    <h1 className='text-[40px] text-mediumGrey'>Enter Mnemonic Phrase</h1>
                    <p>Enter you recovery phrase, seperated <br /> by single spaces to continue</p>
                    <div>
                        <textarea className={`bg-white dark:bg-darkGrey body-lg w-full h-28 px-4 py-2 my-2 block rounded text-black dark:text-white resize-none border border-mediumGrey border-opacity-25 placeholder:opacity-25
                                focus:outline-none focus:border-mainPurple`}>
                        </textarea>
                        <div className='flex items-center justify-between mt-4'>
                            <button className="flex-1 bg-mainRed text-white text-[13px] max-w-[120px] w-full rounded-md p-2 transition duration-200 hover:bg-mainRedHover">Clear</button>
                            <button className="flex-1 bg-mainPurple bg-opacity-10 text-mainPurple text-[13px] max-w-[120px] w-full rounded-md p-2 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">Continue</button>
                        </div>
                        First time here ..? <button>Get my phrase</button>
                    </div>
                    <div>
                        <div>OBI, ADA, MANGOA, ACAHELEKWI, mobgart, atakaoma</div>
                        <button>Get My Phrase</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mw-[600px] w-full bg-slate-600  min-h-screen'>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/logo-dark.svg" height={45} width={274} />
                </div>
            </div>
        </section>
    )
}

export default authentication