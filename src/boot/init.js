export default ({ app, router }) => {
    // Set i18n instance on app
    app.config.devtools = process.env.NODE_ENV === 'development';
  };