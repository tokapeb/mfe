import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount fn to start the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in develompment and isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dashboard-dev-root');
  if (el) {
    mount(el);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
// This is the bootstrap file for the marketing app
