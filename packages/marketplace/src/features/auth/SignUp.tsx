import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, WatchForm } from '@udp/components';
import { validations as v } from '@udp/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreatePasswordSchema = v.createPassword();
const schema = CreatePasswordSchema.extend({
  email: v.email(),
  name: v.name(),
});
type FormValues = v.infer<typeof schema>;

const SignUp: React.FunctionComponent = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (variables: FormValues) => console.log(variables);

  return (
    <div className="sign-up-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label>Email</label>
            <TextField
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              control={control}
            />
          </div>
          <div>
            <label>Name</label>
            <TextField
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              control={control}
            />
          </div>
          <div>
            <label>Password</label>
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              control={control}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <TextField
              name="confirmPassword"
              type="password"
              placeholder="Repeat Password"
              autoComplete="new-password"
              control={control}
            />
          </div>
          <div className="text-center">
            <button className="my-2" color="primary" type="submit">
              Sign up
            </button>
          </div>
        </div>
        <hr />
        <WatchForm control={control} />
      </form>
    </div>
  );
};

export default SignUp;
