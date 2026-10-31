// Contact form. Sends to /api/contact; if that fails, the visitor is told so
// and given her email address, so a message is never silently lost.
import { useState } from 'react'
import { contact } from '../portfolio'

const EMPTY = { name: '', email: '', subject: '', message: '', website: '' }

const validate = ({ name, email, subject, message }) => {
  const errors = {}
  if (!name.trim()) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Enter a valid email address.'
  if (!subject.trim()) errors.subject = 'Enter a subject.'
  if (message.trim().length < 10) errors.message = 'Write at least 10 characters.'
  return errors
}

const Field = ({ id, label, error, multiline, ...props }) => {
  const Control = multiline ? 'textarea' : 'input'
  return (
    <div className='field'>
      <label htmlFor={id}>{label}</label>
      <Control
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && <p id={`${id}-error`} className='field__error'>{error}</p>}
    </div>
  )
}

const ContactForm = () => {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, sending, sent or failed

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((v) => ({ ...v, [name]: undefined }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`Contact API responded ${res.status}`)
      setValues(EMPTY)
      setStatus('sent')
    } catch (err) {
      console.warn('Contact form failed:', err)
      setStatus('failed')
    }
  }

  const field = (id) => ({ id, value: values[id], error: errors[id], onChange: update })

  return (
    <form className='form' onSubmit={submit} noValidate data-reveal>
      <div className='form__row'>
        <Field {...field('name')} label='Name' autoComplete='name' />
        <Field {...field('email')} label='Email' type='email' autoComplete='email' />
      </div>
      <Field {...field('subject')} label='Subject' maxLength={150} />
      <Field {...field('message')} label='Message' multiline maxLength={5000} />
      <div className='form__trap' aria-hidden='true'>
        <label htmlFor='website'>Leave this empty</label>
        <input id='website' name='website' tabIndex={-1} autoComplete='off' value={values.website} onChange={update} />
      </div>
      <div className='form__actions'>
        <button type='submit' className='btn btn--primary' disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Send message'}
        </button>
        <div aria-live='polite'>
          {status === 'sent' && <p className='form__status'>Message sent. I&apos;ll reply by email.</p>}
          {status === 'failed' && (
            <p className='form__status form__status--error'>
              Your message was not sent. Email me at <a href={`mailto:${contact.email}`} className='link'>{contact.email}</a>.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

export default ContactForm
