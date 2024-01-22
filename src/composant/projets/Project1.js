const Project1 = ({mini}) =>{
    return(
<div className="project-card">
        <img src={mini.img} alt="project" />
        <h3> {mini.titre} </h3>
        <p>
          {mini.des} </p>
        <p>
          <a href="#">{mini.age}</a>
        </p>
      </div>

    )
}
export default Project1