import data from "./_data/index.json";
import AOSComponent from './_components/AOS';
import Image from "next/image"

export default function MyProjects(){
    return(
        <div id="Projects" className="projects--section">
            <AOSComponent>
                <h2 className="section--heading project--animation hide">My Projects</h2>
            </AOSComponent>
            <div className="projects--section--container">
                {data?.projects?.map((project,index) => (
                    <AOSComponent key={index}>
                    <div className="project--card project--animation hide" key={index}>
                        <Image width={500} height={500} className="project--img" src={project.img} alt={project.title}/>
                        <div className="project--content">
                            <h3 className="project--title">{project.title}</h3>
                            <p className="project--date">{project.date}</p>
                            <p className="project--description">{project.description}</p>
                            <div className="project--links">
                            {project["code-link"] && project["code-link"].length > 0 && (
                                <a href={project["code-link"]} target="_blank" rel="noreferrer" className="project--link">Code &gt;</a>
                            )}
                            {project["webapp-link"] && project["webapp-link"].length > 0 && (
                                <a href={project["webapp-link"]} target="_blank" rel="noreferrer" className="project--link">Web-app &gt;</a>
                            )}
                            </div>
                            <div className="project--tags--container">
                                <h3 className="project--tags--title">Skills:</h3>
                                <div className="project--tags">
                                    {project?.skills?.map((tag,index) => (
                                        <p key={index} className="project--tag">{tag}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </AOSComponent>
                ))}
            </div>
        </div>
    );
}