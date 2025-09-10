'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "692d80e88200f73c6de4cc7beff9c264",
"version.json": "68449fb351ea1709fe0cba306dfcd32f",
"index.html": "bc47ff544f1823b600268f32bae1e7e4",
"/": "bc47ff544f1823b600268f32bae1e7e4",
"main.dart.js": "c07f761b47e35b21531033ca85a9e48a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5d88fff941eeb0affcf8ec5e26fcab0e",
".git/config": "963358a9051a08d946f91231cd0080ca",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/cc533d23c1b977ed0fa620e94199c49cff6d93": "c113419c1884044b2d3eff27ccf55b7a",
".git/objects/33/8ab618325a19618e9ba936182c0b237e201ebd": "ad11e5b478386ad23e3f4b97b50624e7",
".git/objects/33/b4015caee01a771611985917f47fadf89d3dae": "b47d5d1af44ed60636d6d724ce2ecea1",
".git/objects/9c/64c0e43f0904ccfcc702792d86be6498ec63af": "dcbf1cc1dfc21f07cabdd450b1ed0758",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/4a9a5759ba94e043c48a2138a094320c9fa824": "ccc53c7b9f99b4b7e5beb276b0e82c57",
".git/objects/df/e448bf6df665567a8ad20e33de29f266d5ce42": "99602e72d49d70435e360133d462f3f8",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/2316a62b490159bcba5097c698fd6a32a3c561": "e25ca7030df5e1e134e5a763026beaa5",
".git/objects/a2/79f6d9469127935bae222935eaa531f5d843e8": "2ac0d9a3c77a5ba30122cb2e89e891cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/883766d10687771eb63369ae931a6a4bd00ab1": "e87281b8a4c091c96eb36952b0ea8448",
".git/objects/f4/3e604955b915e72814d97b70c7a0a73758861a": "9fafc327bf421ff4a48f23ad99e97c7f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/93dc927d4eb7634ed149b400b1b1afc0cc135b": "e5c39c4f1b80691eaecfecd9f31235e7",
".git/objects/cf/095317ebef6692e7de9dbb6a3140b76d8339e6": "9567a5e75d245de0cea41c2fc17e69ca",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/87/184deef20f486ed36b16269fa9cbc1a2e175d8": "fc6152dc51da7dd43988074cbb558ef7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/cd866d836613ee6117856a7885b7cd7d75551c": "fae2fb559adc11566dc385a4334d261b",
".git/objects/38/ee8196956396d6a57d239833b83e65e9de2043": "4a3f06c86a5bbc4fa24e4e3a24311ada",
".git/objects/9a/ecedc8bbac8ee5a9bb2fb52cec5c22494e8fea": "2ae108f6fef2f6e69755be40f798ce27",
".git/objects/65/57469780695b5be1118b0d893d02ed46d851f6": "5638e0f36d0858d22f332739b484a4d0",
".git/objects/62/b1973412ebe31e162c2821812f5a73fbe695b9": "f8c13295ac050f3b130754486d44e7d3",
".git/objects/96/d9539af7cb701671e4f990def572db29bcd1ae": "cc9a24c304d8fca42eada50078d0f9a3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/30/05885bcbfbfbcbd9d62575d6376797563f1d72": "fab15d3b44fd131386d7c755a599db0c",
".git/objects/bf/bb21fadcf20713fe20695a1ef7fa35f7676e7e": "e3d01040100cb43f2eea0e225f6715a1",
".git/objects/d3/e945ec328bf0fb26bf786fdff8b8bebda1dd3c": "843ae48c63a986a1f22293aa11393b11",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/2aefb94a7a33f0d4fcafcaecec2aa7783e4996": "c1ea337cceffd4de65034d90dcd15c85",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/8d037762daa0d65680402518ea05960a093588": "524572d10a3ed64529c0271bba29d7ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/c37c8f1d1de8f0dc9598c556c27bf481b6f631": "684f2aa127f75c95801d8beced04c0f6",
".git/objects/f6/2387f79905015df435e5e08636ee489b61a023": "2db1e65ddd4053b52126bae7b664af04",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/be52a7c30e3c32ca4644e3537aa55252a87e0b": "d65b77cc89c32ab77727faf5b8968dc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/619f275e021e89db8eac44eaa68aa4fe760fa2": "b2d64886b68f6b8048dd158e48d886ce",
".git/objects/84/3a55f00343e26862732e26f7d5cd8e5edf850a": "fe68c6895dfb35a5b8c2fd09cb9b435f",
".git/objects/4a/580816d0430a1383394dd425125226a54365b8": "8f8989d355323be7bf78b2422d62f89c",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8d/72ada54c71118a8d77791cceb6c49155b0c5cb": "471d09f1a97dc599a3741199e7bbd656",
".git/objects/8c/f51e5c1fd52b0364d414fb3f2bdd811c800aaf": "23b3e5e0253f126604c5fcd66b85bba9",
".git/objects/78/38276e9140dfbc9bec38105ed5032044666860": "11d716b631b157debffc2963cd45f7bf",
".git/objects/78/69ca88aa772d591b306b1e600f4756e5ea5403": "eaa31b352019537726333093ce7ab2c3",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/dc4c40b1aca3a2fc3e0a362f942fae8f1b6fa4": "19be7d3a0d71bf57ec40b19d71c07cbc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "54d7c3d631e2f5b0b8a8761c0470783a",
".git/logs/refs/heads/main": "b8cb209a4e264f4f0f39650585f5f741",
".git/logs/refs/remotes/origin/main": "25ff00e726ef458ae0ac3c1afa0b4e86",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7233f3fc2c8f4d6f7c06c75ae2a222e2",
".git/refs/remotes/origin/main": "7233f3fc2c8f4d6f7c06c75ae2a222e2",
".git/index": "b94e8b1e3d86b3d043dab4b2fcd0c822",
".git/COMMIT_EDITMSG": "93026f4f5d67febf83e15cf4cf08b82a",
"assets/AssetManifest.json": "358fc7daa53fb788031927c029cb27d4",
"assets/NOTICES": "f97aeba11c1a67eef48a3356ff6743f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6b23254e17154cbe892a56e1f3bc66b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3eaf296653b68a2e8073fba9f5bded11",
"assets/fonts/MaterialIcons-Regular.otf": "72db38fed4f83f55f2f88a3f22c548a4",
"assets/assets/images/deck.png": "b0799d0e17868dc7541982f31301f502",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
