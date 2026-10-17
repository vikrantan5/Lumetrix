

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-nowrap gap-3">
        <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
  
  {/* content */}
  <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div className="card-body">
      <div className="flex justify-between mb-10">
        <div className="font-bold">BANK OF LATVERIA</div>
        <div className="text-5xl opacity-10">❁</div>
      </div>
      <div className="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
      <div className="flex justify-between">
        <div>
          <div className="text-xs opacity-20">CARD HOLDER</div>
          <div>VICTOR VON D.</div>
        </div>
        <div>
          <div className="text-xs opacity-20">EXPIRES</div>
          <div>29/08</div>
        </div>
      </div>
    </div>
  </div>
  
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</a>

<div className="w-96  bg-amber-400">
<figure className="diff aspect-16/9" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </div>
  <div className="diff-item-2" role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </div>
  <div className="diff-resizer"></div>
</figure>
</div>

<div className="mockup-phone border-[#ff8938]">
  <div className="mockup-phone-camera"></div>
  <div className="mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp" />
  </div>
</div>


<div className="mockup-window bg-base-100 border border-base-300">
  <div className="grid place-content-center h-80">Hello!</div>
</div>



<div className="mockup-code w-full">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
</div>
      
    </div>
  )
}

export default Cards
