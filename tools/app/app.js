/*!
 * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* eslint no-console:0 */
import 'semantic-ui-css/semantic.min';
import renderProfile from './profile';
import renderLoginRedirectOkta from './login-redirect';
import renderLoginCustom from './login-custom';

export function bootstrap(config) {
  const path = window.location.pathname;

  // DO NOT COPY TO NEW SAMPLE -------------------------------------------------
  // Modal that describes how to build a new sample - you should not copy this
  // section to the new sample.
  /* global jQuery */
  if (path === '/') {
    const gettingStartedEl = jQuery(`
      <div class="ui inverted yellow segment" id="getting-started">
        <div class="ui red ribbon label">Getting Started</div>
        <h3>Building your first frontend sample? <a href="#">Read this.</a></h3>
      </div>
    `);
    gettingStartedEl.find('a').click(() => {
      jQuery('.ui.modal')
        .modal({ duration: 200 })
        .modal('show');
    });
    jQuery('#doc').prepend(gettingStartedEl);
  }
  // ---------------------------------------------------------------------------

  switch (path) {
    case '/authorization-code/profile':
      renderProfile(config);
      break;
    case '/authorization-code/login-redirect':
      renderLoginRedirectOkta(config);
      break;
    case '/authorization-code/login-custom':
      renderLoginCustom(config);
      break;
    default:
      break;
  }
}

export default bootstrap;
