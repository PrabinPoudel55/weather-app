function FavoriteCities({
  favorites,
  currentCity,
  onSelect,
  onAdd,
  onDelete,
}) {
  const isCurrentCityFavorite = favorites.some(
    (favorite) =>
      favorite.city.toLowerCase() ===
      currentCity?.name?.toLowerCase()
  );

  return (
    <section className="mt-6 w-full max-w-5xl">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Favorites
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-800">
              Favorite Cities
            </h2>
          </div>

          {currentCity && (
            <button
              onClick={onAdd}
              disabled={isCurrentCityFavorite}
              className="rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isCurrentCityFavorite
                ? "⭐ Already Favorite"
                : "⭐ Add Current City"}
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <p className="text-sm text-slate-500">
            No favorite cities yet. Add your current city
            to get started.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((favorite) => (
              <div
                key={favorite._id}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <button
                  onClick={() => onSelect(favorite.city)}
                  className="flex items-center gap-3 text-left"
                >
                  <span className="text-2xl">⭐</span>

                  <div>
                    <p className="font-semibold text-slate-800">
                      {favorite.city}
                    </p>

                    <p className="text-sm text-slate-500">
                      {favorite.country}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => onDelete(favorite._id)}
                  className="text-sm text-slate-400 transition hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FavoriteCities;