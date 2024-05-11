"use client"
import React, { useState } from 'react'

import styles from "@/app/styles/contact.module.css";

const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/contact", {
                method: 'POST',
                body: JSON.stringify(user)
            });
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }


    }


    return (
        <>
            <form className={styles.contact_form} onSubmit={handleSubmit} >

                <div className={styles.input_field}>
                    <label className={styles.label}>
                        Enter Your Name:
                        <input type="text" onChange={handleChange} value={user.username} name="username" id="" placeholder='Enter Your Name' autoComplete='Off' />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label className={styles.label}>
                        Email:
                        <input type="text" onChange={handleChange} value={user.email} name="email" id="" placeholder='Enter Your Email' autoComplete='Off' />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label className={styles.label}>
                        Enter Your Phone:
                        <input type="text" onChange={handleChange} value={user.phone} name="phone" id="" placeholder='Enter Your Phone' autoComplete='Off' />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label className={styles.label}>
                        Enter Your Message:
                        <textarea rows={5} onChange={handleChange} value={user.message} name='message' placeholder='Enter Your Message' autoComplete='Off'></textarea>
                    </label>
                </div>
                <div >
                    <button type='submit'>Send Message</button>
                </div>

            </form>
        </>
    )
}

export default ContactForm