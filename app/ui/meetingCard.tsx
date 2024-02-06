import React from 'react';

type TMeetingCardProps = {
  meetingEvent: {
    room: string;
    start: string;
    end: string;
    event: string;
    organiser: string;
  };
};

const MeetingCard: React.FC<TMeetingCardProps> = (props) => {
  const { room, start, end, event, organiser } = props.meetingEvent;
  return (
    <div className="group hover:bg-orange-900 p-3 h-24 my-5 w-full rounded-lg border-l-2 border-l-orange-500 bg-gradient-to-r from-slate-900 to-orange-300/20 px-5 shadow-2xl">
      <div>
        <span className='text-white me-20'>{`Meeting Room: ${room}`}</span>
        <span className='text-white me-10'>{`Start: ${start} to ${end}`}</span>
      </div>
      <div>
        <span className='text-white me-10'>{`Event: ${event}`}</span>
      </div>
      <span className='text-white me-10 capitalize	'>{`Organiser: ${organiser}`}</span>
    </div>
  );
};

export default MeetingCard;
