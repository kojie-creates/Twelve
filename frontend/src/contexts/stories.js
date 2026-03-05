import { createStore, createHook } from "react-sweet-state";
import api from "../utils/api";

// define initialState
export const initialState = {
  data: null,
  loading: false,
  error: null,
};

// define actions that mutate state
export const actions = {
  fetch:
    () =>
      async ({ setState, getState }) => {
        if (getState().loading) return;
        setState({ loading: true });
        try {
          const stories = await api.get("/stories");
          setState({ data: stories.data, loading: false });
        } catch (error) {
          setState({ error, loading: false });
        }
      },
  addStory:
    (story) =>
      async ({ setState, getState }) => {
        if (getState().loading) return;
        setState({ loading: true });
        try {
          const res = await api.post("/stories", story);
          const currentData = getState().data || [];
          setState({ data: [...currentData, res.data], loading: false });
        } catch (error) {
          setState({ error, loading: false });
        }
      },
  updateStory:
    (story) =>
      async ({ setState, getState }) => {
        if (getState().loading) return;
        setState({ loading: true });
        try {
          await api.put(`/stories/${story._id}`, story);
          const currentData = getState().data || [];
          const updated = currentData.map((s) => (s._id === story._id ? { ...s, ...story } : s));
          setState({ data: updated, loading: false });
        } catch (error) {
          setState({ error, loading: false });
        }
      },
  removeStory:
    (story) =>
      async ({ setState, getState }) => {
        if (getState().loading) return;
        setState({ loading: true });
        try {
          await api.delete(`/stories/${story._id}`);
          const currentData = getState().data || [];
          setState({ data: currentData.filter((s) => s._id !== story._id), loading: false });
        } catch (error) {
          setState({ error, loading: false });
        }
      },
};

// create Store with initial state,
// actions, with optional name for debug
export const Store = createStore({
  initialState,
  actions,
  name: "stories",
});

export const useStories = createHook(Store);
