// polyfill TextEncoder for IE Edge
import { TextEncoder } from 'text-encoding';

/* global window */
if (typeof window.TextEncoder === 'undefined') {
  window.TextEncoder = TextEncoder;
}
