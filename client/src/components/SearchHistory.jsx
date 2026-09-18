function SearchHistory({
  history,
  onSelect,
  onDelete,
  onClear,
}) {
  if (!history.length) {
    return (
      <section className="mt-6 w-full max-w-5xl">
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-800">
            Recent Searches
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Your recent city searches will appear here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-6 w-full max-w-5xl">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              History
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-800">
              Recent Searches
            </h2>
          </div>

          <button
            onClick={onClear}
            className="text-sm font-semibold text-red-500 transition hover:text-red-700"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item._id}
              className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <button
                onClick={() => onSelect(item.city)}
                className="flex items-center gap-3 text-left"
              >
                <span className="text-2xl">📍</span>

                <div>
                  <p className="font-semibold text-slate-800">
                    {item.city}
                  </p>

                  <p className="text-sm text-slate-500">
                    {item.country}
                  </p>
                </div>
              </button>

              <button
                onClick={() => onDelete(item._id)}
                className="self-start text-sm font-medium text-slate-400 transition hover:text-red-500 sm:self-auto"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchHistory;