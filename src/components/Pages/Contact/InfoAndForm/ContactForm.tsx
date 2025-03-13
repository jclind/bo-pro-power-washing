import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import styles from './InfoAndForm.module.scss'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mqapkvoy')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (state.succeeded) {
    return <p>✅ Your message has been sent successfully!</p>
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contact_form}>
      <label>
        First Name *
        <input
          type='text'
          name='firstName'
          required
          onChange={handleChange}
          value={formData.firstName}
          placeholder='First Name'
        />
      </label>
      <label>
        Last Name *
        <input
          type='text'
          name='lastName'
          required
          onChange={handleChange}
          value={formData.lastName}
          placeholder='Last Name'
        />
      </label>

      <label>
        Email *
        <input
          type='email'
          name='email'
          required
          onChange={handleChange}
          value={formData.email}
          placeholder='you@company.com'
        />
      </label>
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <label>
        Phone Number *
        <input
          type='tel'
          name='phone'
          required
          onChange={handleChange}
          value={formData.phone}
          placeholder='888-888-8888'
        />
      </label>

      <label>
        Message *
        <textarea
          name='message'
          required
          onChange={handleChange}
          value={formData.message}
          placeholder='Your Message'
        />
      </label>
      <ValidationError prefix='Message' field='message' errors={state.errors} />

      <button type='submit' disabled={state.submitting}>
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
