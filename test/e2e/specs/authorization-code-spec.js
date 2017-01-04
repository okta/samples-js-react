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

'use strict';

const OverviewPage = require('../page-objects/overview-page');
const LoginRedirectPage = require('../page-objects/authorization-code/login-redirect-page');
const LoginCustomPage = require('../page-objects/authorization-code/login-custom-page');
const AppPage = require('../page-objects/authorization-code/app-page');

describe('Authorization Code Flows', () => {
  const overview = new OverviewPage();
  const loginRedirect = new LoginRedirectPage();
  const loginCustom = new LoginCustomPage();
  const app = new AppPage();

  beforeEach(() => {
    browser.driver.get('about:blank');
    browser.ignoreSynchronization = true;
    return overview.load();
  });

  afterEach(() => {
    app.logout();
    return overview.waitForPageLoad();
  });

  it('can login with Okta as the IDP', () => {
    overview.chooseAuthCodeLoginRedirect();
    loginRedirect.login('george', 'Asdf1234');
    app.waitForPageLoad();
    expect(app.getEmail()).toBe('george@acme.com');
  });

  it('can login with a custom login form', () => {
    overview.chooseAuthCodeLoginCustom();
    loginCustom.login('john', 'Asdf1234');
    app.waitForPageLoad();
    expect(app.getEmail()).toBe('john@acme.com');
  });
});

