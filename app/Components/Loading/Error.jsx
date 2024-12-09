export default function Error() {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="bg-color-gray rounded-full h-4 max-w-[300px]"></div>
      <div className="bg-color-gray rounded-full h-4 max-w-[400px]"></div>
      <div className="bg-blue-400 rounded-full h-4 max-w-[200px]"></div>
    </div>
  );
}
