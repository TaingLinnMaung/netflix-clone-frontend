import { create } from "zustand";

import axios from "axios";
import contentType from "../hooks/useGetTrendinContent";

const useContentStore = create((set) => ({
    contentType :'movie',
    setContentType:(type) => {
      console.log(type)
      set({contentType:type})
    },
   

}));

export default useContentStore;