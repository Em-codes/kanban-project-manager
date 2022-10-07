import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'


const authentication = () => {

    const [wordArr, setWord] = useState([])

    const [hasPhrase, updateHasPhrase] = useState<boolean>(false)
    // useEffect(() => {

    // }, [])

    const initializePhrase = () => {
        axios.get('https://random-word-api.herokuapp.com/all')
            .then(response => {
                console.log(response.data);
                setWord(response.data)
            });
    }


    // fisher-yates
    function shuffle(array: any) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    console.log(shuffle(wordArr && wordArr))
    const x = shuffle(wordArr && wordArr)

    //   function shuffle(array: any) {
    //     array.sort(() => Math.random() - 0.5);
    //     return array
    // }

    const get_word = function (number: any) {
        return shuffle(x).slice(0, number)
    }


    const y = get_word(6).map((el: string, i: number) =>
        <span className='bg-gray-300 px-2 py-1 rounded mb-3 mr-3' key={i}>
            {i + 1}.{el}
        </span>
    )

    console.log(y)


    return (
        <section className='flex items-center justify-between min-h-screen'>
            <div className='mw-[600px] mx-5 w-full  flex items-center justify-center min-h-screen'>
                <div className='sc:-mt-0 -mt-20 text-center w-full max-w-[500px]'>
                    <h1 className='sc:text-[32px] text-[24px] text-mediumGrey'>{hasPhrase ? 'Enter' : 'Generate'} Mnemonic Phrase</h1>
                    <p className='sc:text-[16px] text-[13px] leading-none py-3 text-darkGreyLine'>{hasPhrase ? <span>Enter you recovery phrase, seperated <br /> by single spaces to continue</span> : <span>Write down or copy these words in the right order <br /> and save them somewhere safe </span>}</p>
                    {hasPhrase && <div>
                        <textarea className={`bg-white dark:bg-darkGrey body-lg w-full h-28 px-4 py-2 my-2 block rounded text-black dark:text-white resize-none border border-mediumGrey border-opacity-25 placeholder:opacity-25
                                focus:outline-none focus:border-mainPurple`}>
                        </textarea>
                        <div className='flex items-center justify-between mt-4'>
                            <button className="flex-1 bg-mainRed text-white text-[13px] max-w-[120px] w-full rounded-md px-2 py-2 transition duration-200 hover:bg-mainRedHover">Clear</button>
                            <button className="flex-1 bg-mainPurple bg-opacity-10 text-mainPurple text-[13px] max-w-[120px] w-full rounded-md p-2 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">Continue</button>
                        </div>
                        <div className='py-12'>
                            <span className='text-mediumGrey' >First time here ..?</span> <button onClick={() => updateHasPhrase(!hasPhrase)} className='text-mainPurple underline'>Get my phrase</button>
                        </div>
                    </div>
                    }
                    {!hasPhrase && <div>
                        <div className={`bg-white dark:bg-darkGrey body-lg w-full min-h-28 h-full px-4 py-2 my-2 block rounded text-black dark:text-white resize-none border border-mediumGrey border-opacity-25 placeholder:opacity-25
                                focus:outline-none focus:border-mainPurple`}>
                            {/* {(get_word(3)).map(function (val) {
                                <div>
                                    {val}
                                </div>
                            })} */}

                            <div className='flex flex-wrap items-center'>{y}</div>
                        </div>
                        <button onClick={() => initializePhrase()} className="flex-1 bg-mainPurple bg-opacity-10 text-mainPurple text-[13px] max-w-[120px] w-full rounded-md p-2 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">Get My Phrase</button>
                        <div className='py-12'>
                            <span className='text-mediumGrey' >Already has phrase ..?</span> <button onClick={() => updateHasPhrase(!hasPhrase)} className='text-mainPurple underline'>Continue</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className='sc:flex hidden items-center justify-center mw-[600px] w-full bg-slate-600  min-h-screen'>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/logo-dark.svg" height={45} width={274} />
                </div>
            </div>
        </section>
    )
}

export default authentication