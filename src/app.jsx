import React from 'react';
import { AuthGoogleProvider } from './context/authGoogle'
import { RoutesApp } from './routes/routes'

export function AppRender() {
    return (
        <AuthGoogleProvider>
            <RoutesApp />
        </AuthGoogleProvider>
    );
}
