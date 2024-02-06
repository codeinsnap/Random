import MeetingCard from '@/app/ui/meetingCard';
import React from 'react';

const data = [
  {
    room: 'Meeting Room 1',
    start: '20/01/2024 10:15 PM',
    end: '20/01/2024 11:15 PM',
    event: 'Disscussion about the project',
    organiser: 'yogesh',
  },
  {
    room: 'Meeting Room 1',
    start: '20/01/2024 10:15 PM',
    end: '20/01/2024 11:15 PM',
    event: 'Disscussion about the project',
    organiser: 'yogesh',
  },
  {
    room: 'Meeting Room 1',
    start: '20/01/2024 10:15 PM',
    end: '20/01/2024 11:15 PM',
    event: 'Disscussion about the project',
    organiser: 'yogesh',
  },
  {
    room: 'Meeting Room 1',
    start: '20/01/2024 10:15 PM',
    end: '20/01/2024 11:15 PM',
    event: 'Disscussion about the project',
    organiser: 'yogesh',
  },
];

const page = () => {
  return (
    <div className="px-10">
      <span className="text-3xl font-semibold text-white">Meetings</span>
      {data.map((meetingEvent, index) => (
        <MeetingCard meetingEvent={meetingEvent} key={index} />
      ))}
    </div>
  );
};

export default page;
