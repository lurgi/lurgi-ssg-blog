/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";

const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default withTM(nextConfig);
