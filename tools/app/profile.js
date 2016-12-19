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

import OktaAuth from '@okta/okta-auth-js/jquery';
import template from './profile.hbs';

export default function render(config) {
  const auth = new OktaAuth({ url: config.oktaUrl });

  const container = document.querySelector(config.container);
  container.innerHTML = template({
    user: {
      email: config.user.email,
      iat: config.user.iat,
      exp: config.user.exp,
      iatFormatted: new Date(config.user.iat * 1000),
      expFormatted: new Date(config.user.exp * 1000),
    },
  });

  const link = document.getElementById('logout');
  link.addEventListener('click', () => {
    auth.session.close().then(() => {
      window.location = '/authorization-code/logout';
    });
  });
}
