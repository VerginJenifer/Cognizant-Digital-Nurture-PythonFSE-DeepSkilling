import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourses } from "./api/courseApi";


export const fetchAllCourses = createAsyncThunk(
    "courses/fetchAll",
    async () => {
        return await getAllCourses();
    }
);


const coursesSlice = createSlice({
    name: "courses",

    initialState: {
        courses: [],
        loading: false,
        error: ""
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchAllCourses.pending, (state) => {
            state.loading = true;
            state.error = "";
        })

        .addCase(fetchAllCourses.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        })

        .addCase(fetchAllCourses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
}
});

export const selectCourses = (state) => state.courses.courses;

export const selectCoursesLoading = (state) => state.courses.loading;

export default coursesSlice.reducer;
