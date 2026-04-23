import { LOCAL } from '../util/storage-wrapper.js';
import * as settings from '../util/settings.js';
import Contests from './cache/contests.js';
import { Contest, ContestsComplete } from './cache/contests-complete.js';
import Ratings from './cache/ratings.js';
import TopLevelCache from './cache/top-level-cache.js';
import predict, { Contestant, PredictResult } from './predict.js';
import PredictResponse from './predict-response.js';
import { Api } from './cf-api.js';
import compareVersions from '../util/version-compare.js';

// INLINE_POLYFILL_ON_CHROME_MARKER_START
(function(a,b){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],b);else if("undefined"!=typeof exports)b(module);else{var c={exports:{}};b(c),a.browser=c.exports}})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(!(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a),m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=globalThis.browser});

// webextension-polyfill v.0.12.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// INLINE_POLYFILL_ON_CHROME_MARKER_END

const DEBUG_FORCE_PREDICT = false;

const UNRATED_HINTS = ['unrated', 'fools', 'q#', 'kotlin', 'marathon', 'teams'];
const EDU_ROUND_RATED_THRESHOLD = 2100;

const API = new Api(fetchFromContentScript);
const CONTESTS = new Contests(API, LOCAL);
const RATINGS = new Ratings(API, LOCAL);
const CONTESTS_COMPLETE = new ContestsComplete(API, LOCAL);
const TOP_LEVEL_CACHE = new TopLevelCache();

/* ----------------------------------------------- */
/*   Message listener                              */
/* ----------------------------------------------- */

browser.runtime.onMessage.addListener((message, sender) => {
  let responsePromise;
  if (message.type === 'PREDICT') {
    console.info('Received message: %o', message);
    responsePromise = getDeltas(message.contestId);
  } else if (message.type === 'PING') {
    console.info('Received message: %o', message);
    responsePromise = Promise.all([maybeUpdateContestList(), maybeUpdateRatings()]);
  } else if (message.type === 'SET_ERROR_BADGE') {
    console.info('Received message: %o', message);
    setErrorBadge(sender);
    responsePromise = Promise.resolve();
  } else {
    return;
  }
  return responsePromise.catch((e) => {
    console.error(e);
    throw e;
  });
});

/* ----------------------------------------------- */
/*   Content script fetch                          */
/* ----------------------------------------------- */

async function fetchFromContentScript(path, queryParamList) {
  const tabs = await browser.tabs.query({
    // This is the same as host permissions in the manifest
    url: ['*://*.codeforces.com/*'],
  });

  if (tabs.length === 0) {
    throw new Error('No Codeforces tab open :<');
  }

  // Prefer a loaded tab
  let tab = tabs.find(tab => tab.status === 'complete');
  if (tab === undefined) {
    tab = tabs[0];
  }

  const msg = {
    type: 'API_FETCH',
    path,
    queryParamList,
  };
  return await browser.tabs.sendMessage(tab.id, msg);
}

/* ----------------------------------------------- */
/*   Prediction                                    */
/* ----------------------------------------------- */

function isUnratedByName(contestName) {
  const lower = contestName.toLowerCase();
  return UNRATED_HINTS.some((hint) => lower.includes(hint));
}

function anyRowHasTeam(rows) {
  return rows.some((row) => row.party.teamId != null || row.party.teamName != null)
}

async function getDeltas(contestId) {
  const prefs = await settings.getPrefs();
  return TOP_LEVEL_CACHE.getOr(contestId, () => calcDeltas(contestId, prefs));
}

async function calcDeltas(contestId, prefs) {
  if (!prefs.enablePredictDeltas && !prefs.enableFinalDeltas) {
    return { result: 'DISABLED' };
  }

  const contestBasic = await CONTESTS.getCached(contestId);
  if (contestBasic !== undefined && isUnratedByName(contestBasic.name)) {
    return { result: 'UNRATED_CONTEST' };
  }

  const contest = await CONTESTS_COMPLETE.fetch(contestId);
  await CONTESTS.update(contest.contest);

  if (contest.isRated === Contest.IsRated.NO) {
    return { result: 'UNRATED_CONTEST' };
  }

  if (!DEBUG_FORCE_PREDICT && contest.isRated === Contest.IsRated.YES) {
    if (!prefs.enableFinalDeltas) {
      return { result: 'DISABLED' };
    }
    return {
      result: 'OK',
      prefs,
      predictResponse: getFinal(contest),
    };
  }

  // Now contest.isRated = LIKELY
  if (isUnratedByName(contest.contest.name)) {
    return { result: 'UNRATED_CONTEST' };
  }
  if (anyRowHasTeam(contest.rows)) {
    return { result: 'UNRATED_CONTEST' };
  }
  if (!prefs.enablePredictDeltas) {
    return { result: 'DISABLED' };
  }
  return {
    result: 'OK',
    prefs,
    predictResponse: await getPredicted(contest),
  };
}

function predictForRows(rows, ratingBeforeContest) {
  const contestants = rows.map((row) => {
    const handle = row.party.members[0].handle;
    return new Contestant(handle, row.points, row.penalty, ratingBeforeContest.get(handle));
  });
  return predict(contestants, true);
}

function getFinal(contest) {
  // Calculate and save the performances on the contest object if not already saved.
  if (contest.performances === null) {
    const ratingBeforeContest = new Map(
      contest.ratingChanges.map((c) => [c.handle, contest.oldRatings[c.handle]]));
    const rows = contest.rows.filter((row) => {
      const handle = row.party.members[0].handle;
      return ratingBeforeContest.has(handle);
    });
    const predictResultsForPerf = predictForRows(rows, ratingBeforeContest);
    contest.performances = new Map(predictResultsForPerf.map((r) => [r.handle, r.performance]));
  }

  const predictResults = [];
  for (const change of contest.ratingChanges) {
    predictResults.push(
        new PredictResult(
            change.handle, change.oldRating, change.newRating - change.oldRating,
            contest.performances.get(change.handle)));
  }
  return new PredictResponse(predictResults, PredictResponse.TYPE_FINAL, contest.fetchTime);
}

async function getPredicted(contest) {
  const ratingMap = await RATINGS.fetchCurrentRatings(contest.contest.startTimeSeconds * 1000);
  const isEduRound = contest.contest.name.toLowerCase().includes('educational');
  let rows = contest.rows;
  if (isEduRound) {
    // For educational rounds, standings include contestants for whom the contest is not rated.
    rows = contest.rows.filter((row) => {
      const handle = row.party.members[0].handle;
      // Rated if the user is unrated or has rating below EDU_ROUND_RATED_THRESHOLD
      return !ratingMap.has(handle) || ratingMap.get(handle) < EDU_ROUND_RATED_THRESHOLD;
    });
  }
  const predictResults = predictForRows(rows, ratingMap);
  return new PredictResponse(predictResults, PredictResponse.TYPE_PREDICTED, contest.fetchTime);
}

/* ----------------------------------------------- */
/*   Cache stuff                                   */
/* ----------------------------------------------- */

async function maybeUpdateContestList() {
  const prefs = await settings.getPrefs();
  if (!prefs.enablePredictDeltas && !prefs.enableFinalDeltas) {
    return;
  }
  await CONTESTS.maybeRefreshCache();
}

async function getNearestUpcomingRatedContestStartTime() {
  let nearest = null;
  const now = Date.now();
  const contests = await CONTESTS.list();
  for (const c of contests) {
    const start = (c.startTimeSeconds || 0) * 1000;
    if (start < now || isUnratedByName(c.name)) {
      continue;
    }
    if (nearest === null || start < nearest) {
      nearest = start;
    }
  }
  return nearest;
}

async function maybeUpdateRatings() {
  const prefs = await settings.getPrefs();
  if (!prefs.enablePredictDeltas || !prefs.enablePrefetchRatings) {
    return;
  }
  const startTimeMs = await getNearestUpcomingRatedContestStartTime();
  if (startTimeMs !== null) {
    await RATINGS.maybeRefreshCache(startTimeMs);
  }
}

/* ----------------------------------------------- */
/*   Badge stuff                                   */
/* ----------------------------------------------- */

function setErrorBadge(sender) {
  const tabId = sender.tab.id;
  browser.action.setBadgeText({ text: '!', tabId });
  if (browser.action.setBadgeTextColor) {  // Only works in Firefox
    browser.action.setBadgeTextColor({ color: 'white', tabId });
  }
  browser.action.setBadgeBackgroundColor({ color: 'hsl(355, 100%, 30%)', tabId });
}

/* ----------------------------------------------- */
/*   Bug fixes                                     */
/* ----------------------------------------------- */

browser.runtime.onInstalled.addListener((details) => {
  if (details.previousVersion && compareVersions(details.previousVersion, '0.6.2') <= 0) {
    // Clear cache to remove stale timestamp
    // https://github.com/meooow25/carrot/issues/31
    browser.storage.local.clear();
  }
});
