import temp_product from '../assets/Images/temp product.svg'

export default function TopQuality() {
  return(
    <div className="top_quality">
      <h1 className="text-[40px] font-nexa-bold text px-10 leading-[52px] ">Experience Top Quality <br /> Product</h1>
      <div className="list">
        <p>Hoodie</p>
        <p>Shorts</p>
        <p>T-shirt</p>
        <p>Trouser</p>
        <p>Sweatshirt</p>
        <p>Cap</p>
        <p>Jersey</p>
        <p>Jackets</p>
      </div>
      <div className="products">
        <img src={temp_product} alt="" />
      </div>
    </div>
  )
}