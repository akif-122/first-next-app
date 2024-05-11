import React from 'react'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image';
import Link from 'next/link';
const MovieCard = (curElem) => {

    const { id, title, type, synopsis, backgroundImage } = curElem.jawSummary;


    return (

        <>

            {
                curElem.jawSummary.backgroundImage.url ?
                    <div className={styles.card} >

                        <div className={styles.card_image}>
                            <Image src={curElem.jawSummary.backgroundImage.url} alt="Movie Poster" width={450} height={200} />
                        </div>

                        <div className={styles.card_data}>
                            <h2>{title}</h2>
                            <p>{synopsis.substr(0, 40)}...</p>
                            <Link href={`/movie/${id}`}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div >
                    :
                    null
            }

        </>

    )
}

export default MovieCard