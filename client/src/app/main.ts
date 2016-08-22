import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';

import { AppModule } from './app-module';

declare let module:any;
if (module.hot) {
  module.hot.accept();
}
browserDynamicPlatform().bootstrapModule(AppModule);