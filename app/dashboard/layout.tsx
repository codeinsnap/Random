export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex justify-center w-full p-10">
      <span className="text-4xl font-semibold text-white"> Conference Room Booking </span>
      </div>
      <div className="p-3">{children}</div>;
    </div>
  );
}
