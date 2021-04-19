import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';

import AuthenticatedRoutes from './authenticated';
import UnauthenticatedRoutes from './unauthenticated';
import { theme } from '../styles/theme';
import { verifyIfIsAuthenticated } from '../store/reducers/auth';

export default function Routes() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => ({
    loading: state.auth.loading,
  }));

  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  }));

  useEffect(() => {
    dispatch(verifyIfIsAuthenticated());
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (isAuthenticated) {
    return <AuthenticatedRoutes />;
  }

  return <UnauthenticatedRoutes />;
}
