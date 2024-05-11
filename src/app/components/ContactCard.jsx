import React from 'react'
import styles from "@/app/styles/contact.module.css";

import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md"
import Link from 'next/link';

const ContactCard = () => {
    return (
        <>

            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        <div className={styles.grid_card}>
                            <i><MdEmail /></i>
                            <h2>Email</h2>
                            <p>Monday to Friday Expected</p>
                            <p className={styles.last_pata}>Response time: 72 hours</p>
                            <Link href="/">Send Email</Link>
                        </div>


                        <div className={styles.grid_card}>
                            <i><MdVoiceChat /></i>
                            <h2>Live Chat</h2>
                            <p>Weekdays: 9 AM - 6 PM </p>
                            <p className={styles.last_pata}>Response time: 72 hours</p>
                            <Link href="/">Chat Now</Link>
                        </div>

                        <div className={styles.grid_card}>
                            <i><MdForum /></i>
                            <h2>Community Forums</h2>
                            <p>Monday to Friday Expected</p>
                            <p className={styles.last_pata}>Response time: 72 hours</p>
                            <Link href="/">Send Email</Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard