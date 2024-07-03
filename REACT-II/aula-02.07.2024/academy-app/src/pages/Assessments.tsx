import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Assessments() {
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");

        if(!authToken) {
            navigate("/");
        }
    }, [navigate])

    return (
        <h1>Avaliações</h1>
    )
}