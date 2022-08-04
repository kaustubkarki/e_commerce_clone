import React from "react"
//find more photes or concept to add here!!
//using a image is nevcer a great alternative or use a png of your own instead
const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "200px",
  }
  const mystyle1 = {
    width: "68%",
    height: "200px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='./images/banner-1.png' width='auto' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='./images/banner-2.png' width='auto' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument;
