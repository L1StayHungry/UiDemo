export * from './component';

import components from './component';
const install = app => {
  components.forEach(component => {
    app.use(component);
  });
};
export default {
  install
};
