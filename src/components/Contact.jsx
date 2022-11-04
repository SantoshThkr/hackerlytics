import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>

        <main>
            <h1>Contact Us</h1>

            <div className="main-block">

            <form action="/">
                <div className="info">
                <input className="fname" type="text" name="name" placeholder="Full name" />
                <input type="text" name="name" placeholder="Email" />
                <input type="text" name="name" placeholder="Phone number" />
                <input type="text" name="name" placeholder="Website" />
                </div>
                <button type="submit" href="/">Submit</button>
            </form>
            
            </div>
        </main>

    </div>
  )
}

export default Contact