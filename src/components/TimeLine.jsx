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
      date: "Late 2017",
      title: "The Birth of Innovation",
      timelineDescription:
        "The light bulb went off, and the idea for the Encurage App was born. This was the pivotal moment when we set out on a journey to create a solution that would make children's healthcare safer and more manageable.",
      icon: "odd",
    },
    {
      id: 2,
      date: "2018",
      title: "A Year of Discovery",
      timelineDescription:
        "In 2018, we embarked on extensive research into the problem of medication dosage errors in children. This year was marked by the development of the Encurage App, laying the foundation for a revolutionary tool that would change the way parents and caregivers manage their children's medication.",
      icon: "even",
    },
    {
      id: 3,
      date: "Late 2018",
      title: "Launching Excellence",
      timelineDescription:
        "The moment arrived when we proudly launched the Encurage App. It was a significant milestone, and the app's introduction marked the beginning of a new era in children's healthcare, offering a convenient and reliable way to track medication dosages.",
      icon: "odd",
    },
    {
      id: 4,
      date: "2019",
      title: "Listening to Our Users",
      timelineDescription:
        "2019 was a year of growth and learning. We gathered valuable feedback and insights from users of the app, enabling us to fine-tune and enhance its features. In addition, we conducted further research and studies to ensure that the app was meeting the evolving needs of our users.",
      icon: "even",
    },
    {
      id: 5,
      date: "2020-2022",
      title: "Elevating the Experience",
      timelineDescription:
        "Over the course of these three years, we dedicated ourselves to fine-tuning the Encurage App. Our focus was on continually improving the user experience, with regular updates and refinements to make the app more intuitive, effective, and reliable for parents and caregivers.",
      icon: "odd",
    },
    {
      id: 6,
      date: "2023",
      title: "The Future Beckons",
      timelineDescription:
        "As we march into the future, we're excited to announce our partnership with industry-leading developers. Together, we're committed to elevating the Encurage App to new heights, enhancing its systems and user experience. This year marks a pivotal moment in our journey to provide the best possible support for children's health.",
      icon: "even",
    },
  ];

  const iconOdd = { background: "#2e9593" };
  const iconEven = { background: "#3fccca" };

  return (
    <div className="timeline">
      <h2>Our History</h2>
      <VerticalTimeline lineColor="Teal">
        {events.map((element) => {
          const isIconEven = element.icon === "even";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="timeline-date"
              iconStyle={isIconEven ? iconOdd : iconEven}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="timelineDescription">{element.timelineDescription}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
