import './Contact.css'

const Contact = () => {
  return (
    <div className='container contact-container' id='contact'>
      <div className='contact-container-inner'>
        <div className='contact-contact'>
          <h1>Contact Me</h1>
          <h2>Let’s Work Together!</h2>
          <p>Have a project in mind or just want to say hello? Feel free to drop me a message using the form below — I’ll get back to you as soon as possible!</p>
        </div>
        <div className='contact-form'>
          <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Message'></textarea>
            <button className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
