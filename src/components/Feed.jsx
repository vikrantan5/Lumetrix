import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeFeed } from "../utils/feedSlice";
import { useEffect } from "react";

const Feed = () => {
  const feed = useSelector((store) => store.feed);

  console.log(feed);

  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed.length > 0) return;

    try {
      const res = await axios.get("http://localhost:3000/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const letsConnect = async (statuses, userId) => {
    try {
      await axios.post(
        `http://localhost:3000/request/send/${statuses}/${userId}`,
        {},
        { withCredentials: true },
      );

      dispatch(removeFeed(userId));
    } catch (err) {
      console.log(err.response?.data);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) {
    return;
  }

  if (feed.length == 0) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 gap-4 bg-gradient-to-b from-base-200/40 via-base-100 to-base-200/40">
        <div className="text-7xl opacity-30">💤</div>
        <h1 className="text-2xl font-bold tracking-tight">You're all caught up</h1>
        <p className="text-sm text-base-content/60 max-w-xs">
          No further connections exist right now. Check back later for new people.
        </p>
      </div>
    );
  }

  const { firstName, lastName, gender, photoUrl, about, _id } = feed[0];

  return (
    feed && (
      <div className="min-h-screen w-full bg-gradient-to-b from-base-200/40 via-base-100 to-base-200/40 flex flex-col items-center justify-center px-4 py-8 sm:py-12">

        {/* Header */}
        <div className="mb-5 text-center">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Discover</h1>
          <p className="text-xs sm:text-sm text-base-content/60 mt-0.5">
            Swipe right to connect, left to pass
          </p>
        </div>

        {/* Swipe Card */}
        <div className="w-full max-w-sm">
          <div className="card bg-base-100 overflow-hidden rounded-3xl shadow-2xl border border-base-300 ring-1 ring-black/5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in-95">

            {/* Photo */}
            <figure className="relative h-[26rem] sm:h-[28rem] bg-base-300/40 overflow-hidden">
              <img
                src={photoUrl}
                alt={firstName}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

              {/* Name + gender */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg leading-tight">
                  {firstName} {lastName}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge badge-sm bg-white/20 text-white border-white/30 backdrop-blur-sm capitalize">
                    {gender}
                  </span>
                  <span className="badge badge-sm bg-success/90 text-success-content border-0 gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
            </figure>

            {/* Body */}
            <div className="card-body p-5 gap-3">
              <p className="text-sm text-base-content/75 leading-relaxed line-clamp-3 min-h-[3.5rem]">
                {about || "No introduction added yet."}
              </p>

              <div className="divider my-0 opacity-60"></div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-4 pt-1">
                <button
                  className="btn btn-error btn-outline flex-1 rounded-full shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-95 transition-all duration-200"
                  onClick={() => letsConnect("ignored", _id)}
                >
                  ✕ Ignore
                </button>

                <button
                  className="btn btn-success flex-1 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
                  onClick={() => letsConnect("interested", _id)}
                >
                  ♥ Interested
                </button>
              </div>
            </div>
          </div>

          {/* Remaining count hint */}
          {feed.length > 1 && (
            <p className="text-center text-xs text-base-content/50 mt-4">
              {feed.length - 1} more {feed.length - 1 === 1 ? "profile" : "profiles"} waiting
            </p>
          )}
        </div>
      </div>
    )
  );
};

export default Feed;