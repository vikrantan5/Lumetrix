const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-nowrap gap-6 px-4 py-8 sm:gap-8 sm:px-6 w-full max-w-full overflow-x-hidden">
      
      {/* 3D Image Card */}
      <div className="hover-3d w-full flex justify-center">
        <figure className="max-w-full sm:max-w-100 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="https://img.daisyui.com/images/stock/creditcard.webp"
            alt="3D card"
            className="w-full h-auto object-cover"
          />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Black Bank Card */}
      <a
        href="#"
        className="hover-3d my-6 sm:my-12 mx-2 cursor-pointer w-full max-w-[24rem] flex justify-center"
      >
        <div className="card w-full bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-all duration-300 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.75)] hover:ring-white/20">
          <div className="card-body p-5 sm:p-6">
            <div className="flex justify-between mb-8 sm:mb-10">
              <div className="font-bold tracking-wider text-sm sm:text-base">
                BANK OF LATVERIA
              </div>
              <div className="text-4xl sm:text-5xl opacity-10">❁</div>
            </div>
            <div className="text-base sm:text-lg mb-4 opacity-40 tracking-[0.15em] font-mono">
              0210 8820 1150 0222
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-[10px] sm:text-xs opacity-20 tracking-widest mb-1">
                  CARD HOLDER
                </div>
                <div className="text-sm sm:text-base tracking-wide">
                  VICTOR VON D.
                </div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs opacity-20 tracking-widest mb-1">
                  EXPIRES
                </div>
                <div className="text-sm sm:text-base tracking-wide">29/08</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>

      {/* Diff Slider */}
      <div className="w-full max-w-[24rem] bg-amber-400 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
        <figure
          className="diff aspect-16/9 rounded-2xl overflow-hidden"
          tabIndex={0}
        >
          <div className="diff-item-1" role="img" tabIndex={0}>
            <div className="bg-primary text-primary-content grid place-content-center text-6xl sm:text-9xl font-black select-none">
              DAISY
            </div>
          </div>
          <div className="diff-item-2" role="img">
            <div className="bg-base-200 grid place-content-center text-6xl sm:text-9xl font-black select-none">
              DAISY
            </div>
          </div>
          <div className="diff-resizer"></div>
        </figure>
      </div>

      {/* Phone Mockup */}
      <div className="mockup-phone border-[#ff8938] shadow-2xl scale-90 sm:scale-100 origin-center">
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display">
          <img
            alt="wallpaper"
            src="https://img.daisyui.com/images/stock/453966.webp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Window Mockup */}
      <div className="mockup-window bg-base-100 border border-base-300 w-full max-w-[24rem] rounded-2xl shadow-xl overflow-hidden">
        <div className="grid place-content-center h-64 sm:h-80 text-base sm:text-lg font-medium">
          Hello!
        </div>
      </div>

      {/* Code Mockup */}
      <div className="mockup-code w-full max-w-[24rem] rounded-2xl shadow-xl overflow-hidden text-xs sm:text-sm">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
};

export default Cards;