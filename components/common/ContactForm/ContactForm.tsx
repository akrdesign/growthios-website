import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import { Button } from '@/components/ui'
import { sendContactForm } from '@/lib/api'

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormState = {
  values: FormValues;
};

type TouchedState = {
  [key in keyof FormValues]?: boolean;
};

const initValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const initState: FormState = { values: initValues };

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>(initState);
  const [touched, setTouched] = useState<TouchedState>({});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const { values } = formState;

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const getInputClass = (field: keyof FormValues) => {
    if (touched[field]) {
      return values[field] ? 'valid' : 'invalid';
    }
    return ''; // No class if it hasn't been touched yet
  };

  const onSubmit = async () => {
    try {
      await sendContactForm(values);
      setMessage("Message sent successfully!")
      setSuccess(true)
      setFormState(initState)
      setTouched({})
      setTimeout(() => {
        setMessage("")
        setSuccess(false)
      }, 3000)
    } catch (error) {
      setMessage(error.message)
      setSuccess(false)
    }
  };

  return (
    <div className="contact__form__container">
      <div className="combine__input__wrapper">
        <div className="input__wrapper">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            required
            onChange={handleChange}
            onBlur={onBlur}
            className={getInputClass('name')}
            placeholder="Enter your name"
          />
        </div>
        <div className="input__wrapper">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            required
            onChange={handleChange}
            onBlur={onBlur}
            className={getInputClass('email')}
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="input__wrapper margin">
        <label>Mobile Number</label>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          required
          onChange={handleChange}
          onBlur={onBlur}
          className={getInputClass('phone')}
          placeholder="Enter your mobile number"
        />
      </div>
      <div className="input__wrapper margin">
        <label>Message</label>
        <textarea
          name="message"
          value={values.message}
          required
          onChange={handleChange}
          onBlur={onBlur}
          className={getInputClass('message')}
          placeholder="Enter your message"
          rows={4}
        />
      </div>
      <Button onClick={onSubmit} className="contact__form__button" disabled={!values.name && !values.email && !values.phone && !values.message}>
        Contact us
      </Button>
      {message && <p className={success ? "message success" : "message error"}>{message}</p>}
    </div>
  );
};

export default ContactForm;
