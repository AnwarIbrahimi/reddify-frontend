import React, { useEffect, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../../firebase";
import { useNavigate } from 'react-router-dom';

interface SigninProps {
}

const SigninG: React.FC<SigninProps> = () => {
    const [uid, setUid] = useState<string>('');
    const navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setUid(data.user.uid);
            localStorage.setItem("uid", data.user.uid);
            navigate("/"); // Redirect to the profile page
        });
    };

    useEffect(() => {
        setUid(localStorage.getItem('uid') || '');
        if (uid) {
            navigate("/"); // Redirect to the profile page if the user is already signed in
        }
    }, [uid, navigate]);

    return (
        <div className="button-container">
            <button className="button" onClick={handleClick}>Sign in with Google</button>
        </div>
    );
};

export default SigninG;