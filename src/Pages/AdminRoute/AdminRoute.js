import { CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useFirebase()
    let location = useLocation();
    // if (isLoading) {
    //     return <Stack sx={{ py: 5 }} alignItems="center">
    //         <CircularProgress />
    //     </Stack>
    // }
    if (!admin) {
        return <Stack sx={{ py: 5 }} alignItems="center">
            <CircularProgress />
        </Stack>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;