import { CircularProgress, Stack } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

function PrivateRoute({ children,...rest }) {
    const {user,isLoading} = useFirebase()
    let location = useLocation();
    if (isLoading) { return <Stack sx={{py:5}} alignItems="center">
    <CircularProgress />
    </Stack> }
    if (!user.email) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }


export default  PrivateRoute