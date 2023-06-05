import React from 'react'
import BannerImage from "../assets/1beef.jpg"

function About() {
  return (
    <div className="about">
<div className="aboutTop" style={{backgroundImage: `url(${BannerImage})`}}>

</div>

<div className="aboutBottom">
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio nulla, ad tenetur itaque mollitia labore eaque maxime exercitationem illo voluptas quaerat doloribus sapiente delectus aliquam? Labore reiciendis iusto vero!</p>
</div>


    </div>
  )
}

export default About