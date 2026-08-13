export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="h-18 w-18 animate-spin rounded-full border-4 border-gray-700 border-t-white"></div>
    </div>
  );
}
