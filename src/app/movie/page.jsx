import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css";

const page = async () => {

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1509a2b3ccmsh8636fbbfe392f68p1fcff9jsn02a0fd85d45d',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);

    const data = await res.json();
    const mainData = data.titles;
    console.log(data)


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movies</h1>

                    <div className={styles.card_section}>


                        {
                            mainData.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>


                </div>

            </section>

        </>
    )
}

export default page