import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { addUser } from "../utils/userSlice";

const EditProfile = () => {
  const userData = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!userData) return;
  const { firstName, lastName, photoUrl, skills, emailId, about, gender, age } = userData;

  const [myfirstName, setmyfirstName] = useState(firstName);
  const [mylastName, setmylastName] = useState(lastName);
  const [myphotoUrl, setmyphotoUrl] = useState(photoUrl);
  const [myskills, setmyskills] = useState(skills.join(", "));
  const [mygender, setmygender] = useState(gender);
  const [myabout, setmyabout] = useState(about);
  const [myage, setmyage] = useState(age);

  const saveMydata = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/profile/edit",
        {
          firstName: myfirstName,
          lastName: mylastName,
          photoUrl: myphotoUrl,
          skills: myskills.split(",").map((skill) => skill.trim()),
          about: myabout,
          age: myage,
          gender: mygender,
        },
        { withCredentials: true }
      );

      const updatedUser = res.data.data;
      dispatch(addUser(updatedUser));
      navigate("/profile");
    } catch (err) {
      console.log("Backend error:", err.response?.data);
      console.log("Status:", err.response?.status);
      console.log("Message:", err.message);
    }
  };

  return (
    userData && (
      <div className="min-h-screen w-full bg-gradient-to-b from-base-200/50 via-base-100 to-base-200/50 flex items-start sm:items-center justify-center px-4 py-8 sm:py-12">
        <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-300 rounded-2xl overflow-hidden">

          {/* Photo Preview */}
          <div className="relative w-full h-56 sm:h-64 bg-base-300/40 overflow-hidden">
            {myphotoUrl ? (
              <img
                src={myphotoUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-5xl opacity-30">
                👤
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-4 right-4">
              <p className="text-white font-semibold text-lg drop-shadow-md truncate">
                {myfirstName} {mylastName}
              </p>
              <p className="text-white/80 text-xs drop-shadow">
                {myage} • {mygender}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card-body p-5 sm:p-6 gap-3">

            {/* Photo URL */}
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                value={myphotoUrl}
                onChange={(e) => setmyphotoUrl(e.target.value)}
                placeholder="https://..."
                className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
              />
            </div>

            {/* Name row */}
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                  Name
                </span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={myfirstName}
                  onChange={(e) => setmyfirstName(e.target.value)}
                  placeholder="First name"
                  className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
                />
                <input
                  type="text"
                  value={mylastName}
                  onChange={(e) => setmylastName(e.target.value)}
                  placeholder="Last name"
                  className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
                />
              </div>
            </div>

            {/* Email (readonly) */}
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                  Email
                </span>
              </label>
              <input
                type="email"
                value={emailId}
                readOnly
                className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-300/40 text-base-content/60 cursor-not-allowed"
              />
            </div>

            {/* About */}
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                  About
                </span>
              </label>
              <textarea
                value={myabout}
                onChange={(e) => setmyabout(e.target.value)}
                rows={2}
                placeholder="Tell people about yourself..."
                className="textarea textarea-bordered w-full text-sm bg-base-200/60 focus:bg-base-100 transition-colors resize-none"
              />
            </div>

            {/* Skills */}
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                  Skills
                </span>
              </label>
              <input
                type="text"
                value={myskills}
                onChange={(e) => setmyskills(e.target.value)}
                placeholder="React, Node, MongoDB"
                className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
              />
              <label className="label py-1">
                <span className="label-text-alt text-[11px] text-base-content/50">
                  Separate skills with commas
                </span>
              </label>
            </div>

            {/* Gender + Age row */}
            <div className="flex gap-3">
              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                    Gender
                  </span>
                </label>
                <select
                  value={mygender}
                  onChange={(e) => setmygender(e.target.value)}
                  className="select select-bordered w-full select-sm sm:select-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                    Age
                  </span>
                </label>
                <input
                  type="number"
                  value={myage}
                  onChange={(e) => setmyage(e.target.value)}
                  min="18"
                  max="100"
                  className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="card-actions justify-end gap-2 mt-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn btn-ghost btn-sm sm:btn-md rounded-full px-5"
              >
                Cancel
              </button>
              <button
                onClick={saveMydata}
                className="btn btn-primary btn-sm sm:btn-md rounded-full px-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </div>
    )
  );
};

export default EditProfile;