import it from '../assets/Images/it.svg'
export default function AboutUs() {
  return(
      <div className="about_us">
        <img src={it} alt="" />
        <div className="discription">
          <p className='discribe_us'>What best describes us</p>
          <h2>We are simply pioneering the next Gen of fashion</h2>
          <p>Brandit operates as a dynamic marketplace and production company specializing in clothing for luxury brands. With a clientele ranging from 500 to 100 luxury clothing brands, Brandit caters to customers seeking to launch their own clothing lines or resell customized apparel. Their production process involves creating bespoke garments from scratch and importing items from overseas, ensuring a diverse array of offerings. Brandit prides itself on transforming clients’ visions into tangible reality, serving as the conduit for bringing fashion dreams to life.</p>
          <button>about us <img src="" alt="" /></button>
        </div>
      </div>
  )
}