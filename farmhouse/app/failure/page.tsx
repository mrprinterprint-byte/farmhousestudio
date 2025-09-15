export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Payment Failed / Cancelled</h1>
      <p className="text-lg text-red-900">Your payment was not completed. Please try again or contact support.</p>
    </div>
  );
}
