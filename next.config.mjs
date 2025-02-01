// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['res.cloudinary.com'],
//     },
//     async headers() {
//       return [
//         {
//           source: "/:path*",
//           headers: [
//             {
//               key: "Content-Security-Policy",
//               value: "default-src 'self'; img-src 'self' https://res.cloudinary.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:"
//             },
//             { key: "X-Frame-Options", value: "DENY" },
//             { key: "X-Content-Type-Options", value: "nosniff" },
//             { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
//             { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
//             { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" }
//           ]
//         }
//       ];
//     }
//   };

// export default nextConfig;

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // { key: "Content-Security-Policy", value: "REMOVE_THIS_TEMPORARILY" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" }
        ]
      }
    ];
  }
};

export default nextConfig;
