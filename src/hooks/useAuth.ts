import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";

import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            showMessage({ title: "Login success", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "no data found", status: "error" });
          }
        })
        .catch(() => showMessage({ title: "can not login", status: "error" }))
        .finally(() => setLoading(false));
    },
    [navigate, showMessage, setLoginUser]
  );
  return { login, loading };
};
