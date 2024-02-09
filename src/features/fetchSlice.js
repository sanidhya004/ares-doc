import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetch_app",
  initialState: {
    isFetching: false,
    error: false,
    errMsg: "",
    appointments: [],
    inqueue: [],
    slots: [],
    doctors: [],
    completed: [],
    prescriptions: [],
    totalPages: [],
    bookings: [],
  },
  reducers: {
    FetchStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
    },
    FetchSuccess: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetching = false;
      switch (action.payload.type) {
        case "FETCH_APPOINTMENTS_SUCCESS":
          state.appointments = action.payload.payload;
          break;
        case "FETCH_SLOTS_SUCCESS":
          state.slots = action.payload.payload.slots;
          break;
        case "FETCH_DOCTORS_SUCCESS":
          state.doctors = action.payload.payload.doctors;
          break;
        case "FETCH_PRESCRIPTIONS_SUCCESS":
          state.prescriptions = action.payload.payload.appointments;
          state.totalPages = action.payload.payload.totalPages;

          break;
        case "FETCH_INQUEUE_SUCCESS":
          state.inqueue = action.payload.payload.data;
          state.totalPages = action.payload.payload.totalPages;

          break;
        case "FETCH_COMPLETED_REQUESTS_SUCCESS":
          state.prescriptions = action.payload.payload.data;
          state.totalPages = action.payload.payload.totalPages;

          break;
        case "FETCH_BOOKINGS_SUCCESS":
          state.bookings = action.payload.payload.appointments;
          state.totalPages = action.payload.payload.totalPages;

          break;

        default:
          // Handle default case if necessary
          break;
      }
    },
    FetchFailure: (state, action) => {
      state.errMsg = action.payload;
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { FetchFailure, FetchStart, FetchSuccess } = fetchSlice.actions;
export default fetchSlice.reducer;
