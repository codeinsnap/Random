import RoomCard from '../ui/roomCard';
import MeetingCard from '../ui/roomCard';

const data = [
  {
    title: 'Meeting Card 01',
    status: true,
  },
  {
    title: 'Meeting Card 01',
    status: true,
  },

  {
    title: 'Meeting Card 01',
    status: true,
  },

  {
    title: 'Meeting Card 01',
    status: true,
  },

  {
    title: 'Meeting Card 01',
    status: true,
  },

  {
    title: 'Meeting Card 01',
    status: true,
  },

];
export default function Page() {
  return (
    <div className='flex flex-wrap'>
      {data.map((room, index) => <RoomCard title={room.title} status={room.status} key={index} index={index}/>)}
    </div>
  );
}
