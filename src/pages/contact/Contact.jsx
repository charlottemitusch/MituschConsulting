import React from 'react'
import './Contact.css'
import bilde from '../../assets/icons/oslo.png'
import Bakgrunn from '../../components/background/Bakgrunn'

const Contact = () => {
  return (
    <div>
      <div className="contact-background">
        <Bakgrunn
          icon={bilde}
          header={'CONTACT ME'}
          text={
            '["REACH OUT IF YOU LIKE WHAT YOU SEE", "OR HAVE ANY QUESTIONS"]'
          }
        />
      </div>
      <section className="contact-content">
        <div className="item contact-container-left">
          <h2>LOCATION & MAIL</h2>
          <hr />
          <p>
            OSLO, NORWAY <br /> <br />
            CMMITUSCH@GMAIL.COM
          </p>
        </div>
        <div className="contact-container-right">
          <div className="item contact-container-right-top">
            <h2> SOSIAL PLATFORMS</h2>
            <p>LINKEDIN</p>
            <hr />
            <p>FACEBOOK</p>
            <hr />
            <p>INSTAGRAM</p>
          </div>
          <div className="item contact-container-right-bm">
            <h2>heisann</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste
              quos itaque! Modi temporibus cumque accusantium minima facilis
              velit enim eos iusto nam, quam delectus. A provident illo sint
              repellendus.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
