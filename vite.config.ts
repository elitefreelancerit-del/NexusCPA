import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          dashboard: path.resolve(__dirname, 'dashboard.html'),
          offers: path.resolve(__dirname, 'offers.html'),
          offerDetails: path.resolve(__dirname, 'offer-details.html'),
          statistics: path.resolve(__dirname, 'statistics.html'),
          earnings: path.resolve(__dirname, 'earnings.html'),
          payments: path.resolve(__dirname, 'payments.html'),
          campaigns: path.resolve(__dirname, 'campaigns.html'),
          referrals: path.resolve(__dirname, 'referrals.html'),
          support: path.resolve(__dirname, 'support.html'),
          profile: path.resolve(__dirname, 'profile.html'),
          settings: path.resolve(__dirname, 'settings.html'),
          admin: path.resolve(__dirname, 'admin.html'),
          login: path.resolve(__dirname, 'login.html'),
          register: path.resolve(__dirname, 'register.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
