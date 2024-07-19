import data from "./_data/index.json";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AOSComponent from './_components/AOS';
import Image from "next/image";

export default function MyExperience(){
    return(
        <section className="experience--section" id="Experience">
            <AOSComponent>
            <h2 className="section--heading experience--animation hide">My Experience</h2>
            </AOSComponent>
            <div className="experience--section--container">
                <Timeline>
                    {data?.experiences?.map((experience,index) => (
                        <AOSComponent key={index}>
                        <TimelineItem className='experience--animation hide' key={index}>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                {index !== data.experiences.length - 1 && <TimelineConnector style={{ background: "#FFFFFF" }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <div className = "experience experience--animation hide">
                                    <div className= "experience--header">
                                        <Image width={50} height={50} className="experience--img" src={experience.img} alt={experience.company}/>
                                        <div className = "experience--header--text">
                                            <h3 className="experience--title">{experience.title}</h3>
                                            <p className="experience--company">{experience.company}</p>
                                            <p className="experience--date">{experience.date}</p>
                                        </div>
                                    </div>
                                    <p className = "experience--description">{experience.description}</p>
                                    <div className="experience--tags--container">
                                        <h3 className="experience--tags--title">Skills:</h3>
                                        <div className="experience--tags">
                                            {experience?.skills?.map((tag,index) => (
                                                <p key={index} className="experience--tag">{tag}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        </AOSComponent>
                    ))}
                </Timeline>
            </div>
        </section>
    );
}