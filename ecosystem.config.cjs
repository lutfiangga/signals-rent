module.exports = {
  /**
   * PM2 Process Management for Signals
   *
   * This configuration manages the foundational services for the Signals framework:
   * 1. Web Server (using Laravel Octane or Serve)
   * 2. Queue Worker (using Laravel Horizon)
   * 3. WebSocket Server (using Laravel Reverb)
   */
  apps: [
    {
      name: 'signals-web',
      script: 'artisan',
      args: 'octane:start --port=8000', // Defaulting to Octane for high performance
      interpreter: 'php',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        APP_ENV: 'local',
      },
    },
    {
      name: 'signals-worker',
      script: 'artisan',
      args: 'horizon', // Horizon is the preferred way to manage queues
      interpreter: 'php',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
    {
      name: 'signals-reverb',
      script: 'artisan',
      args: 'reverb:start',
      interpreter: 'php',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
    /**
     * Optional: Vite Dev Server
     * Uncomment this if you want PM2 to manage Vite development server.
     * Note: In production, you should run 'npm run build' instead.
     */
    /*
    {
      name: 'signals-vite',
      script: 'npm',
      args: 'run dev',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
    },
    */
  ],
};
