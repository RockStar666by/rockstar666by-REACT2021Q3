import React, { useEffect, useState } from 'react';
import s from './Form.module.css';

function Form({ setFormValues }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('---');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (lastName === '') {
      setErrors((state) => ({ ...state, lastName }));
    }
    if (gender === '') {
      setErrors((state) => ({ ...state, gender }));
    }
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }));
    }
    if (country === '---') {
      setErrors((state) => ({ ...state, country }));
    }
  }, [firstName, lastName, gender, agree, birthDate, country]);

  const clearState = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setBirthDate('');
    setCountry('---');
    setAgree(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state) => [...state, { firstName, lastName, gender, birthDate, country }]);
      // eslint-disable-next-line no-alert
      alert('Данные успешно сохранены!!!');
      clearState();
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.title}>Welcome</div>
      <div className={s.subtitle}>Let&apos;s create your account!</div>
      <label className={s.placeholder} htmlFor="firstName">
        Name: {errors?.firstName === '' && <span className={s.errors}>* required</span>}
        <input
          className={s.input}
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>

      <label className={s.placeholder} htmlFor="lastName">
        Surname: {errors?.lastName === '' && <span className={s.errors}>* required</span>}
        <input
          className={s.input}
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label className={s.placeholder} htmlFor="gender">
        Gender: {errors?.gender === '' && <span className={s.errors}>* required</span>}
        <div className={s.input}>
          <label className={s.radio} htmlFor="gender">
            Male:
            <input type="radio" name="gender" value="Male" onChange={(event) => setGender(event.target.value)} />
          </label>

          <label className={s.radio} htmlFor="gender">
            Female:
            <input type="radio" name="gender" value="Female" onChange={(event) => setGender(event.target.value)} />
          </label>

          <label className={s.radio} htmlFor="gender">
            Apache Helicopter:
            <input
              type="radio"
              name="gender"
              value="Apache Helicopter"
              onChange={(event) => setGender(event.target.value)}
            />
          </label>
        </div>
      </label>
      <label className={s.placeholder} htmlFor="birthDate">
        Birthday: {errors?.birthDate === '' && <span className={s.errors}>* required</span>}
        <input
          className={s.input}
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(event) => setBirthDate(event.target.value)}
        />
      </label>
      <label className={s.placeholder} htmlFor="country">
        Country: {errors?.country === '---' && <span className={s.errors}>* required</span>}
        <select
          className={s.input}
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          onBlur={(event) => setCountry(event.target.value)}
        >
          <option>---</option>
          <option>Belarus</option>
          <option>Russia</option>
          <option>United States of America</option>
          <option>Barbados</option>
        </select>
      </label>
      <label className={s.placeholder} htmlFor="agree">
        <p>
          <input type="checkbox" name="agree" checked={agree} onChange={() => setAgree((prev) => !prev)} /> I Agree to
          Privacy Policy {errors?.agree !== undefined && <span className={s.errors}>* required</span>}
        </p>
      </label>
      <div>
        <input className={s.submit} type="submit" value="Send" />
      </div>
    </form>
  );
}

export default Form;
