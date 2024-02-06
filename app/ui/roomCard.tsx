import React from 'react';
import { Button } from './button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type TRoomCardProps = {
  title: string;
  status: boolean;
  showDelete?: boolean;
  index?: number;
};

const RoomCard: React.FC<TRoomCardProps> = (props) => {
  const { title, status, showDelete = false, index = 1 } = props;
  return (
    <div className="group m-5 h-40 w-72 rounded-lg border-l-2 border-l-orange-500 bg-slate-900 px-5 pt-3 shadow-2xl">
      <div className="mb-4">
        <span className="text-lg text-white">{title}</span>
      </div>
      <div>
        <span className="text-lg text-white">
          Status: {status ? 'Available' : 'Not Available'}
        </span>
      </div>
      <Button className="mt-5 hidden active:bg-orange-400/60 bg-white/20 hover:bg-slate-600 group-hover:!block">
        <div className="flex">
          Checkout your Meetings
          <ArrowRightIcon className="ms-6 w-6 text-orange-500" />
        </div>
      </Button>
    </div>
  );
};

export default RoomCard;
