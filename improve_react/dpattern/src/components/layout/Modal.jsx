import { useState } from "react";

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShouldShow(true)}
        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 text-white rounded-xl"
      >
        show modal
      </button>
      {shouldShow && (
        // to make hide the modal when clicked on the background
        <div
          className="modal-background fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-gray-300 bg-opacity-75"
          onClick={() => setShouldShow(false)}
        >
          {/* to stop the bubbling so cliking on this should not be like cliking on the background  */}
          <div
            className="modal-body bg-white mx-auto my-10 px-5 py-5 w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShouldShow(false)}>hide</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
