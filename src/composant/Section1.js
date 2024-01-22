const Section1 = ({test2}) =>{
return(

<section id="about-me">
    <h1>
      Hello, my name is
      <span className="rotate text-important">{test2}</span>,<br />
      and i make amazing websites.
    </h1>
    <img className="avatar" src="../Image/nerve.jpg" alt="jhon-doe" />
  </section>



)


}
export default Section1