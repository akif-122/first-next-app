import React from 'react'
import ContactCard from '../components/ContactCard'

import styles from "@/app/styles/contact.module.css"
import ContactForm from '../components/ContactForm'
const page = () => {
    return (
        <>
            <div className={styles.container}>

                <h1>Contact Us</h1>
                <ContactCard />


                <section className={styles.contact_section}>
                    <h2>We love to hear from <span>You</span></h2>
                    <ContactForm />
                </section>

            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.088710520782!2d-2.1092273241883297!3d53.55618385900328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb9ffe5bc0ba9%3A0x63cb8d248e7054a5!2sWebspires%20%7C%20Web%20Development%20Services!5e0!3m2!1sen!2s!4v1715184998121!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>

        </>
    )
}

export default page