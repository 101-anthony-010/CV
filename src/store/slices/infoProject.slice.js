import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
  isShowProject: false,
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addDataSubmit: (state, action) => {
      const newProject = action.payload
      state.isShowProject = !state.isShowProject
      state.project = newProject
    },
    changeIsShowProject: (state) => {
      state.isShowProject = !state.isShowProject
    }
  }
})
export const {
  addDataSubmit,
  changeIsShowProject
} = projectSlice.actions

export default projectSlice.reducer