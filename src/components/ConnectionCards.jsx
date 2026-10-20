const ConnectionCards = (props) => {
  const { userDet } = props;
  const { firstName, lastName, photoUrl, skills } = userDet;

  return (
    <div className="w-full max-w-md p-2 sm:p-3">
      <div className="card card-side bg-base-100 shadow-lg border border-base-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300">
        
        {/* Profile Image */}
        <figure className="w-24 sm:w-32 shrink-0 p-3">
          <img
            src={photoUrl}
            alt={firstName}
            className="w-full h-24 sm:h-32 object-cover rounded-xl ring-2 ring-base-300/60 shadow-md"
          />
        </figure>

        {/* Info */}
        <div className="card-body p-3 sm:p-4 justify-center min-w-0">
          <h2 className="card-title text-base sm:text-lg font-semibold truncate">
            {firstName} {lastName}
          </h2>

          <p className="text-xs sm:text-sm text-base-content/70 line-clamp-2 break-words">
            {Array.isArray(skills) ? skills.join(", ") : skills}
          </p>

          <div className="card-actions mt-2 sm:mt-3">
            <button className="btn btn-primary btn-sm rounded-full px-4 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200">
              View Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConnectionCards;