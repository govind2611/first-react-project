import React from 'react'
/***/
const AboutMe = (props) => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis illum qui sequi, illo explicabo soluta ipsam natus pariatur fugiat vel dolor autem. Dolorum inventore consectetur rem ab, molestiae voluptatum. Est expedita, impedit hic laudantium perspiciatis excepturi et. Laboriosam libero inventore delectus praesentium quod ad, aliquam repudiandae temporibus debitis itaque quos eligendi expedita quisquam sed magni molestiae ullam officiis nobis! Numquam sit iure exercitationem voluptatem aliquam. Obcaecati dolor iste nemo nostrum cumque nihil perspiciatis repellendus praesentium distinctio quis sed, dolorum temporibus suscipit libero vitae illo facere reiciendis modi eaque reprehenderit. Dolorem eaque esse cumque reprehenderit dolore quia, eligendi quaerat maiores sit enim illum eveniet ab? Quia ullam delectus explicabo voluptatibus hic nostrum nihil eum vero incidunt et officia obcaecati ducimus, quod accusantium nobis consequatur. Exercitationem ratione doloribus aliquam, iste iusto ut cumque deserunt dignissimos ex! Nihil.</p>
      {props.children}
    </div>
  )
}

export default AboutMe
