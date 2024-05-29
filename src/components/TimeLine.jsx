import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const TimeLine = () => {
  const events = [
    {
      id: 1,
      date: "2018",
      title: "Dreaming Big",
      timelineDescription:
        "Ideation, research and development, medical vetting.",
      icon: "odd",
    },
    {
      id: 2,
      date: " November 2018",

      title: "First Steps",
      timelineDescription:
        " Release of the first version (OnCure) on the App Store.",
      icon: "even",
    },
    {
      id: 3,
      date: "2019-2021",
      title: "Listening Hearts",
      timelineDescription:
        "Analyzing parents’ feedback, and adding more capabilities.",
      icon: "odd",
    },
    {
      id: 4,
      date: "2022",
      title: "Vision Quest",
      timelineDescription:
        "Second research phase, defining long term scope and capabilities.",
      icon: "even",
    },
    {
      id: 5,
      date: "2023",
      title: "Creative Journey",
      timelineDescription: "Second design and development phase.",
      icon: "odd",
    },
    {
      id: 6,
      date: "2024",
      title: "Heartfelt Release",
      timelineDescription: "Release of the enhanced and updated Encurage app.",
      icon: "even",
    },
  ];

  const iconOdd = { background: "#008080" };
  const iconEven = { background: "#3fccca" };

  const colors = ["#b2ebf2", "#eafaf1", "#ffccbc", "#fcf3cf", "#fbeee6"];

  return (
    <div className="timeline">
      <h2>Product Evolvement</h2>
      <VerticalTimeline lineColor="White">
        {events.map((element, index) => {
          const isIconEven = element.icon === "even";
          const color = colors[index % colors.length];
          return (
            <VerticalTimelineElement
              contentStyle={{
                background: color,
                color: "black",
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "start",
                alignItems: "center",
                height: "250px",
                maxWidth: "600px",
                borderRadius: "50%",
                paddingTop: "35px",
              }}
              contentArrowStyle={{
                borderRight: "10px solid #008080",
              }}
              key={element.key}
              date={element.date}
              dateClassName="timeline-date"
              iconStyle={isIconEven ? iconOdd : iconEven}
            >
              <p id="timelineDescription">{element.timelineDescription}</p>
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
