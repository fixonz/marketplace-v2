// File: /api/preview.js

const setCookieSameSite = (res, value) => {
  const cookies = res.getHeader('Set-Cookie');
  res.setHeader('Set-Cookie', cookies?.map((cookie) => cookie.replace("SameSite=Lax", `SameSite=${value}`)));
};

export const preview = async (req, res) => {
  // Enable preview mode
  res.setPreviewData({});
  // Set SameSite attribute to None
  setCookieSameSite(res, "None");
  // Redirect or respond as needed
  res.redirect('/');
};
