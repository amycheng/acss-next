function Packages() {
  return <div className="Fz(20px)"><Package/></div>
}

const Price = ({price}) =>{
  return (
    <>
     <p>${price}</p>
     <p>Includes Delivery and assembly.</p>
    </>
  )
}

const Financing = () => {
  return (
  <>
  <p data-affirm-type="text" data-amount="189500" data-page-type="product" data-promo-id="promo_set_12_24_39z_pmt_ala">As low as <span >$49</span>/month for 39 months at 0% APR. <a  aria-label="Prequalify Now (opens in modal)" href="javascript:void(0)">Prequalify Now</a>
  </p>
  </>)
}

const ProductSection = () => {
  return (
    <>
      <h3>Includes</h3>
      <ul >
        <li >Peloton Bike</li>
        <li >12-Month Limited Warranty</li>
        <li ><a href="/shop/bike/assembly">Delivery and Assembly<svg role="img"  viewBox="0 0 16 16" aria-label="Info icon"><g fill="none"><path fill="#65666a" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path fill="#FFF" d="M7 3.384a1.4 1.4 0 1 1 2.8.032A1.4 1.4 0 0 1 7 3.384zM6.223 6.645c.125.05.256.083.39.097.307.032.39.161.39.516v.161c-.139.84-.25 1.71-.39 2.549-.083.484-.139.967-.195 1.484-.05.659.351 1.269.976 1.483.287.038.576.06.865.065a2.125 2.125 0 0 0 1.561-.806.696.696 0 0 0 .168-.323c.055-.194-.084-.355-.28-.258l-.334.193c-.137.076-.29.12-.446.13-.167.032-.307-.097-.363-.29a1.417 1.417 0 0 1-.027-.485c.027-.322.083-.645.139-.967.14-.968.307-1.936.446-2.904.043-.267.071-.536.084-.806C9.207 6.16 9.04 6 8.76 6H6.53a.91.91 0 0 0-.279.032.272.272 0 0 0-.251.29.325.325 0 0 0 .223.323z"></path></g></svg></a></li>
        </ul>
    </>
  )
}

const Package = () => {
return (
  <div>
    <img src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:best,w_260/https://s3.amazonaws.com/peloton-ride-images/a94a8fe5ccb19ba61c4c0873d391e987982fbbd3/img_1530025103442.jpg" alt="" />
    <h2>Bike Basics</h2>
    <Price price="1895"/>
    <Financing />
    <ProductSection />
  </div>
)
}

export default Packages
