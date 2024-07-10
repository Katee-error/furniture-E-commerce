import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

export function useAuth () {
    const {email, token, id} = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    };
}