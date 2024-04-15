import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// Забрати весь список контактів
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      toast.error("Sorry, something ain`t right");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Створити контакт
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      toast.success("This contact has been added!", {
        duration: 4000,
        position: "top-center",
      });
      return response.data;
    } catch (error) {
      toast.error("Sorry, something ain`t right");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалення контакту
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success("This contact has been deleted!", {
        duration: 4000,
        position: "top-center",
      });
      return response.data;
    } catch (error) {
      toast.error("Sorry, something ain`t right");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Оновлення контакту
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      toast.error("Sorry, something ain`t right");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
