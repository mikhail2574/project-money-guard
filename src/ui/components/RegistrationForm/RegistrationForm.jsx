import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/registration/operation';

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          username
          <input {...register('username')} />
        </label>
        <label>
          email
          <input {...register('email')} />
        </label>
        <label>
          password
          <input {...register('password')} />
        </label>
        {/* <label>
          confirm password
          <input {...register('confirmPass')} />
        </label> */}
        <button type="submit" value="Create account">
          Submit
        </button>
      </form>
    </>
  );
};

// Rosie Simpson
// Rosie1@mqw.ua
