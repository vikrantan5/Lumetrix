const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-6 sm:p-10 gap-8 border-t border-base-300">

        {/* Brand block */}
        <aside className="sm:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content grid place-content-center font-bold text-sm shadow-sm">
              T
            </div>
            <span className="font-bold text-lg tracking-tight">Tinder</span>
          </div>
          <p className="text-xs text-base-content/60 max-w-xs leading-relaxed">
            Find your match. Swipe, connect, and build meaningful connections.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title opacity-60 text-xs uppercase tracking-wider">Services</h6>
          <a className="link link-hover text-sm transition-colors hover:text-primary">Branding</a>
          <a className="link link-hover text-sm transition-colors hover:text-primary">Design</a>
          <a className="link link-hover text-sm transition-colors hover:text-primary">Marketing</a>
          <a className="link link-hover text-sm transition-colors hover:text-primary">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-60 text-xs uppercase tracking-wider">Company</h6>
          <a className="link link-hover text-sm transition-colors hover:text-primary">About us</a>
          <a className="link link-hover text-sm transition-colors hover:text-primary">Contact</a>
          <a className="link link-hover text-sm transition-colors hover:text-primary">Jobs</a>
          <a className="link link-hover text-sm transition-colors hover:text-primary">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-60 text-xs uppercase tracking-wider">Social</h6>
          <div className="grid grid-flow-col gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content transition-all duration-200"
            >
              <svg
                aria-label="Twitter"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content transition-all duration-200"
            >
              <svg
                aria-label="YouTube"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content transition-all duration-200"
            >
              <svg
                aria-label="Facebook"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="w-full border-t border-base-300 pt-4 mt-2 sm:col-span-full">
          <p className="text-xs text-base-content/50 text-center sm:text-left">
            © {new Date().getFullYear()} Tinder Clone. All rights reserved.
          </p>
        </div>

      </footer>
    </div>
  );
};

export default Footer;