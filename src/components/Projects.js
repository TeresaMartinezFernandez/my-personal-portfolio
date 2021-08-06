import "../dataServices/dataProjects.js";
import "../stylesheet/Projects.scss";
import Header from "./Header.js";

const Projects = (props) => {
  console.log(props);

  const projectList = props.dataProjects.map((item) => {
    return (
      <li key={item.id} className="projects__list--item">
        <article className="projects__card">
          <h3 className="projects__card--name">{item.name}</h3>
          <img
            className="projects__card--img"
            src={item.img}
            alt={`Imagen de ${item.name}`}
          ></img>
          <p className="projects__card--text">Tech: {item.tech}</p>
          <a
            href={item.url}
            className="projects__card--link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-desktop" aria-hidden="true">
              web live
            </i>
          </a>
          <a
            href={item.github}
            className="projects__card--link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-code" aria-hidden="true">
              code
            </i>
          </a>
        </article>
      </li>
    );
  });

  return (
    <>
      <Header />
      <div className="projects__container">
        <h2 className="projects__container--title">Mis proyectos</h2>
        <ul className="projects__list">{projectList}</ul>
      </div>
    </>
  );
};

export default Projects;
