import { useState, type FormEvent } from 'react';

export function usePilotForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function reset() {
    setSubmitted(false);
  }

  return { submitted, submit, reset };
}
