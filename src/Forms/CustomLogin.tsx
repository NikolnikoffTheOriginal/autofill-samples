import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast } from '../utils/toasts';
import "react-toastify/dist/ReactToastify.css";

export const CustomLogin = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const companyID = useRef<HTMLInputElement>(null);

  return (
    <div className='ml-6'>
      <button
        className="btn btn-outline"
        type="button"
        onClick={() => {
          email.current!.value = 'naruto.uzumaki@gmail.com';
          password.current!.value = '12345';
          companyID.current!.value = '9871234123';
        }}
      >
        FIll in (Naruto)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'brucewayne33112@gmail.com';
          password.current!.value = 'alfredthebutler123';
          companyID.current!.value = '111111231111';
        }}
      >
        FIll in (Batman)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'dragonBorn33112@gmail.com';
          password.current!.value = 'afterdarknessAlwaysComesLight_1';
          companyID.current!.value = '09998881231';
        }}
      >
        FIll in (Dragonborn)
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = 'error@gmail.com';
          password.current!.value = 'password123';
          companyID.current!.value = '09998881231';
        }}
      >
        Failed login
      </button>
      <button
        className="btn btn-outline ml-3"
        type="button"
        onClick={() => {
          email.current!.value = '';
          password.current!.value = '';
          companyID.current!.value = '';
        }}
      >
        Clear
      </button>
      <form className="flex flex-col items-start mt-3">
        <h1 className="text-4xl mb-3">Login</h1>
        <label htmlFor='email'>
          <input
            id='email'
            ref={email}
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Email"
          />
        </label>
        <label htmlFor='loginPassword'>
          <input
            id='loginPassword'
            ref={password}
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </label>
        <label htmlFor='companyID'>
          <input
            id='companyID'
            ref={companyID}
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Company ID"
          />
        </label>
        <button
          className="btn btn-outline mt-3"
          type="button"
          onClick={(e) => {
            if (email.current!.value === 'error@gmail.com') {
              errorToast();
              e.preventDefault();
              return;
            }
            successToast();
          }}
        >Sign In</button>
        <ToastContainer />
      </form>
    </div>
  );
};
