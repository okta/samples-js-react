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

/* global ENVIRONMENT, FRAMEWORK */
import hljs from 'highlight.js';

function addClass(id, className) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add(className);
  }
}

function removeClass(id, className) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove(className);
  }
}

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = html;
  }
}

// Initialize the non-sample JS code - you should not need to change this
export function initDoc() {
  const path = window.location.pathname;

  // Add syntax highlighting to code examples in documentation
  hljs.initHighlightingOnLoad();

  // Highlight the active menu item and section
  const parts = path.split('/');
  if (parts.length === 3) {
    addClass(`section-${parts[1]}`, 'active');
    addClass(`item-${parts[2]}`, 'active');
    addClass('doc', 'explain');
    document.getElementById('default-app-text').remove();
  } else {
    addClass('item-overview', 'active');
  }

  // Remove loading spinner from language/framework table
  removeClass('code-types', 'loading');

  // Add frontend info - these variables are defined in webpack.config.js
  // through the define plugin.
  if (FRAMEWORK) {
    setHtml('frontend-framework', FRAMEWORK);
    setHtml('frontend-environment', ENVIRONMENT);
  } else {
    setHtml('frontend-framework', ENVIRONMENT);
    document.getElementById('frontend-environment').remove();
  }
}

export default initDoc;
