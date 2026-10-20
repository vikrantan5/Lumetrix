import { useSelector } from "react-redux";
import { Link } from "react-router";

const Profile = () => {
  const userData = useSelector((store) => store.user);

  if (!userData) return;
  const { firstName, lastName, photoUrl, skills, emailId, about, gender, age } =
    userData;

  console.log("this is ");
  console.log(userData);

  return (
    userData && (
      <div className="min-h-screen w-full bg-gradient-to-b from-base-200/40 via-base-100 to-base-200/40 flex items-start sm:items-center justify-center px-4 py-8 sm:py-12">

        <div className="card bg-base-100 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-base-300">

          {/* Photo banner */}
          <figure className="relative h-72 sm:h-80 bg-base-300/40 overflow-hidden">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={`${firstName} ${lastName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">
                👤
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

            {/* Name + badges */}
            <div className="absolute bottom-0 left-0 w-full p-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg leading-tight">
                {firstName} {lastName}
              </h2>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="badge badge-sm bg-white/20 text-white border-white/30 backdrop-blur-sm capitalize">
                  {gender}
                </span>
                <span className="badge badge-sm bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  {age} yrs
                </span>
              </div>
            </div>
          </figure>

          {/* Body */}
          <div className="card-body p-5 sm:p-6 gap-4">

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-base-200 grid place-content-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-base-content/60"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-base-content/50 font-semibold">
                  Email
                </p>
                <p className="text-sm truncate">{emailId}</p>
              </div>
            </div>

            <div className="divider my-0 opacity-60"></div>

            {/* About */}
            {about && (
              <>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-base-content/50 font-semibold mb-1">
                    About
                  </p>
                  <p className="text-sm text-base-content/80 leading-relaxed">
                    {about}
                  </p>
                </div>
                <div className="divider my-0 opacity-60"></div>
              </>
            )}

            {/* Skills */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-base-content/50 font-semibold mb-2">
                Skills
              </p>
              {Array.isArray(skills) && skills.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="badge badge-sm bg-primary/10 text-primary border-primary/20 rounded-full px-2.5 capitalize"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-sm text-base-content/50">
                  {skills || "No skills added"}
                </span>
              )}
            </div>

            {/* Edit button */}
            <div className="card-actions justify-end pt-2">
              <Link
                to="/profile/edit"
                className="btn btn-primary rounded-full px-6 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Edit Profile
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  );
};

export default Profile;