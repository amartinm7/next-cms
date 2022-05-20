// module.exports = {
//   images: {
//     domains: ["image.tmdb.org", "fonts.googleapis.com"],
//   },
// };
//

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  images: {
    domains: ["image.tmdb.org", "fonts.googleapis.com", "th.bing.com"],
  },
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: false,
  // },
};

module.exports = nextConfig;
