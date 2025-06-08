export default function FeeGuarantee() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6 bg-indigo-50 rounded-lg shadow-md mt-16">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Fee Guarantee & Transparency
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-700 mb-8 leading-relaxed">
        We guarantee transparent and fair pricing with no hidden fees. Our
        service fees include all government charges and processing costs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">No Hidden Fees</h3>
          <p className="text-gray-600">
            What you see is what you pay — no surprise costs at any stage.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Price Match Promise</h3>
          <p className="text-gray-600">
            Found a lower price elsewhere? We’ll match it without compromising service.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Full Refund Guarantee</h3>
          <p className="text-gray-600">
            If your visa is rejected, you get a full refund — no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
