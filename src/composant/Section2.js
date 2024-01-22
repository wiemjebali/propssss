import Project1 from "./projets/Project1"
import Project2 from "./projets/Project2"
import Project3 from "./projets/Project3"
import Project4 from "./projets/Project4"

const Section2 = () =>{
  let pr=[
    {
        titre:"nerve",
        des:"A naive high school girl participates in an online game of truth or dare called Nerve. However, she soon finds herself being coerced into performing life-threatening tasks.",
        rate:5,
        img:"../Image/nerve.jpg"
        
        
        },
{
titre:"tarin to bussan",
des:"Seok-woo and his daughter are on a train to Busan on the latter's birthday to see his wife. However, the journey turns into a nightmare when they are trapped amidst a zombie outbreak in South Korea.",
rate:4,
img:"../Image/train.jpg"


}



  ]
return(

<section id="projects">
    <h2 className="text-important">Projects</h2>
    <div className="projects-container">
   
     {
        pr.map((el)=> <Project1 mini={el}   /> )
     }

    </div>
  </section>


)



}
export default Section2