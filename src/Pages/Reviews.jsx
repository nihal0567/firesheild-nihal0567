
export default function Reviews({toysData}) {
 // const toyData = toysData 
  return (
    <section className="py-16 px-6 bg-pink-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
        {/* {toyData.map((r) => (
          <div
            key={r.toyId}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <img src={r.pictureURL} alt="" />
            <p className="text-gray-600 mb-3 italic">“{r.description}”</p>
            <h4 className="font-semibold text-purple-700">– {r.toyName}</h4>
            <h4 className="font-semibold text-indigo-500"> {r.rating}</h4>
          </div>
        ))} */}
      </div>
    </section>
  );
}
