const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
    unoptimized: true,
  },
  output: 'export',
  experimental: {
    missingSuspenseWithCSRBailout: false, // Temporary fix for SSR issues
  },
};
