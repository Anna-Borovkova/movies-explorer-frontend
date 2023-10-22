import { useEffect, useState } from "react";
import { addSettings, pageSettings } from "../utils/config";

export function useCheckPageWidth() {
  const [moviesToRenderNumber, setMoviesToRenderNumber] = useState("");
  const [moreMoviesToRenderNumber, setMoreMoviesToRenderNumber] =
    useState("[]");

  function checkPageWidth() {
    const pageWidth = document.documentElement.clientWidth;

    if (pageWidth > pageSettings.maxWidthBigTablet) {
      setMoviesToRenderNumber(addSettings.desktopInitial);
      setMoreMoviesToRenderNumber(addSettings.desktopAdded);
    } else if (pageWidth > pageSettings.maxWidthSmallTablet) {
      setMoviesToRenderNumber(addSettings.bigTabletInitial);
      setMoreMoviesToRenderNumber(addSettings.bigTabletAdded);
    } else if (pageWidth > pageSettings.maxWidthMobile) {
      setMoviesToRenderNumber(addSettings.smallTabletInitial);
      setMoreMoviesToRenderNumber(addSettings.smallTabletAdded);
    } else {
      setMoviesToRenderNumber(addSettings.mobileInitial);
      setMoreMoviesToRenderNumber(addSettings.mobileAdded);
    }
  }

  useEffect(() => {
    checkPageWidth();
  }, []);

  useEffect(() => {
    function postponeCheckPageWidth() {
      setTimeout(checkPageWidth, 3000);
    }

    window.addEventListener("resize", postponeCheckPageWidth);

    return () => {
      window.removeEventListener("resize", postponeCheckPageWidth);
    };
  }, []);

  return {
    moviesToRenderNumber,
    setMoviesToRenderNumber,
    moreMoviesToRenderNumber,
    setMoreMoviesToRenderNumber,
  };
}
