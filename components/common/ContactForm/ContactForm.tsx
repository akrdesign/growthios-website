import { Button } from '@/components/ui'
import { sendContactForm } from '@/lib/api'
import React, { useState } from 'react'

const initValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const initState = { values: initValues }

const ContactForm = () => {
  const [formState, setFormState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values } = formState;

  const onBlur = ({ target }) => setTouched((prev) => ({
    ...prev,
    [target.name]: true
  }))

  const handleChange = ({ target }) => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  }

  const getInputClass = (field) => {
    // Apply "invalid" only if the field has been touched and is empty
    if (touched[field]) {
      return values[field] ? "valid" : "invalid";
    }
    return ""; // No class if it hasn't been touched yet
  }

  const onSubmit = async () => {
    console.log(values)
    try {
      await sendContactForm(values);
    } catch (error) {
      console.log("error")
    }
  }

  return (
    <div className="contact__form__container">
      <div className="combine__input__wrapper">
        <div className="input__wrapper">
          <label>Name</label>
          <input
            type="text"
            name='name'
            value={values.name}
            required
            onChange={handleChange}
            onBlur={onBlur}
            className={getInputClass('name')}
            placeholder='Enter your name'
          />
        </div>
        <div className="input__wrapper">
          <label>Email</label>
          <input
            type="email"
            name='email'
            value={values.email}
            required
            onChange={handleChange}
            onBlur={onBlur}
            className={getInputClass('email')}
            placeholder='Enter your email'
          />
        </div>
      </div>
      <div className="input__wrapper margin">
        <label>Mobile Number</label>
        <input
          type="tel"
          name='phone'
          value={values.phone}
          required
          onChange={handleChange}
          onBlur={onBlur}
          className={getInputClass('phone')}
          placeholder='Enter your mobile number'
        />
      </div>
      <div className="input__wrapper margin">
        <label>Message</label>
        <textarea
          name='message'
          value={values.message}
          required
          onChange={handleChange}
          onBlur={onBlur}
          className={getInputClass('message')}
          placeholder='Enter your message'
          rows={4}
        />
      </div>
      <Button onClick={onSubmit} className='contact__form__button'>Contact us</Button>
    </div>
  )
}

export default ContactForm
