import Button from './src/index.vue';

Button.install = app => {
  app.component(Button.name, Button);
  return app;
};

export default Button;
