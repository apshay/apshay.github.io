import data from "./_data/index.json";
import AOSComponent from "./_components/AOS";

export default function MySkills() {
  return (
    <section className="skills--section" id="Skills">
      <AOSComponent>
      <h2 className="section--heading skills--animation hide">My Skills</h2>
      </AOSComponent>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <AOSComponent key={index}>
          <div key={index} className="skills--category skills--animation hide">
            <h3 className="skills--category--heading">{item.title}</h3>
            <div className="skills--list">
              {item?.skills?.map((skill, index2) => (
                <div key={index2} className="skill">
                  <img className="skill--img" src={skill.img} alt={skill.name} />
                  <p className="skill--name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          </AOSComponent>
        ))}
      </div>
    </section>
  );
}
