import React, { useState } from 'react';

function EmailInput() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('submitting email');
  };
  return (
    <form onSubmit={handleSubmit} className='submit-email-form'>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
      />
    </form>
  );
}

export default EmailInput;
