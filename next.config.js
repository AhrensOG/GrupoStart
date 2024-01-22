/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async redirects() {
    return [
      {
        source: '/empresas/exclusive/DraAvalos',
        destination: '/empresas/exclusive/DraViviana_Meza',
        permanent: true,
      },
      // {
      //   source: '/empresas/Formulario',
      //   destination: '/ruta-de-tu-formulario',
      //   permanent: true,
      // },
    ]
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //     dns: false,
  //     net: false,
  //     tls: false,
  //     child_process: false,
  //     readline: false,
  //     stream: false,
  //     crypto: false,
  //     os: false,
  //     path: false,
  //     vm: false,
  //     url: false,
  //     };
  //   }
  //   return config;
  // },
};

