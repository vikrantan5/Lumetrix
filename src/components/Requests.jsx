import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();

  const reqDet = useSelector((store) => store.request);

  const allRequest = async () => {
    const reqData = await axios.get("http://localhost:3000/request", {
      withCredentials: true,
    });

    dispatch(addRequest(reqData.data.data));
  };

  const requestJudge = async (statuses, userId, requestId) => {
    await axios.post(
      "http://localhost:3000/request/review" + "/" + statuses + "/" + userId,
      {},
      { withCredentials: true },
    );

    dispatch(removeRequest(requestId));
  };

  useEffect(() => {
    allRequest();
  }, []);

  return (
    reqDet && (
      <div className="min-h-screen w-full bg-gradient-to-b from-base-200/40 via-base-100 to-base-200/40 px-4 py-6 sm:px-6 sm:py-10">
        <div className="mx-auto w-full max-w-5xl">

          {/* Header */}
          {reqDet.length > 0 && (
            <div className="mb-6 sm:mb-8 flex items-end justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Requests
                </h1>
                <p className="text-sm text-base-content/60 mt-1">
                  {reqDet.length} pending {reqDet.length === 1 ? "request" : "requests"}
                </p>
              </div>
            </div>
          )}

          {/* List / Empty State */}
          {reqDet.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 place-items-stretch">
              {reqDet.map((reqd) => (
                <div
                  key={reqd._id}
                  className="card card-side bg-base-100 shadow-lg border border-base-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 w-full"
                >
                  {/* Photo */}
                  <figure className="w-24 sm:w-32 shrink-0 p-3">
                    {reqd.fromUserId.photoUrl ? (
                      <img
                        src={reqd.fromUserId.photoUrl}
                        alt={reqd.fromUserId.firstName}
                        className="w-full h-24 sm:h-32 object-cover rounded-xl ring-2 ring-base-300/60 shadow-md"
                      />
                    ) : (
                      <div className="w-full h-24 sm:h-32 rounded-xl bg-base-300/40 grid place-content-center text-3xl opacity-40">
                        👤
                      </div>
                    )}
                  </figure>

                  {/* Info */}
                  <div className="card-body p-3 sm:p-4 justify-center min-w-0 gap-2">
                    <h2 className="card-title text-base sm:text-lg font-semibold truncate">
                      {reqd.fromUserId.firstName} {reqd.fromUserId.lastName}
                    </h2>

                    <p className="text-xs sm:text-sm text-base-content/70 line-clamp-2 break-words">
                      {Array.isArray(reqd.fromUserId.skills)
                        ? reqd.fromUserId.skills.join(", ")
                        : reqd.fromUserId.skills}
                    </p>

                    <div className="card-actions mt-2 sm:mt-3 gap-2">
                      <button
                        className="btn btn-success btn-sm rounded-full px-4 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
                        onClick={() =>
                          requestJudge("accepted", reqd.fromUserId._id, reqd._id)
                        }
                      >
                        ♥ Accept
                      </button>
                      <button
                        className="btn btn-error btn-outline btn-sm rounded-full px-4 hover:scale-[1.03] active:scale-95 transition-all duration-200"
                        onClick={() =>
                          requestJudge("rejected", reqd.fromUserId._id, reqd._id)
                        }
                      >
                        ✕ Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-3">
              <div className="text-6xl opacity-30">📭</div>
              <h2 className="text-xl font-semibold">No pending requests</h2>
              <p className="text-sm text-base-content/60 max-w-xs">
                When someone sends you a connection request, it'll show up here.
              </p>
            </div>
          )}

        </div>
      </div>
    )
  );
};

export default Requests;