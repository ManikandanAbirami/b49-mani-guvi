import React, { useState, useRef } from 'react'
import { useEffect } from 'react';

function PasswordConfirmation() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [count, setCount] = useState(0);

    const [passwordMatchRef, setPasswordMatchRef] = useState(false);

    // const passwordMatchRef = useRef(false);

    const handlePasswordChange = event => {
        setCount(count+1);
        const newPassword = event.target.value;
        setPassword(newPassword);

        //Update password match status using Ref
        // passwordMatchRef.current = newPassword === confirmPassword;
        setPasswordMatchRef(newPassword === confirmPassword);
    }

    const handleConfirmPasswordChange = event => {
        setCount(count+1);
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);

        //Update password match status using Ref
        // passwordMatchRef.current = password === newConfirmPassword;
        setPasswordMatchRef(password === newConfirmPassword);
    }

    useEffect(() => {
        console.log(count);
    })
  return (
    <div>
        <h1>Password Confirmation</h1>
        <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange}></input>
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
        </div>
        <p>{passwordMatchRef ? 'Password Match' : 'Passwords do not Match'}</p>
        <p>{count}</p>
    </div>
  )
}

export default PasswordConfirmation