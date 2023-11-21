// src/components/me/MeForm.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import GenderSelect from './GenderSelect'; // Assume this is a custom component for gender selection

interface MeFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  gender: string;
  email: string;
  phoneNumber: string;
  addressId: string;
  occupationId: string;
  bio: string;
  profilePictureUrl: string;
}

export const MeForm = () => {
  const [formData, setFormData] = useState<MeFormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    gender: '',
    email: '',
    phoneNumber: '',
    addressId: '',
    occupationId: '',
    bio: '',
    profilePictureUrl: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prevState => ({
      ...prevState,
      dateOfBirth: date
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement submission logic
    console.log(formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
        <DatePicker
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <GenderSelect
          value={formData.gender}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          label="Address ID"
          type="number"
          name="addressId"
          value={formData.addressId}
          onChange={handleChange}
        />
        <TextField
          label="Occupation ID"
          type="number"
          name="occupationId"
          value={formData.occupationId}
          onChange={handleChange}
        />
        <TextField
          label="Bio"
          name="bio"
          multiline
          value={formData.bio}
          onChange={handleChange}
        />
        <TextField
          label="Profile Picture URL"
          type="url"
          name="profilePictureUrl"
          value={formData.profilePictureUrl}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </LocalizationProvider>
  );
};

export default MeForm;
