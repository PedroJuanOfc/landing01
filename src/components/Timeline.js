import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Timeline.css';

const timelineData = [
  {
    title: 'Título 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nunc vel erat hendrerit varius nec a turpis. Nullam in.',
  },
  {
    title: 'Título 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nunc vel erat hendrerit varius nec a turpis. Nullam in.',
  },
  {
    title: 'Título 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nunc vel erat hendrerit varius nec a turpis. Nullam in.',
  },
  {
    title: 'Título 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nunc vel erat hendrerit varius nec a turpis. Nullam in.',
  },
  {
    title: 'Título 5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nunc vel erat hendrerit varius nec a turpis. Nullam in.',
  },
  {
    title: 'Título 6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nunc vel erat hendrerit varius nec a turpis. Nullam in.',
  },
];

const TimelineItem = ({ title, text, isLeft }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1, //Efeito timeline
  });

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'} ${inView ? 'visible' : ''}`}
    >
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            text={item.text}
            isLeft={index % 2 === 0}
          />
        ))}
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Timeline;
