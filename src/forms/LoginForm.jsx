import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { useForm } from "react-hook-form";
import "./loginform.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { ErrorMessage } from "@hookform/error-message";

import { Dropdown } from "primereact/dropdown";

const interests = [
  "Competitive VGC",
  "Pokemon Scholar",
  "Pokemon Researcher",
  "Pokemon Casual",
  "What are Pokemon?",
];

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedInterests, setSelectedInterests] = useState({ ...interests });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ CriteriaMode: "all" });

  const onSubmit = (data) => console.log(data);

  //   console.log(watch("username"));

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="form-container">
      <div className="input-container">
        <div className="title-container">[Title Here]</div>
        <form
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          className="input-form"
        >
          <FloatLabel>
            <InputText
              {...register("username", {
                required: "You must enter a Username",
                minLength: {
                  value: 6,
                  message: "Username must be longer than 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username is too long. Dial it down buddy",
                },
              })}
              id="username"
              name="username"
              className="input-fields"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => <small>{message}</small>}
            />
            <label htmlFor="username">Username:</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              {...register("email", {
                required: "Must Enter Valid Email Address",
              })}
              id="email"
              type="email"
              className="input-fields"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email Address:</label>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <small>{message}</small>}
            />
          </FloatLabel>
          <FloatLabel>
            <InputText
              {...register("password", {
                required:
                  "No password? You just let everyone in, whore. - my mom",
                minLength: {
                  value: 6,
                  message: "Less than 6 chracters? Put some effort into it.",
                },
                maxLength: {
                  value: 20,
                  message: "I'm sure no one will ever guess this one!",
                },
              })}
              id="password"
              className="input-fields"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <small>{message}</small>}
            />
          </FloatLabel>
          <div>
            <label htmlFor="trainertype">What type of Trainer are you?</label>
            <div className="trainertype-container">
              <Dropdown
                id="trainertype"
                {...register("trainertype", {
                  required: "Who are you? Please Pick one.",
                })}
                value={selectedInterests}
                onChange={(e) => setSelectedInterests(e.value)}
                options={interests}
                optionLabel="name"
                placeholder="Select One"
                className="w-full md:w-14rem"
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="trainertype"
              render={({ message }) => <small>{message}</small>}
            />
          </div>
          <input className="submit-button" type="submit" />
        </form>
      </div>
    </div>
  );
}
