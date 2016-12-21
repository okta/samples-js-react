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

import React from 'react';
import { Link } from 'react-router';

function Scenarios() {
  return (
    <ul data-se="scenarios">
      <li>
        <Link to="authorization-code/login-redirect" data-se="auth-code-login-redirect">
          Authorization Code: Login with Okta
        </Link>
      </li>
      <li>
        <Link to="authorization-code/login-custom" data-se="auth-code-login-custom">
          Authorization Code: Login using a custom login form
        </Link>
      </li>
    </ul>
  );
}

export default Scenarios;
