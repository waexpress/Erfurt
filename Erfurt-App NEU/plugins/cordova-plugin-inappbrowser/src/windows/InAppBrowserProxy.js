<<<<<<< HEAD
﻿/*
=======
/*
>>>>>>> origin/master
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/* jslint sloppy:true */
/* global Windows:true, setImmediate */
<<<<<<< HEAD

var cordova = require('cordova'),
    urlutil = require('cordova/urlutil');
=======
/* eslint standard/no-callback-literal : 0 */

var cordova = require('cordova');
var urlutil = require('cordova/urlutil');
>>>>>>> origin/master

var browserWrap,
    popup,
    navigationButtonsDiv,
    navigationButtonsDivInner,
    backButton,
    forwardButton,
    closeButton,
    bodyOverflowStyle,
<<<<<<< HEAD
    navigationEventsCallback;
=======
    navigationEventsCallback,
    hardwareBackCallback;
>>>>>>> origin/master

// x-ms-webview is available starting from Windows 8.1 (platformId is 'windows')
// http://msdn.microsoft.com/en-us/library/windows/apps/dn301831.aspx
var isWebViewAvailable = cordova.platformId === 'windows';

<<<<<<< HEAD
function attachNavigationEvents(element, callback) {
    if (isWebViewAvailable) {
        element.addEventListener("MSWebViewNavigationStarting", function (e) {
            callback({ type: "loadstart", url: e.uri}, {keepCallback: true} );
        });

        element.addEventListener("MSWebViewNavigationCompleted", function (e) {
            if (e.isSuccess) {
                callback({ type: "loadstop", url: e.uri }, { keepCallback: true });
            } else {
                callback({ type: "loaderror", url: e.uri, code: e.webErrorStatus, message: "Navigation failed with error code " + e.webErrorStatus}, { keepCallback: true });
            }
        });

        element.addEventListener("MSWebViewUnviewableContentIdentified", function (e) {
            // WebView found the content to be not HTML.
            // http://msdn.microsoft.com/en-us/library/windows/apps/dn609716.aspx
            callback({ type: "loaderror", url: e.uri, code: e.webErrorStatus, message: "Navigation failed with error code " + e.webErrorStatus}, { keepCallback: true });
        });

        element.addEventListener("MSWebViewContentLoading", function (e) {
            if (navigationButtonsDiv && popup) {
                if (popup.canGoBack) {
                    backButton.removeAttribute("disabled");
                } else {
                    backButton.setAttribute("disabled", "true");
                }

                if (popup.canGoForward) {
                    forwardButton.removeAttribute("disabled");
                } else {
                    forwardButton.setAttribute("disabled", "true");
=======
function attachNavigationEvents (element, callback) {
    if (isWebViewAvailable) {
        element.addEventListener('MSWebViewNavigationStarting', function (e) {
            callback({ type: 'loadstart', url: e.uri }, {keepCallback: true});
        });

        element.addEventListener('MSWebViewNavigationCompleted', function (e) {
            if (e.isSuccess) {
                callback({ type: 'loadstop', url: e.uri }, { keepCallback: true });
            } else {
                callback({ type: 'loaderror', url: e.uri, code: e.webErrorStatus, message: 'Navigation failed with error code ' + e.webErrorStatus }, { keepCallback: true });
            }
        });

        element.addEventListener('MSWebViewUnviewableContentIdentified', function (e) {
            // WebView found the content to be not HTML.
            // http://msdn.microsoft.com/en-us/library/windows/apps/dn609716.aspx
            callback({ type: 'loaderror', url: e.uri, code: e.webErrorStatus, message: 'Navigation failed with error code ' + e.webErrorStatus }, { keepCallback: true });
        });

        element.addEventListener('MSWebViewContentLoading', function (e) {
            if (navigationButtonsDiv && popup) {
                if (popup.canGoBack) {
                    backButton.removeAttribute('disabled');
                } else {
                    backButton.setAttribute('disabled', 'true');
                }

                if (popup.canGoForward) {
                    forwardButton.removeAttribute('disabled');
                } else {
                    forwardButton.setAttribute('disabled', 'true');
>>>>>>> origin/master
                }
            }
        });
    } else {
        var onError = function () {
<<<<<<< HEAD
            callback({ type: "loaderror", url: this.contentWindow.location}, {keepCallback: true});
        };

        element.addEventListener("unload", function () {
            callback({ type: "loadstart", url: this.contentWindow.location}, {keepCallback: true});
        });

        element.addEventListener("load", function () {
            callback({ type: "loadstop", url: this.contentWindow.location}, {keepCallback: true});
        });

        element.addEventListener("error", onError);
        element.addEventListener("abort", onError);
=======
            callback({ type: 'loaderror', url: this.contentWindow.location }, {keepCallback: true});
        };

        element.addEventListener('unload', function () {
            callback({ type: 'loadstart', url: this.contentWindow.location }, {keepCallback: true});
        });

        element.addEventListener('load', function () {
            callback({ type: 'loadstop', url: this.contentWindow.location }, {keepCallback: true});
        });

        element.addEventListener('error', onError);
        element.addEventListener('abort', onError);
>>>>>>> origin/master
    }
}

var IAB = {
    close: function (win, lose) {
        setImmediate(function () {
            if (browserWrap) {
                if (navigationEventsCallback) {
<<<<<<< HEAD
                    navigationEventsCallback({ type: "exit" });
=======
                    navigationEventsCallback({ type: 'exit' });
>>>>>>> origin/master
                }

                browserWrap.parentNode.removeChild(browserWrap);
                // Reset body overflow style to initial value
                document.body.style.msOverflowStyle = bodyOverflowStyle;
                browserWrap = null;
                popup = null;
<<<<<<< HEAD
=======

                document.removeEventListener('backbutton', hardwareBackCallback, false);
>>>>>>> origin/master
            }
        });
    },
    show: function (win, lose) {
        setImmediate(function () {
            if (browserWrap) {
<<<<<<< HEAD
                browserWrap.style.display = "block";
            }
        });
    },
    open: function (win, lose, args) {
        // make function async so that we can add navigation events handlers before view is loaded and navigation occured
        setImmediate(function () {
            var strUrl = args[0],
                target = args[1],
                features = args[2],
                url;

            navigationEventsCallback = win;

            if (target === "_system") {
                url = new Windows.Foundation.Uri(strUrl);
                Windows.System.Launcher.launchUriAsync(url);
            } else if (target === "_self" || !target) {
=======
                browserWrap.style.display = 'block';
            }
        });
    },
    hide: function (win, lose) {
        if (browserWrap) {
            browserWrap.style.display = 'none';
        }
    },
    open: function (win, lose, args) {
        // make function async so that we can add navigation events handlers before view is loaded and navigation occured
        setImmediate(function () {
            var strUrl = args[0];
            var target = args[1];
            var features = args[2];
            var url;

            navigationEventsCallback = win;

            if (target === '_system') {
                url = new Windows.Foundation.Uri(strUrl);
                Windows.System.Launcher.launchUriAsync(url);
            } else if (target === '_self' || !target) {
>>>>>>> origin/master
                window.location = strUrl;
            } else {
                // "_blank" or anything else
                if (!browserWrap) {
                    var browserWrapStyle = document.createElement('link');
<<<<<<< HEAD
                    browserWrapStyle.rel = "stylesheet";
                    browserWrapStyle.type = "text/css";
                    browserWrapStyle.href = urlutil.makeAbsolute("/www/css/inappbrowser.css");

                    document.head.appendChild(browserWrapStyle);

                    browserWrap = document.createElement("div");
                    browserWrap.className = "inAppBrowserWrap";

                    if (features.indexOf("fullscreen=yes") > -1) {
                        browserWrap.classList.add("inAppBrowserWrapFullscreen");
=======
                    browserWrapStyle.rel = 'stylesheet';
                    browserWrapStyle.type = 'text/css';
                    browserWrapStyle.href = urlutil.makeAbsolute('/www/css/inappbrowser.css');

                    document.head.appendChild(browserWrapStyle);

                    browserWrap = document.createElement('div');
                    browserWrap.className = 'inAppBrowserWrap';

                    if (features.indexOf('fullscreen=yes') > -1) {
                        browserWrap.classList.add('inAppBrowserWrapFullscreen');
>>>>>>> origin/master
                    }

                    // Save body overflow style to be able to reset it back later
                    bodyOverflowStyle = document.body.style.msOverflowStyle;

                    browserWrap.onclick = function () {
                        setTimeout(function () {
                            IAB.close(navigationEventsCallback);
                        }, 0);
                    };

                    document.body.appendChild(browserWrap);
                    // Hide scrollbars for the whole body while inappbrowser's window is open
<<<<<<< HEAD
                    document.body.style.msOverflowStyle = "none";
                }

                if (features.indexOf("hidden=yes") !== -1) {
                    browserWrap.style.display = "none";
                }

                popup = document.createElement(isWebViewAvailable ? "x-ms-webview" : "iframe");
                if (popup instanceof HTMLIFrameElement) {
                    // For iframe we need to override bacground color of parent element here
                    // otherwise pages without background color set will have transparent background
                    popup.style.backgroundColor = "white";
                }
                popup.style.borderWidth = "0px";
                popup.style.width = "100%";

                browserWrap.appendChild(popup);

                if (features.indexOf("location=yes") !== -1 || features.indexOf("location") === -1) {
                    popup.style.height = "calc(100% - 70px)";

                    navigationButtonsDiv = document.createElement("div");
                    navigationButtonsDiv.className = "inappbrowser-app-bar";
=======
                    document.body.style.msOverflowStyle = 'none';
                }

                if (features.indexOf('hidden=yes') !== -1) {
                    browserWrap.style.display = 'none';
                }

                popup = document.createElement(isWebViewAvailable ? 'x-ms-webview' : 'iframe');
                if (popup instanceof HTMLIFrameElement) { // eslint-disable-line no-undef
                    // For iframe we need to override bacground color of parent element here
                    // otherwise pages without background color set will have transparent background
                    popup.style.backgroundColor = 'white';
                }
                popup.style.borderWidth = '0px';
                popup.style.width = '100%';
                popup.style.marginBottom = '-5px';

                browserWrap.appendChild(popup);

                var closeHandler = function (e) {
                    setTimeout(function () {
                        IAB.close(navigationEventsCallback);
                    }, 0);
                };

                if (features.indexOf('hardwareback=yes') > -1 || features.indexOf('hardwareback') === -1) {
                    hardwareBackCallback = function () {
                        if (browserWrap.style.display === 'none') {
                            // NOTE: backbutton handlers have to throw an exception in order to prevent
                            // returning 'true' inside cordova-js, which would mean that the event is handled by user.
                            // Throwing an exception means that the default/system navigation behavior will take place,
                            // which is to exit the app if the navigation stack is empty.
                            throw 'Exit the app'; // eslint-disable-line no-throw-literal
                        }

                        if (popup.canGoBack) {
                            popup.goBack();
                        } else {
                            closeHandler();
                        }
                    };
                } else if (features.indexOf('hardwareback=no') > -1) {
                    hardwareBackCallback = function () {
                        if (browserWrap.style.display === 'none') {
                            // See comment above
                            throw 'Exit the app'; // eslint-disable-line no-throw-literal
                        }

                        closeHandler();
                    };
                }

                document.addEventListener('backbutton', hardwareBackCallback, false);

                if (features.indexOf('location=yes') !== -1 || features.indexOf('location') === -1) {
                    popup.style.height = 'calc(100% - 70px)';

                    navigationButtonsDiv = document.createElement('div');
                    navigationButtonsDiv.className = 'inappbrowser-app-bar';
>>>>>>> origin/master
                    navigationButtonsDiv.onclick = function (e) {
                        e.cancelBubble = true;
                    };

<<<<<<< HEAD
                    navigationButtonsDivInner = document.createElement("div");
                    navigationButtonsDivInner.className = "inappbrowser-app-bar-inner";
=======
                    navigationButtonsDivInner = document.createElement('div');
                    navigationButtonsDivInner.className = 'inappbrowser-app-bar-inner';
>>>>>>> origin/master
                    navigationButtonsDivInner.onclick = function (e) {
                        e.cancelBubble = true;
                    };

<<<<<<< HEAD
                    backButton = document.createElement("div");
                    backButton.innerText = "back";
                    backButton.className = "app-bar-action action-back";
                    backButton.addEventListener("click", function (e) {
                        if (popup.canGoBack)
                            popup.goBack();
                    });

                    forwardButton = document.createElement("div");
                    forwardButton.innerText = "forward";
                    forwardButton.className = "app-bar-action action-forward";
                    forwardButton.addEventListener("click", function (e) {
                        if (popup.canGoForward)
                            popup.goForward();
                    });

                    closeButton = document.createElement("div");
                    closeButton.innerText = "close";
                    closeButton.className = "app-bar-action action-close";
                    closeButton.addEventListener("click", function (e) {
                        setTimeout(function () {
                            IAB.close(navigationEventsCallback);
                        }, 0);
                    });

                    if (!isWebViewAvailable) {
                        // iframe navigation is not yet supported
                        backButton.setAttribute("disabled", "true");
                        forwardButton.setAttribute("disabled", "true");
=======
                    backButton = document.createElement('div');
                    backButton.innerText = 'back';
                    backButton.className = 'app-bar-action action-back';
                    backButton.addEventListener('click', function (e) {
                        if (popup.canGoBack) { popup.goBack(); }
                    });

                    forwardButton = document.createElement('div');
                    forwardButton.innerText = 'forward';
                    forwardButton.className = 'app-bar-action action-forward';
                    forwardButton.addEventListener('click', function (e) {
                        if (popup.canGoForward) { popup.goForward(); }
                    });

                    closeButton = document.createElement('div');
                    closeButton.innerText = 'close';
                    closeButton.className = 'app-bar-action action-close';
                    closeButton.addEventListener('click', closeHandler);

                    if (!isWebViewAvailable) {
                        // iframe navigation is not yet supported
                        backButton.setAttribute('disabled', 'true');
                        forwardButton.setAttribute('disabled', 'true');
>>>>>>> origin/master
                    }

                    navigationButtonsDivInner.appendChild(backButton);
                    navigationButtonsDivInner.appendChild(forwardButton);
                    navigationButtonsDivInner.appendChild(closeButton);
                    navigationButtonsDiv.appendChild(navigationButtonsDivInner);

                    browserWrap.appendChild(navigationButtonsDiv);
                } else {
<<<<<<< HEAD
                    popup.style.height = "100%";
=======
                    popup.style.height = '100%';
>>>>>>> origin/master
                }

                // start listening for navigation events
                attachNavigationEvents(popup, navigationEventsCallback);

                if (isWebViewAvailable) {
<<<<<<< HEAD
                    strUrl = strUrl.replace("ms-appx://", "ms-appx-web://");
=======
                    strUrl = strUrl.replace('ms-appx://', 'ms-appx-web://');
>>>>>>> origin/master
                }
                popup.src = strUrl;
            }
        });
    },

    injectScriptCode: function (win, fail, args) {
        setImmediate(function () {
<<<<<<< HEAD
            var code = args[0],
                hasCallback = args[1];

            if (isWebViewAvailable && browserWrap && popup) {
                var op = popup.invokeScriptAsync("eval", code);
=======
            var code = args[0];
            var hasCallback = args[1];

            if (isWebViewAvailable && browserWrap && popup) {
                var op = popup.invokeScriptAsync('eval', code);
>>>>>>> origin/master
                op.oncomplete = function (e) {
                    if (hasCallback) {
                        // return null if event target is unavailable by some reason
                        var result = (e && e.target) ? [e.target.result] : [null];
                        win(result);
                    }
                };
                op.onerror = function () { };
                op.start();
            }
        });
    },

    injectScriptFile: function (win, fail, args) {
        setImmediate(function () {
<<<<<<< HEAD
            var filePath = args[0],
                hasCallback = args[1];

            if (!!filePath) {
=======
            var filePath = args[0];
            var hasCallback = args[1];

            if (filePath) {
>>>>>>> origin/master
                filePath = urlutil.makeAbsolute(filePath);
            }

            if (isWebViewAvailable && browserWrap && popup) {
<<<<<<< HEAD
                var uri = new Windows.Foundation.Uri(filePath);
                Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).done(function (file) {
                    Windows.Storage.FileIO.readTextAsync(file).done(function (code) {
                        var op = popup.invokeScriptAsync("eval", code);
                        op.oncomplete = function(e) {
=======
                // CB-12364 getFileFromApplicationUriAsync does not support ms-appx-web
                var uri = new Windows.Foundation.Uri(filePath.replace('ms-appx-web:', 'ms-appx:'));
                Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).done(function (file) {
                    Windows.Storage.FileIO.readTextAsync(file).done(function (code) {
                        var op = popup.invokeScriptAsync('eval', code);
                        op.oncomplete = function (e) {
>>>>>>> origin/master
                            if (hasCallback) {
                                var result = [e.target.result];
                                win(result);
                            }
                        };
                        op.onerror = function () { };
                        op.start();
                    });
                });
            }
        });
    },

    injectStyleCode: function (win, fail, args) {
        setImmediate(function () {
<<<<<<< HEAD
            var code = args[0],
                hasCallback = args[1];
=======
            var code = args[0];
            var hasCallback = args[1];
>>>>>>> origin/master

            if (isWebViewAvailable && browserWrap && popup) {
                injectCSS(popup, code, hasCallback && win);
            }
        });
    },

    injectStyleFile: function (win, fail, args) {
        setImmediate(function () {
<<<<<<< HEAD
            var filePath = args[0],
                hasCallback = args[1];
=======
            var filePath = args[0];
            var hasCallback = args[1];
>>>>>>> origin/master

            filePath = filePath && urlutil.makeAbsolute(filePath);

            if (isWebViewAvailable && browserWrap && popup) {
<<<<<<< HEAD
                var uri = new Windows.Foundation.Uri(filePath);
=======
                // CB-12364 getFileFromApplicationUriAsync does not support ms-appx-web
                var uri = new Windows.Foundation.Uri(filePath.replace('ms-appx-web:', 'ms-appx:'));
>>>>>>> origin/master
                Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).then(function (file) {
                    return Windows.Storage.FileIO.readTextAsync(file);
                }).done(function (code) {
                    injectCSS(popup, code, hasCallback && win);
                }, function () {
                    // no-op, just catch an error
                });
            }
        });
    }
};

function injectCSS (webView, cssCode, callback) {
    // This will automatically escape all thing that we need (quotes, slashes, etc.)
    var escapedCode = JSON.stringify(cssCode);
<<<<<<< HEAD
    var evalWrapper = "(function(d){var c=d.createElement('style');c.innerHTML=%s;d.head.appendChild(c);})(document)"
        .replace('%s', escapedCode);

    var op = webView.invokeScriptAsync("eval", evalWrapper);
    op.oncomplete = function() {
=======
    var evalWrapper = '(function(d){var c=d.createElement(\'style\');c.innerHTML=%s;d.head.appendChild(c);})(document)'
        .replace('%s', escapedCode);

    var op = webView.invokeScriptAsync('eval', evalWrapper);
    op.oncomplete = function () {
>>>>>>> origin/master
        if (callback) {
            callback([]);
        }
    };
    op.onerror = function () { };
    op.start();
}

module.exports = IAB;

<<<<<<< HEAD
require("cordova/exec/proxy").add("InAppBrowser", module.exports);
=======
require('cordova/exec/proxy').add('InAppBrowser', module.exports);
>>>>>>> origin/master
